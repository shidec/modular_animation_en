class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
	this.stepX = 4 - Math.random() * 8;
	this.stepY = 4 - Math.random() * 8;
  }
  
  move(){
	this.x += this.stepX;
	this.y += this.stepY;
	
  }
}

export default Shape;