function Asteroidmin(x, y, direction) {
  this.x = Math.floor(x);
  this.y = Math.floor(y);
  this.direction = direction;
  this.img = new Image();
  this.img.src = 'img/Asteroid.png';
  this.width = 50;
  this.height = 50;
  this.life = 1;
}
Asteroidmin.prototype.draw = function draw() {
  canvas.ctx.drawImage(this.img, this.x, this.y, this.width, this.height );
}

Asteroidmin.prototype.move = function move() {
  this.y += 0.5;
  if (this.y > 900) {
    gameOver();
  }
  if (this.direction === 'left') {
    if (this.x < -10) {
      this.x = 800;
    }
    this.x -= 0.5;
  } else if (this.direction === 'right') {
    if (this.x > 900) {
      this.x = -10;
    }
    this.x += 0.5;
  }
}