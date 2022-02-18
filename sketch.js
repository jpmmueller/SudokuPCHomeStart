let numArr = [];
let xP;
let yP;

var nullx = 140;
var nully = 50;

var breite = 65;
var hoehe = 65;

let selectedX = -1;
let selectedY = -1;
let actuellX;
let actuellY;
let actRect = false;

let blockCol;
let blockRow;
let firstBlockCol;
let firstBlockRow;
let block;

let inside = false;
let editmode = false;

let isnumber = false;
let rowCorrect;

let rowsbefore;
let col = 0;
let startIndex;
let numToCheck;
let tempNum;
let x = 0;
let tempArray =[];
let something;


function setup() {
  createCanvas(800, 1200);
  initArr();
  // By default don't re draw every frame
  noLoop();
}

function draw() {
  background(255);
  noFill();
  //strokeWeight(2);  
  sudokulines();
  toGrid();
  sqMark();  
  // console.log("Editmode ist " + editmode);
  // console.log(inside);    
}

function initArr(){
  for (let i = 0; i <= 80; i++){
    numArr[i] = [0,0,0,true];
  }
}


function sqMark(){  
  if(inside == true){
      strokeWeight(0.7);
      fill(0, 0, 255);
      rect(selectedX + 2, selectedY + 2, breite - 4, hoehe - 4);
      actuellX = selectedX;
      actuellY = selectedY;
      actRect = true;
      sqNum();
  } else if(inside == false){
      editmode = false;
  }
}

// Wenn ein neues Quadrat gezeichnet wird, wird mit sqNum eine vorhandene Zahl aus numArr geholt und weiss gemacht
function sqNum(){  
  if (numArr[(((xP -1) * 9) + yP) - 1][2] > 0 && numArr[(((xP -1) * 9) + yP) - 1][2] <=9){
    let numToEdit;
    numToSq = numArr[(((xP -1) * 9) + yP) - 1][2];
    editmode = true;
    // isValidInRow(numToSq);
    textAlign(CENTER, CENTER);
    if (numArr[(((xP -1) * 9) + yP) - 1][3] == false){
      fill(255,0,0);                
    } else {        
      fill(255);        
    }
    textSize(breite / 1.3);
    text(numToSq, selectedX + breite / 2, selectedY + hoehe  / 2);
  }
}

// wird von keypressed() aufgerufen. Reagiert auf Zahleneingabe
function numberstorect() {
  if (inside == true){
      redraw();    
      textAlign(CENTER, CENTER);
      if (rowCorrect == false){
        fill(255,0,0);                
      } else {        
        fill(255);        
      }
      textSize(breite / 1.3);
      text(key, selectedX + breite / 2, selectedY + hoehe  / 2);    
  }
}

// wird von keypressed() aufgerufen
function toArr(num){
  // if (rowCorrect == true){
    numArr[(((xP -1) * 9) + yP) - 1] =[selectedX,selectedY,num];
    }
  // }

// wird von draw() aufgerufen
  function toGrid(){
    for (let i = 0; i <= 80; i++){
      if (numArr[i][2] > 0){
          textAlign(CENTER, CENTER);
          if (numArr[i][3] == false){
            fill(255,0,0);
          }else{
            fill(0);
          }
          textSize(breite / 1.3);
          text(numArr[i][2], numArr[i][0] + breite / 2, numArr[i][1] + hoehe  / 2);
          //console.log(numArr[i][2], numArr[i][0], numArr[i][1]);
      }
    }
}
