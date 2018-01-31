var rectangle = document.getElementById("rectangleShape");
var square = document.getElementById("squareShape");
var circle = document.getElementById("circleShape");
var triangle = document.getElementById("triangleShape");
var shapeContainer = document.getElementById("shapeBox");
var rectangleStats = document.getElementById("rectangle-stats");
var squareStats = document.getElementById("square-stats");
var circleStats = document.getElementById("circle-stats");
var triangleStats = document.getElementById("triangle-stats");
var shapeBox = document.getElementById("shapeBox");
var shapePanel = document.getElementById("panel");
var rectangleButton = document.getElementById("rectangleButton");
var squareButton = document.getElementById("squareButton");
var circleButton = document.getElementById("circleButton");
var triangleButton = document.getElementById("triangleButton");


var nameShape = document.getElementById("shapeName");
var widthShape = document.getElementById("shapeWidth");
var heightShape = document.getElementById("shapeHeight");
var radiusShape = document.getElementById("shapeRadius");
var areaShape = document.getElementById("shapeArea");
var perimeterShape = document.getElementById("shapePerimeter");

let targetName;
let targetWidth;
let targetHeight;
let targetRadius;
let targetArea;
let targetPerimeter;


document.addEventListener('DOMContentLoaded', ()=> {
     console.log("DOM Content loaded");
    })


class Shape {
    constructor(shape, width, height, radius, area, perimeter) {
        this.shape = shape;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.area = area;
        this.perimeter = perimeter;
        //this.describe = describe();
    }
    //Puts description of shape stats in shape panel
    decribe() {
       return .innerText = `Shape Name: ${targetName}`;
              shapePanel.innerText = `Width: ${targetWidth}`;
              shapePanel.innerText = `Height: ${targetHeight}`;
              shapePanel.innerText = `Radius: ${targetRadius}`;
              shapePanel.innerText = `Area: ${targetRadius}`;
              shapePanel.innerText = `Perimeter: ${targetPerimeter}`;
              shapePanel.style.color = "black";
              shapePanel.innerText.style.visibility = "visible";
    }

}
class Rectangle extends Shape {
    constructor() {
        super("Rectangle");
        this.render();
            
    }  
    //Makes Rectangle Object
    render() {
        return rectangle.style.backgroundColor = "green";
               rectangle.style.width = "200px";
               rectangle.style.height = "100px";
               shapeBox.appendChild("rectangle");
               rectangle.appendChild(rectangleButton);
               rectangleButton.addEventListener('click', () => {
                this.createNewShape();
                this.describe();
               })
        rectangleButton.addEventListener('dblclick', () => {
            rectangleButton.remove();
        })
              
    } getRectangleStats() {
        targetName = this.name;
        targetWidth = this.height;
        targetHeight = this.length;
        targetArea = this.length * this.width;
        targetPerimeter = (2 * this.height) + (2 * this.width);
      
}
const makeSquare = function() {
    new Square(squareInput.value);

class Square extends Shape {
    constructor() {
        super("Square");
        this.render();

    }  
    //Makes Square Object
  render() {
        return square.style.width = "100px";
               square.style.height = "100px";
               square.style.backgroundColor = "red";
               shapeBox.appendChild("square");
               square.appendChild(squareButton);
               squareButton.addEventListener('click', () => {
                this.createNewShape();
                this.describe();
               })
            squareButton.addEventListener('dblclick', () => {
                squareButton.remove();
            })
               
    } getSquareStats() {
        targetName = this.name;
        targetWidth = this.height;
        targetHeight = this.width;
        targetArea = this.width * 4;
        targetPerimeter = this.width * 4;
    }  
}
const makeSquare = function() {
    new Square(squareInput.value);
}
class Circle extends Shape {
    constructor() {
        super("Circle");
        this.radius = radius;
        this.render();
    }
    //Makes Circle Object
    render() {
        return circle.style.width = "100px";
               circle.style.height = "100px";
               circle.style.borderRadius = "50%";
               shapeBox.appendChild("circle");
               circle.appendChild(circleButton);
               circleButton.addEventListener('click', () => {
                this.createNewShape();
                this.describe();
               })
               circleButton.addEventListener('dblclick', () => {
                circleButton.remove();
            })
    } getCircleStats() {
        targetName = this.name;
        targetWidth = this.radius * 2;
        targetHeight = this.radius * 2;
        targetArea = 3.14 * (this.radius **2);
        targetPerimeter = 2 * 3.14 * this.radius;
        targetRadius = this.radius/2;
    }  
}
const makeSquare = function() {
    new Circle(circleInput.value);

class Triangle extends Shape {
    constructor() {
        super("Triangle");
        this.render();

    } 
    //Makes Triangle Object
    render() {
               let printTriangle = document.createElement("div");
               shapeBox.appendChild(printTriangle);
               triangle.style.width = "0";
               triangle.style.height = "0";
               triangle.style.borderBottom = "100px solid yellow";
               triangle.style.borderRight = "100px solid transparent";
               triangle.appendChild(triangleButton);
               triangleButton.addEventListener('click', () => {
                this.createNewShape();
                this.describe();
               })
               triangleButton.addEventListener('dblclick', () => {
                triangleButton.remove();
            })
    } getTriangleStats() {
        targetName = this.name;
        targetWidth = this.width;
        targetHeight = this.height;
        targetArea = 0.5 * this.height * this.height;
        targetPerimeter = 2 * this.height * Math.sqrt((2)) * (this.height **2);
    }  
        
}
const makeTriangle = function() {
    new Triangle(triangleInput.value);

const rectangle = new rectangle("Rectangle", "200px", "100px", null, null, "600px");
const square = new square("Square", "100px", "100px", null, null, "400px");
const circle = new circle("Circle", "100px", "100px", "50%", null);
const triangle = new triangle("Triangle", "0", "0", null, null);

const makeRectangle = () => {


}

const makeSquare = () => {

}

const makeCircle = () => {

}

const makeTriangle = () => {

}

const cloneShape = () => {
    render.this

}



//function myFunction() {
  //  if (document.getElementById("rectangleShape").style.visibility = "hidden"



