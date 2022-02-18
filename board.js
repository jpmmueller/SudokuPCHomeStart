function sudokulines() {
    //The vertical lines
    for (var i = 1; i <= 8; i++) {
      if (i == 3 || i == 6) {
        strokeWeight(3);
      } else {
        strokeWeight(1);
      }
      line(nullx + breite * i, nully, nullx + breite * i, nully + 9 * hoehe);
    }
    //The horizontal lines
    for (var i = 1; i <= 8; i++) {
      if (i == 3 || i == 6) {
        strokeWeight(3);
      } else {  
        strokeWeight(1);
      }    
      line(nullx, nully + hoehe * i, nullx + 9 * breite, nully + hoehe * i);
    }
    //The big rectangle around
    strokeWeight(3);
    rect(nullx, nully, 9 * breite, 9 * hoehe);
  }