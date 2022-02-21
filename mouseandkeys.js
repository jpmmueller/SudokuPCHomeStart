function mousePressed() {
  // Set the selection
  selectedX = (floor((mouseX - nullx) / breite) * breite) + nullx;
  selectedY = (floor((mouseY - nully) / hoehe) * hoehe) + nully;
  // Inside the Grid or not? Only when clicked
  checkinside();
  // console.log(actuellX,actuellY,selectedX,selectedY);
  // Only redraw when something changes and the cursor is inside.
  if (inside == true){      
      redraw();
  }
  if (inside == false){      
    
    redraw();
    
  }
  
}

function keyPressed(){  
  if (key >= 0 && key <= 9 && inside == true){
      isnumber = true;
      validateAll(key);
      // console.log(isValidInRow());
      numberstorect();          
  }      

  if (inside == true){
    switch (key){        
      case "Enter":
        if (selectedY + hoehe <= (nully + gridheight)){
          selectedY = selectedY + hoehe;
        }else if (selectedX + breite <= (nullx + gridwidth)){
          selectedX = selectedX + breite;
        }else{
          selectedX = nullx;
        }
        break;
        case "ArrowUp":
        if (selectedY - hoehe >= nully){
          selectedY = selectedY - hoehe;
        }else{
          selectedY = (nully + gridheight);
        }
        break;
        case "ArrowDown":
          if (selectedY + hoehe <= (nully + gridheight)){
            selectedY = selectedY + hoehe;
          }else{
            selectedY = nully;
          }
          break;
        case "ArrowRight":
          if (selectedX + breite <= (nullx + gridwidth)){
            selectedX = selectedX + breite;
          }else{
            selectedX = nullx;
          }
          break;
        case "ArrowLeft":
          if (selectedX - breite >= nullx){
            selectedX = selectedX - breite;
          }else{
            selectedX = (nullx + gridwidth);
          }
          break;
      }
      redraw();
      checkinside();
      sqMark();      
    }
}