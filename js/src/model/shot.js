function Shot() {
  this.y = 850;
  this.x = canvas.ship.x;
}

Shot.prototype.draw = function draw() {
  canvas.ctx.fillRect(this.x + 15, this.y, 2, 10);
};

Shot.prototype.move = function move() {
  this.y -= 2;
};

Shot.prototype.checkCollision = function checkCollision(asteroid) {
  for (let i = 0; i < asteroid.length; i += 1) {
    if (this.x > asteroid[i].x -15 && this.x < asteroid[i].x + asteroid[i].width && this.y > asteroid[i].y && this.y < asteroid[i].y + asteroid[i].height) {
      asteroid[i].life -= 1;
      return true;
    } 
  }
};
