function Asteroid() {
  this.x = Math.floor(Math.random() * canvas.canvas.width);
  this.y = -15;
  this.life = 2;
  this.width = 100;
  this.height = 100;
  this.img = new Image();
  this.img.src = 'img/Asteroid.png';
}

Asteroid.prototype.draw = function draw() {
  canvas.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
}

Asteroid.prototype.move = function move() {
  if (this.x < -15) {
    this.x = 800;
  } 
  if (this.x > 810) {
    this.x = -15;
  }
  if (this.y > 900) {
    gameOver();
  }

  this.x += 0.3;
  this.y += 0.4;
}
