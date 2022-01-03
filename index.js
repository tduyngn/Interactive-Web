var pix = document.getElementsByClassName("pixel");

for (var i = 0; i < pix.length; i++) {
  pix[i].style.animationDelay = Math.floor(Math.random()*5000)+"ms";
}

alert("(PC only) move around to find the dot")