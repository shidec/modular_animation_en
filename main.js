import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
import Square from './Square.js';
import Controller from './Controller.js';

'use strict';

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

const circle1 = new Circle(ctx, 200, 200, 40, '#990000');
const rectangle1 = new Rectangle(ctx, 100, 240, 120, 80, '#009900');
const square1 = new Square(ctx, 400, 400, 100, '#000099');
const controller = new Controller(ctx);

controller.addObject(circle1);
controller.addObject(rectangle1);
controller.addObject(square1);

setInterval(function(){
		controller.run();
	}, 30);