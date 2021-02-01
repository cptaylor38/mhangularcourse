//Benefits of Typescript
// 1. Strong typing.
// 2. Object-oriented features.
// 3. Compile-time errors.
// 4. Tooling - i.e. Intellisense in code editors.

//Types
// let number: number = 1;
// let boolean: boolen = true;
// let string: string = "string";
// let any: any = "any";
// let array: number[] = [1, 2, 3, 4];
// let anyArray: any[] = [1, "a", false];

// enum Color { Red, Green, Blue }
//red = 0, green = 1, blue = 2. Implicitly incremented values.

//Type assertions
// let message;
// message = "abc";
// let endsWithC = (<string>message).endsWith('c');
//Intellisense doesn't register message.endsWith() so we need type assertion.
// let alternativeWay = (message as string).endsWith('c');

//Interfaces
// let drawPoint = (pointObject)=> {
//     //...expecting a point object of x and y coordinates.
// }
// drawPoint({
//     x: 1,
//     y: 1
// })

//Problem -
// drawPoint({
//     otherObject: 'not x and y coordinates'
// })
//Logic inside drawPoint will not compute and there are no compile time checks to ensure
//the correct object is getting passed in.

//2 Solutions for this example:
//let drawpoint = (point: {x: number, y: number}) => {} -- Inline Annotation.

//Interface - better solution.
//Interfaces are purely for decorations and cannot include implementation, i.e. the logic 
//within the drawPoint function.

// interface Point {
//     x: number,
//     y: number
// }

//let drawPoint = (point: Point) => {}
//Naming convention - Paschal - First letter of every word is capitolized and name of the
//interface is capitolized.

//Problem with above solution - missing Cohesion. 
//Example: 
//interface Point { x: number, y: number}
// let drawPoint = (point: Point){
//     //...
// }
// let getDistance = (pointA: Point, pointB: Point){
//     //...
// }
// drawPoint(x: 1, y: 2);

//Highly related concepts should belong to a class.

// interface Point {
//     x: number,
//     y: number,
//     draw: () => void //Just the signature of a function. Telling the compiler that there should be
//     //2 properties, x, and y, and a function called draw.
//     //if x, y, and draw are all part of the same unit, they automatically have access to x and y
//     //properties without passing in point object as argument to draw: (point)=> void
// }

// Instead:
// class Point {
//     x: number; // -> field x.
//     y: number; // -> field y.

// In C# and Java we can have multiple constructors, but not in Typescript.
// If creating an instance of the Point class without initial coordinates ->
//     constructor(x?: number, y?: number){ //optional paramaters
            // this.x = x;
            // this.y = y;
// }

//     constructor(x: number, y: number){
//         this.x = x;
//         this.y = y;
//     }
        
//     draw(){
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     }
// }

// let point: Point; //Point is a custom type and needs memory allocated to it.
// let point = new Point(); //Creating an object. (Instance of class Point).
// point.draw(); //cannot read property draw of undefined.


//Access modifiers:
//public
//private
//protected

//By default they're all public
//Private ex.
// class Point {
//     private x: number;
//     private y: number;
//     constructor(x?: number, y?: number){
//         this.x = x;
//         this.y = y;
//     }
//     draw(){
//         console.log('Coordinates', this.x + ',' this.y);
//     }
// }
// Can apply access modifiers on fields, properties, and methods.

// Access modifiers in Constructor Paramters
// class Point {
//     constructor(private _x?: number, private _y?: number){}
//     draw(){
//         console.log('coordinates');
//     }
//     //Without using a properties:
//     // getX(){
//     //     return this._x;
//     // }
//     // setX(value){
//     //     if(value < 0) throw new Error('value cannot be less than 0');
//     //     this._x = value;
//     // }
//     //With properties:
//     //Use camel notation to name fields.
//     //prefix fields with underline.
//     get x(){
//         return this._x;
//     }
//     set x(){
//         if(value < 0) throw new Error('value cannot be less than 0');
//         this._x = value;
//     }
// }

//Instead of let x = point.getX() --> let x = point.x;
//Property summary - Looks like a field from the outside, but internally is a method.

//Modules in Typescript - 
//Point class is within an external file
//Example of exporting module Point class
// export class Point {
//     constructor(){}
//     draw(){}
// }

// //In main file
// import { Point } from 'relative path to file similar to importing a component'

