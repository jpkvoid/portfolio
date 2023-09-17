
var count = 0;

document.addEventListener('keydown', (event) => {
  const x = event.key;
  if ( x.length === 1 && count < 80 ) {
    document.getElementById("body").innerText = document.getElementById("body").innerText.slice(0, -1);
    document.getElementById("body").insertAdjacentText('beforeend', x + '_');
    count = count + 1;
  } else if (x === 'Enter') {
    document.getElementById("body").innerText = document.getElementById("body").innerText.slice(0, -1);
    document.getElementById("body").insertAdjacentHTML('beforeend', '<br>_');
    window.scrollTo(0, document.body.scrollHeight);
    count = 0;
  }
}, false);


function restart() {
  document.getElementById("body").innerText = '_';
  count = 0;
  document.getElementById("restart").blur();
};

function printDocument() {
  document.getElementById("restart").style.display = "none";
  document.getElementById("print").style.display = "none";
  document.getElementById("fullscreen").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("body").innerText = document.getElementById("body").innerText.slice(0, -1);
  window.print();
  document.getElementById("body").insertAdjacentText('beforeend', '_');
  document.getElementById("restart").style.display = "initial";
  document.getElementById("print").style.display = "initial";
  document.getElementById("fullscreen").style.display = "initial";
  document.getElementById("title").style.display = "block";
  document.getElementById("print").blur();
}

function fullscreen() {
  document.documentElement.requestFullscreen();
  document.getElementById("fullscreen").blur();
}
