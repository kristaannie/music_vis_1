var song;



function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("sycamore.mp3", loaded);
  amp = new p5.Amplitude();
  fft = new p5.FFT();
  
}

function loaded() {
  song.play();
}

function draw() {
  background(50, 220, 200); 
  
  // //circle
  // var spectrum = fft.analyze();
  // ellipseMode(CENTER);
  // noStroke();
  // fill(70,0,0,200);
  // ellipse (width/2, height/2, spectrum, spectrum);
  
  
  
  
  var spectrum = fft.analyze();

  noStroke();
  
   for (i = 200; i<spectrum.length - 200; i++) {
    fill(100, spectrum[i], 255, spectrum[i]);
    ellipse(i, map(spectrum[i], 0, 255, windowHeight/2, windowHeight), 10, 10);
   }
   
   
   for (j = 200; j<spectrum.length - 200; j++) {
    fill(255, spectrum[j], 100, spectrum[j]);
    ellipse(j, map(spectrum[j], 0, 255, windowHeight/2, 0), 10, 10);
   }
   
   
   for (b = 200; b<spectrum.length - 200; b++) {
    fill(255, spectrum[b], 200, spectrum[b]);
    ellipse(b, map(spectrum[b], 0, 255, windowHeight/2 - 100, 0), 10, 10);
   }
   
  
   for (c = 200; c<spectrum.length - 200; c++) {
    fill(255, spectrum[c], 200, spectrum[c]);
    ellipse(c, map(spectrum[c], 0, 255, windowHeight/2 + 100, windowHeight), 10, 10);
   }
  
  
  
  // //square
  // var vol = amp.getLevel();
  // var diam = map(vol, 0, 1, 10, 200);
  
  // rectMode(CENTER);
  // noStroke();
  // fill(0, 0, 70);
  // rect(width/2, height/2, diam, 50);
  
  
}