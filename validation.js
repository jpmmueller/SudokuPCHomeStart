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
    toArr(valNum);
    if (valNum > 0){
      isValidInRow();
      isValidInCol();
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
      tempArray = [];
      checkInRow((tempZahlRow));
      if (tempArray.length > 1){
        for (let i = 0; i < tempArray.length; i++){          
          test = tempArray[i];
          numArr[test][3] = false;
        }
      }else if(tempArray.length == 1) {
        for (let j = 0; j < tempArray.length; j++){ 
          test = tempArray[j];
          console.log(test)
          numArr[test][3] = true;
      }
    }
  }
}
  function checkInRow(Zahl){
    for (col = 0; col <= 8; col++){
      if (numArr[(startIndex + col)][2] == Zahl){
        something = (startIndex + col);
        tempArray.push(something);
      }
    }
  } 

  function isValidInCol(){
    let c = 0;
    let d = 0;    
    let tempZahlCol = 0;
    let test;
    colsbefore = ((yP - 1));// xP-1 gibt die Anzahl der Reihen vor der aktuellen Reihe
    startIndexCol = (colsbefore);
    for (tempZahlCol = 1; tempZahlCol <= 9; tempZahlCol++){ // wandert von links (0) nach rechts(8). Das sind insg. 9 Kästchen.
      tempArray = [];
      checkInCol((tempZahlCol));
      if (tempArray.length > 1){
        for (let i = 0; i < tempArray.length; i++){          
          test = tempArray[i];
          numArr[test][3] = false;
        }
      }else if(tempArray.length == 1) {
        for (let j = 0; j < tempArray.length; j++){ 
          test = tempArray[j];
          console.log(test)
          numArr[test][3] = true;
      }
    }
  }
  }

  function checkInCol(Zahl){
    for (row = 0; row <= 8; row++){
      if (numArr[(startIndexCol + (row * 9))][2] == Zahl){
        something = (startIndexCol + (row * 9));
        tempArray.push(something);
      }
    }
  } 


  function isValidInBlock(){

  }