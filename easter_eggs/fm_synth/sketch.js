let path = [];
let osc, freq, mod, modFreq, delay, disto;
let sDelTime, sDelFb, sDisto;
let uiModAmp, uiFreq, uiModFreq, uiDelTime, uiDelFb, uiDrive;

function setup() {
  createCanvas(700, 700);
  
  sDelTime = createSlider(0.01, 0.99, 0.7, 0.01);

  sDelFb = createSlider(0, 0.6, 0.6, 0.01);
  
  sDisto = createSlider(0, 1, 0.7, 0.01);
  
  uiModAmp = createP('');
  uiModFreq = createP('');
  uiFreq = createP('');
  uiDelTime = createP('');
  uiDelFb = createP('');
  uiDrive = createP('');
  
  delay = new p5.Delay();
  disto = new p5.Distortion();
  
  osc = new p5.Oscillator('sawtooth');
  osc.amp(0);
  osc.freq(200);
  delay.process(osc);
  osc.start();
  
  mod = new p5.Oscillator('sawtooth');
  mod.amp(50);
  mod.freq(200);
  mod.start();
  mod.disconnect();
  
  osc.freq(mod);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  rect(0, 0, width, height);
  let freqVal;
  let modFreqVal;
  let delTimeVal = sDelTime.value();
  let delFbVal = sDelFb.value();
  let distoVal = sDisto.value();
  
  disto.process(osc, distoVal, '4x' );
  
  delay.process(disto, delTimeVal, delFbVal, 1000);
  
  if ((mouseIsPressed) && (mouseX < width) && (mouseY < height) && (mouseX > 0) && (mouseY > 0)) {
    
    osc.amp(0.5, 0.3);
    path.push(new p5.Vector(mouseX, mouseY));
    freqVal = map(path[path.length-1].x, 0, width, 1, 20);
    modFreqVal = map(path[path.length-1].y, 0, height, 1, 20);
    osc.freq(freqVal);
    mod.freq(modFreqVal);
    mod.amp((path[0].x + path[0].y) - (path[path.length-1].x + path[path.length-1].y));

  } else {
    if (path.length > 1) {
      freqVal = map(path[path.length-1].x, 0, width, 1, 20);
      modFreqVal = map(path[path.length-1].y, 0, height, 1, 20);
      //osc.freq(freqVal);
      //mod.freq(modFreqVal);
      //mod.amp(dist(path[0].x, path[0].y, path[path.length-1].x, path[path.length-1].y));
      osc.amp(0,0.3);
      for (let i=0; i < path.length/75; i++) {
        path.shift();
      }
      // path =[];
    } else {
      //osc.amp(0, 0.3);
      path = [];
    }
  }
  
  beginShape();
    for (let i = 0; i < path.length; i++) {
      vertex(path[i].x, path[i].y);
    }
  endShape();
  
  uiModAmp.html('mod.amp: ' + mod.getAmp());
  uiModFreq.html('mod.freq: ' + mod.getFreq());
  uiFreq.html('car.freq: ' + osc.getFreq());
  uiDelTime.html('del.time: ' + delTimeVal);
  uiDelFb.html('del.fb: ' + delFbVal);
  uiDrive.html('drive.amnt: ' + distoVal);
}
