import Shape from './Shape.js';

class Circle extends Shape{
	constructor(ctx, x, y, r, color = '#000000') {
    super(x, y);
	this.ctx = ctx;
    this.r = r;
	this.color = color;
  }
  
  draw(){
	this.ctx.strokeStyle = this.color;
	this.ctx.lineWidth = 4;
	this.ctx.beginPath();
	this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
	this.ctx.stroke();
  }
  
  move(){
	super.move();
	
	if(this.x >= (800 - this.r) || this.x <= this.r) this.stepX = -this.stepX;
	if(this.y >= (600 - this.r) || this.y <= this.r) this.stepY = -this.stepY;
	
  }
}

export default Circle;