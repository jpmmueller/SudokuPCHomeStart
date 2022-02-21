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
    
    checkInRow(numToCheck);
    checkInCol(numToCheck);
    checkInBlock(numToCheck);

    console.log("Doppelte " + numToCheck + " In Block: " + block + ": " + tempArrayBlock.length);
    console.log("in Zeile: " + xP + " kommt die Zahl: " + numToCheck + " so oft vor: " + tempArrayRow.length);
    console.log("in Spalte: " + yP + " kommt die Zahl: " + numToCheck + " so oft vor: " + tempArrayCol.length);
    
    if (tempArrayRow.length > 1 ){
      for (let i = 0; i < tempArrayRow.length; i++){          
        test = tempArrayRow[i];
        if (numArr[test][2] > 0){
          numArr[test][3] = false;
        }
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
        if (numArr[test][2] > 0){
          numArr[test][3] = false;
        }
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
  for (let i = 0; i <= 8; i++){
    if (numArr[(startIndexRow + i)][2] == Zahl){//i geht von 0-8.
      //  Das wird jeweils zum Startindex der aktuellen Zeile addiert und so wird munter immer 1 nach rechts gewandert.
        tempArrayRow.push((startIndexRow + i));
    }
  }// for i Ende
}//--- checkInRow() Ende ---

function checkInCol(Zahl){
  for (let i = 0; i <= 8; i++){ 
    if (numArr[(startIndexCol + (i * 9))][2] == Zahl){//i geht von 0-8.
      // Das jeweils * 9 findet das nächste Kästchen von oben nach unten.
        tempArrayCol.push((startIndexCol + (i * 9)));
    }
  }// for i Ende
}//--- checkInCol() Ende ---

function checkInBlock(Zahl){
  for (let i = 0; i <= 2; i++){// wandert mit (i * 9) Zeilenweise nach unten.
    for (let j = 0; j <= 2; j++){// wandert Spaltenweise nach rechts.
      if (numArr[((startIndexBlock + (i * 9))  + j)][2] == Zahl){//j geht von 0-3.
        //(i * 9) wird jeweils zum Startindex des aktuellen Blocks addiert und so wird munter 
        //nach jedem j durchlauf immer 1 Zeile nach unten gewandert.
          tempArrayBlock.push((startIndexBlock + ((startIndexBlock + (i * 9))  + j)));
      }
    }// for j Ende
  }// for i Ende   
}//--- isValidInBlock() Ende ---