function checkinside(){
  let gridwidth, gridheight;
  gridwidth = (breite * (gridpat - 1));
  gridheight = (breite * (gridpat - 1));
  if (selectedX >= nullx && selectedY >= nully ) {
    if (selectedX <= (nullx + gridwidth) && selectedY <= (nully + gridheight) ) {
      console.log("drin");
      inside = true;
      xP = (((selectedY - nully) / hoehe) + 1);
      yP = (((selectedX - nullx) / breite) + 1);
    }else{
      inside = false;
      console.log("draussen");
    }
  }else{
    inside = false;
    console.log("draussen");
  }
}

function validateAll(valNum){
  let alteZahl;  

  alteZahl = numArr[((xP - 1) * gridpat + (yP - 1))][2];
  toArr(valNum);
  isValidInRowColBlock(alteZahl, valNum);

}

function isValidInRowColBlock(altZCheck, neuZCheck){
  let rowsbefore;
  let colsbefore;
  let numToCheck;  
  let ZCheckCounter;
  let tempArrayWert;

  blockCol = floor((xP - 1) / (gridpat / 3));
  blockRow = floor((yP - 1) / (gridpat / 3));
  firstBlockCol = (blockRow * (gridpat / 3)) + 1;
  firstBlockRow = (blockCol * (gridpat / 3)) + 1;
  block = (blockRow + (blockCol * (gridpat / 3))) + 1;
  
  
  rowsbefore = ((xP - 1));// xP-1 gibt die Anzahl der Reihen vor der aktuellen Reihe
  startIndexRow = (rowsbefore * gridpat);
  colsbefore = ((yP - 1));// yP-1 gibt die Anzahl der Spalten vor der aktuellen Spalte
  startIndexCol = (colsbefore);
  startIndexBlock = (((firstBlockCol - 1) + ((firstBlockRow - 1) * gridpat)));

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
        tempArrayWert = tempArrayRow[i];
        if (numArr[tempArrayWert][2] > 0){
          numArr[tempArrayWert][3] = false;
        }
      }
    }else if(tempArrayRow.length <= 1 && tempArrayCol.length <= 1){
      for (let j = 0; j < tempArrayRow.length; j++){ 
        tempArrayWert = tempArrayRow[j];
        numArr[tempArrayWert][3] = true;
      }
    }
    if ( tempArrayCol.length > 1){
      for (let i = 0; i < tempArrayCol.length; i++){          
        tempArrayWert = tempArrayCol[i];
        if (numArr[tempArrayWert][2] > 0){
          numArr[tempArrayWert][3] = false;
        }
      }
    }else if(tempArrayCol.length <= 1 && tempArrayRow.length <= 1){
      for (let j = 0; j < tempArrayCol.length; j++){ 
        tempArrayWert = tempArrayCol[j];
        numArr[tempArrayWert][3] = true;
      }
    }
  }//--- for ZCheckCounter Ende ---
}//--- isValidInRow() Ende ---

function checkInRow(Zahl){
  for (let i = 0; i <= (gridpat - 1); i++){
    if (numArr[(startIndexRow + i)][2] == Zahl){//i geht von 0-8.
      //  Das wird jeweils zum Startindex der aktuellen Zeile addiert und so wird munter immer 1 nach rechts gewandert.
        tempArrayRow.push((startIndexRow + i));
    }
  }// for i Ende
}//--- checkInRow() Ende ---

function checkInCol(Zahl){
  for (let i = 0; i <= (gridpat - 1); i++){ 
    if (numArr[(startIndexCol + (i * gridpat))][2] == Zahl){//i geht von 0-8.
      // Das jeweils * 9 findet das nächste Kästchen von oben nach unten.
        tempArrayCol.push((startIndexCol + (i * gridpat)));
    }
  }// for i Ende
}//--- checkInCol() Ende ---

function checkInBlock(Zahl){
  for (let i = 0; i <= ((gridpat / 3) - 1); i++){// wandert mit (i * 9) Zeilenweise nach unten.
    for (let j = 0; j <= ((gridpat / 3) - 1); j++){// wandert Spaltenweise nach rechts.
      if (numArr[((startIndexBlock + (i * gridpat))  + j)][2] == Zahl){//j geht von 0-3.
        //(i * 9) wird jeweils zum Startindex des aktuellen Blocks addiert und so wird munter 
        //nach jedem j durchlauf immer 1 Zeile nach unten gewandert.
          tempArrayBlock.push((startIndexBlock + ((startIndexBlock + (i * gridpat))  + j)));
      }
    }// for j Ende
  }// for i Ende   
}//--- isValidInBlock() Ende ---