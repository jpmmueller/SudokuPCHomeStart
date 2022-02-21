function checkinside(){
  if (selectedX > 139 && selectedY > 49 ) {
    if (selectedX < 661 && selectedY < 571) {
      inside = true;
      xP = (((selectedY - nully) / hoehe) + 1);
      yP = (((selectedX - nullx) / breite) + 1);
    }else{
      inside = false;
    }
  }else{
    inside = false;
  }
}

function validateAll(valNum){
  let alteZahl;  

  alteZahl = numArr[((xP - 1) * 9 + (yP - 1))][2];
  toArr(valNum);
  isValidInRowColBlock(alteZahl, valNum);

}

function isValidInRowColBlock(altZCheck, neuZCheck){
  let rowsbefore;
  let colsbefore;
  let blocksbefore;
  let numToCheck;  
  let ZCheckCounter;
  let test;

  blockCol = floor((xP - 1) / 3);
  blockRow = floor((yP - 1) / 3);
  firstBlockCol = (blockRow * 3) + 1;
  firstBlockRow = (blockCol * 3) + 1;
  block = (blockRow + (blockCol * 3)) + 1;
  
  
  rowsbefore = ((xP - 1));// xP-1 gibt die Anzahl der Reihen vor der aktuellen Reihe
  startIndexRow = (rowsbefore * 9);
  colsbefore = ((yP - 1));// yP-1 gibt die Anzahl der Spalten vor der aktuellen Spalte
  startIndexCol = (colsbefore);
  startIndexBlock = (((firstBlockCol - 1) + ((firstBlockRow - 1) * 9)));

  for (ZCheckCounter = 0; ZCheckCounter < 2;ZCheckCounter++){
    if (ZCheckCounter == 0){
      numToCheck = altZCheck;
    }
    if (ZCheckCounter == 1){ 
    numToCheck = neuZCheck;
    } 
    
    tempArrayRow = [];
    tempArrayCol = [];
    tempArrayBlock = [];

    for (stepperColRowBlock = 0; stepperColRowBlock <= 8; stepperColRowBlock++){ // wandert von links (0) nach rechts(8). Das sind insg. 9 Kästchen.
      checkInRow((numToCheck));
      checkInCol(numToCheck);
    }// for stepperColRowBlock Ende
    // console.log("in Zeile: " + xP + " kommt die Zahl: " + numToCheck + " so oft vor: " + tempArrayRow.length);
    // console.log("in Spalte: " + yP + " kommt die Zahl: " + numToCheck + " so oft vor: " + tempArrayCol.length);
    
    if (tempArrayRow.length > 1 ){
      for (let i = 0; i < tempArrayRow.length; i++){          
        test = tempArrayRow[i];
        numArr[test][3] = false;
      }
    }else if(tempArrayRow.length <= 1 && tempArrayCol.length <= 1){
      for (let j = 0; j < tempArrayRow.length; j++){ 
        test = tempArrayRow[j];
        numArr[test][3] = true;
      }
    }
    if ( tempArrayCol.length > 1){
      for (let i = 0; i < tempArrayCol.length; i++){          
        test = tempArrayCol[i];
        numArr[test][3] = false;
      }
    }else if(tempArrayCol.length <= 1 && tempArrayRow.length <= 1){
      for (let j = 0; j < tempArrayCol.length; j++){ 
        test = tempArrayCol[j];
        numArr[test][3] = true;
      }
    }
  }//--- for ZCheckCounter Ende ---
}//--- isValidInRow() Ende ---

function checkInRow(Zahl){
  if (numArr[(startIndexRow + stepperColRowBlock)][2] == Zahl){//stepperColRowBlock geht von 0-8.
    //  Das wird jeweils zum Startindex der aktuellen Zeile addiert und so wird munter immer 1 nach rechts gewandert.
      tempArrayRow.push((startIndexRow + stepperColRowBlock));
  }
}//--- checkInRow() Ende ---

function checkInCol(Zahl){
  if (numArr[(startIndexCol + (stepperColRowBlock * 9))][2] == Zahl){//stepperColRowBlock geht von 0-8.
    // Das jeweils * 9 findet das nächste Kästchen von oben nach unten.
      tempArrayCol.push((startIndexCol + (stepperColRowBlock * 9)));
  }
}//--- checkInCol() Ende ---

function checkInBlock(Zahl){
  if (stepperColRowBlock % 3 == 0){
    for (let i = 0; i <= 2; i++){
      if (numArr[(startIndexBlock + (i * 3) + stepperColRowBlock)][2] == Zahl){//stepperColRowBlock geht von 0-3.
        //  Das wird jeweils zum Startindex des aktuellen blocks addiert und so wird munter immer 1 nach rechts gewandert.
        // i wandert im Block Zeilenweise nach unten
          tempArrayBlock.push((startIndexBlock + blockstep));
      }
    }    
  }
}//--- isValidInBlock() Ende ---