function Ship() {
  this.x = 400;
  this.y = 850;
  this.shots = [];
  this.width = 30;
  this.height = 40;
  this.vx = 1;
  this.img = new Image();
  this.img.src = 'http://3.bp.blogspot.com/-3BlabIgekB8/VlpALAiTvKI/AAAAAAAACII/_G7HQoW_WTU/s1600/shship.png';
}

Ship.prototype.draw = function draw() {
  // canvas.ctx.fillRect(this.x, this.y, 30, 40);
  canvas.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Ship.prototype.moveLeft = function moveLeft() {
  if (this.x < 0) { 
    this.x = 800;
  } 
  this.x -= 30;
};

Ship.prototype.moveRight = function moveRight() {
  if (this.x > 780) { 
    this.x = -20;
  }
  this.x += 30;
};

Ship.prototype.shoot = function shoot() {
  this.shoot.draw();
};

Ship.prototype.move = function move(direction) {
  switch (direction) {
    case 'left':
      this.moveLeft();
      break;
    case 'right':
      this.moveRight();
      break;
    default:
      break;
  }
};