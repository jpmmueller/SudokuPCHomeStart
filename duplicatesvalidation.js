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
    let col = 0;
    let row = 0;
    let startIndexRow;
    let startIndexCol;
    let numToCheck;
    let tempNum;
    let x = 0;
    let tempArrayRow =[];
    let tempArrayCol =[];
    let tempArrayBlock =[];
    let something;
    toArr(valNum);
    if (valNum > 0){
      isValidInRow();
      // isValidInCol();
    }
  }

  function isValidInRow(){
    let c = 0;
    let d = 0;    
    let colgefunden;
    let indexTemp;
    let tempZahlRow = 0;
    let test;
    rowsbefore = ((xP - 1));// xP-1 gibt die Anzahl der Reihen vor der aktuellen Reihe
    startIndex = (rowsbefore * 9);
    for (tempZahlRow = 1; tempZahlRow <= 9; tempZahlRow++){ // wandert von links (0) nach rechts(8). Das sind insg. 9 Kästchen.
      tempArrayRow = [];
      checkInRow((tempZahlRow));
      console.log("Das RowArray: " + tempArrayRow)
      if (tempArrayRow.length > 1){
        for (let i = 0; i < tempArrayRow.length; i++){          
          test = tempArrayRow[i];
          numArr[test][3] = false;
        }
      }else if(tempArrayRow.length == 1) {
        for (let j = 0; j < tempArrayRow.length; j++){ 
          test = tempArrayRow[j];
          numArr[test][3] = true;
        }
      }
    }
  }
  function checkInRow(Zahl){
    for (col = 0; col <= 8; col++){
      if (numArr[(startIndex + col)][2] == Zahl){
        tempArrayRow.push((startIndex + col));
      }
    }
  } 

  function isValidInCol(){
    let tempZahlCol = 0;
    colsbefore = ((yP - 1));// yP-1 gibt die Anzahl der Spalten vor der aktuellen Spalte
    startIndexCol = (colsbefore);
    for (tempZahlCol = 1; tempZahlCol <= 9; tempZahlCol++){ // wandert von links (0) nach rechts(8). Das sind insg. 9 Kästchen.
      tempArray = [];
      checkInCol((tempZahlCol));
      if (tempArrayCol.length > 1){
        for (let i = 0; i < tempArrayCol.length; i++){          
          test = tempArrayCol[i];
          numArr[test][3] = false;
        }
      }else if(tempArrayCol.length == 1) {
        for (let j = 0; j < tempArrayCol.length; j++){ 
          test = tempArrayCol[j];
          console.log(test)
          numArr[test][3] = true;
      }
    }
  }
  }

  function checkInCol(Zahl){
    for (row = 0; row <= 8; row++){
      if (numArr[(startIndexCol + (row * 9))][2] == Zahl){
        tempArrayCol.push((startIndexCol + (row * 9)));
      }
    }
  } 


  function isValidInBlock(){

  }