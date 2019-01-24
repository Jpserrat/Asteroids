const keyCodes = {};
const canvas = new Canvas();
const audio = new Audio('audio/laser.wav');

canvas.ctx.fillStyle = 'white';
window.onload = function () {
  canvas.drawBg();
  canvas.startBg();
}


function start() {
  draw = setInterval( function() {
    canvas.draw();
  }, 2);
  asteroids = setInterval(function () {
    canvas.asteroids.push(new Asteroid);
  }, 5000);
}

function gameOver() {
  clearInterval(draw);
  clearInterval(asteroids);

  canvas.ctx.clearRect(0, 0, 850, 900);
  canvas.asteroids = [];
  canvas.ship.shots = [];
  canvas.minAsteroids = [];
  canvas.ship.x = 400;
  canvas.drawBg();
  canvas.maxScor();
  canvas.score = 0;
  canvas.gameOverBg();
}
 

document.onkeydown = function (e) {
  if (e.keyCode === 32 || e.keyCode === 37 || e.keyCode === 39) {
    keyCodes[e.keyCode] = e.type === 'keydown';
  } 
  if (keyCodes[37]) {
    canvas.ship.move('left');
  }
  if (keyCodes[39]) {
    canvas.ship.move('right');
  }
  if (e.keyCode === 13) {
    start();
  }
};

document.onkeyup = function (e) {
  if (e.keyCode === 32 || e.keyCode === 37 || e.keyCode === 39) {
    keyCodes[e.keyCode] = e.type === 'keydown';
  } 
  if (e.keyCode === 32) {
    canvas.ship.shots.push(new Shot());
    audio.play();
  } 
  if (keyCodes[39]) {
    canvas.ship.move('right');
  }
  if (keyCodes[37]) {
    canvas.ship.move('left');
  }
};

