import Rectangle from './Rectangle.js';

class Square extends Rectangle{
	constructor(ctx, x, y, s, color) {
    super(ctx, x, y, s, s, color);
  }
}

export default Square;