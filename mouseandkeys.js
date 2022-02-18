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
        if (selectedY + 65 < 571){
          selectedY = selectedY + 65;
        }else if (selectedX + 65 < 661){
          selectedX = selectedX + 65;
        }else{
          selectedX = 140;
        }
        break;
        case "ArrowUp":
        if (selectedY - 65 > 49){
          selectedY = selectedY - 65;
        }else{
          selectedY = 570;
        }
        break;
        case "ArrowDown":
          if (selectedY + 65 < 571){
            selectedY = selectedY + 65;
          }else{
            selectedY = 50;
          }
          break;
        case "ArrowRight":
          if (selectedX + 65 < 661){
            selectedX = selectedX + 65;
          }else{
            selectedX = 140;
          }
          break;
        case "ArrowLeft":
          if (selectedX - 65 > 139){
            selectedX = selectedX - 65;
          }else{
            selectedX = 660;
          }
          break;
      }
      redraw();
      checkinside();
      sqMark();      
    }
}