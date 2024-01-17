//complete this code
class Rectangle {
	constructor(width , height){
		this.width2 = width ;
		this.height2 = height;
		
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
	getArea(){
		  return (this.width2 * this.height2);
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return (4 * this.side);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
