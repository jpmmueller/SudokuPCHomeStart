function checkinside(){
    if (selectedX > 139 && selectedY > 49 ) {
      if (selectedX < 661 && selectedY < 571) {
        inside = true;
        xP = (((selectedY - nully) / hoehe) + 1);
        yP = (((selectedX - nullx) / breite) + 1);
        blockCol = floor((xP - 1) / 3);
        blockRow = floor((yP - 1) / 3);
        firstBlockCol = (blockRow * 3) + 1;
        firstBlockRow = (blockCol * 3) + 1;
        block = (blockRow + (blockCol * 3)) + 1;
      }else{
        inside = false;
      }
      }else{
        inside = false;
      }
  }

function validateAll(valNum){
  let rowsbefore;
  let colsbefore;
  let startIndexRow;
  let startIndexCol;
  let numToCheck;
  let tempNum;
  let alteZahl;
  
  
  let tempArrayCol =[];
  let tempArrayBlock =[];
  let something;

  alteZahl = numArr[((xP - 1) * 9 + (yP - 1))][2];
  // console.log("ich bin die alteZahl: " + alteZahl);
  // console.log("und ich bin die neue Zahl: " + valNum);
  toArr(valNum);
  isValidInRow(alteZahl, valNum);
  // isValidInCol();
  }

function isValidInRow(altZCheck, neuZCheck){
  let c = 0;
  let d = 0;  
  let t = [];  
  let rowStepinCol;
  let ZCheckCounter;
  let indexTemp;
  let test;
  rowsbefore = ((xP - 1));// xP-1 gibt die Anzahl der Reihen vor der aktuellen Reihe
  startIndexRow = (rowsbefore * 9);
  colsbefore = ((yP - 1));// yP-1 gibt die Anzahl der Spalten vor der aktuellen Spalte
  startIndexCol = (colsbefore);
  for (ZCheckCounter = 0; ZCheckCounter < 2;ZCheckCounter++){
    if (ZCheckCounter == 0){
      numToCheck = altZCheck;
    }
    if (ZCheckCounter == 1){ 
    numToCheck = neuZCheck;
    } 
    
    tempArrayRow = [];
    tempArrayCol = [];
    for (stepperColRowBlock = 0; stepperColRowBlock <= 8; stepperColRowBlock++){ // wandert von links (0) nach rechts(8). Das sind insg. 9 Kästchen.
      checkInRow((numToCheck));
      checkInCol(numToCheck);
    }// for stepperColRowBlock Ende
    console.log("in Zeile: " + xP + " kommt die Zahl: " + numToCheck + " so oft vor: " + tempArrayRow.length);
    console.log("in Spalte: " + yP + " kommt die Zahl: " + numToCheck + " so oft vor: " + tempArrayCol.length);
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

  }// for ZCheckCounter Ende    
}// isValidInRow() Ende

function checkInRow(Zahl){
  if (numArr[(startIndexRow + stepperColRowBlock)][2] == Zahl){
      tempArrayRow.push((startIndexRow + stepperColRowBlock));
  }
}// checkInRow() Ende

function checkInCol(Zahl){
  if (numArr[(startIndexCol + ((stepperColRowBlock + 0) * 9))][2] == Zahl){
      tempArrayCol.push((startIndexCol + ((stepperColRowBlock + 0) * 9)));
  }
}// checkInCol() Ende


function isValidInBlock(){

}