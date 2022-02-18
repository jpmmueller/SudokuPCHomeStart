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
        // console.log("Zeile: " + (xP) ,"Spalte: " + (yP));
        // console.log("selx: " + selectedX  , "sely: " + selectedY );
        // console.log(block);
        // console.log("Erste Blockzeile: " + firstBlockRow , "Erste Blockspalte: " + firstBlockCol);
      }else{
        inside = false;
        // console.log("ausserhalb rechts oder unten");
      }
      }else{
        inside = false;
        // console.log("ausserhalb links oder oben");
      }
  }

  function validateAll(valNum){
    toArr(valNum);
    if (valNum > 0){
      isValidInRow();
    }
  }

  function isValidInRow(){
    let c = 0;
    let d = 0;    
    let colgefunden;
    let indexTemp;
    let tempZahl = 0;
    let test;
    rowsbefore = ((xP - 1));// xP-1 gibt die Anzahl der Reihen vor der aktuellen Reihe
    startIndex = (rowsbefore * 9);
    for (tempZahl = 1; tempZahl <= 9; tempZahl++){ // wandert von links (0) nach rechts(8). Das sind insg. 9 Kästchen.
      tempArray = [];
      checkitbaby((tempZahl));
      console.log("nach checkitbaby und vor weiss rot check")
      console.log("temparrray inhalt: " + tempArray);
      console.log("länge des temparry: " + tempArray.length);
      if (tempArray.length > 1){
        for (let i = 0; i < tempArray.length; i++){          
          console.log("in dem pluralcheck")         
          test = tempArray[i];
          numArr[test][3] = false;
        }
      }else if(tempArray.length == 1) {
        for (let j = 0; j < tempArray.length; j++){ 
          console.log("in dem singelcheck")         
          test = tempArray[j];
          console.log(test)
          numArr[test][3] = true;
      }
    }
  }
}
  function checkitbaby(Zahl){
    for (col = 0; col <= 8; col++){
      // console.log("Start von checkitbaby vor push" )
      if (numArr[(startIndex + col)][2] == Zahl){
        // console.log("ab hier gehts mit " + Zahl + " los");
        something = (startIndex + col);
        tempArray.push(something);
        // console.log("es sollte was im temparray sein");
        // console.log("und zwar: " + tempArray);
        // console.log("Die Länge des tempArrays: " + tempArray.length);
        // console.log("checkitbaby mit " + Zahl + " ist fertig");
      }
    }
  } 

  function isValidInCol(){
    let col;
  }

  function isValidInBlock(){

  }