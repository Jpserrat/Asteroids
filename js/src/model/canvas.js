function Canvas() {
  this.canvas = document.getElementById('canvas');
  this.height = this.canvas.height;
  this.ctx = this.canvas.getContext('2d');
  this.bg = new Image();
  this.bg.src = 'img/bg.png';
  this.ship = new Ship();
  this.asteroids = [];
  this.minAsteroids = [];
  this.shotSound = new Audio('audio/laser.wav');
  this.start = 0;
  this.score = 0;
  this.maxScore = 0;
}

Canvas.prototype.drawBg = function drawBg() {
  this.ctx.drawImage(this.bg, 0, 0, 800, 900);
};

Canvas.prototype.startBg =  function starBg() {
  this.ctx.font = '40pt Calibri';
  this.ctx.fillText('ASTEROIDS', 270, 450);
  this.ctx.font = '10pt Calibri';
  this.ctx.fillText('PRESS ENTER TO START', 325, 500);
};

Canvas.prototype.gameOverBg =  function gameOverBg() {
  this.ctx.font = '40pt Calibri';
  this.ctx.fillText('ASTEROIDS', 270, 450);
  this.ctx.font = '20pt Calibri';
  this.ctx.fillText('MAX SCORE ' + this.maxScore, 315, 500);
  this.ctx.font = '10pt Calibri';
  this.ctx.fillText('PRESS ENTER TO START', 325, 520);
};

Canvas.prototype.maxScor = function maxScor() {
  if (this.maxScore < this.score) {
    this.maxScore = this.score;
  }
}

Canvas.prototype.draw = function draw() {
  this.ctx.clearRect(0, 0, 800, 900);
  this.drawBg();
  this.ctx.font = '30pt Calibri';
  this.ctx.fillText(this.score, 30, 50);
  this.ship.draw(); 
  for (let i = 0; i < this.asteroids.length; i += 1) {
    if (this.asteroids[i].life === 0 || this.asteroids[i].y > 950) {
      this.minAsteroids.push(new Asteroidmin(this.asteroids[i].x, this.asteroids[i].y, 'left'));
      this.minAsteroids.push(new Asteroidmin(this.asteroids[i].x, this.asteroids[i].y, 'right'));
      this.asteroids.splice(i, 1);
      this.score += 10;
    } else {
      this.asteroids[i].draw();
      this.asteroids[i].move();
    }
  }
  for (let i = 0; i < this.ship.shots.length; i += 1) {
    if (this.ship.shots[i].checkCollision(this.asteroids) || this.ship.shots[i].y < -2 || this.ship.shots[i].checkCollision(this.minAsteroids)) {
      this.ship.shots.splice(i, 1);
    } else {
      this.ship.shots[i].draw();
      this.ship.shots[i].move();
    }
  }
  if (this.minAsteroids.length > 0) {
    for (let i = 0; i < this.minAsteroids.length; i += 1) {
      if (this.minAsteroids[i].life === 0 || this.minAsteroids[i].y > 950) {
        this.minAsteroids.splice(i, 1);
        this.score += 5;
      } else {
        this.minAsteroids[i].draw();
        this.minAsteroids[i].move();
      }
    }
  }
};
