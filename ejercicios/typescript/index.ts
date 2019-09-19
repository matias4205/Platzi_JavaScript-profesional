/* --------- INTRO --------- */

// console.log('Hello typescript');

// function add(a: number, b: number){
//     return a + b;
// }

// const sum = add(2, 3);


/* --------- TYPES --------- */

//Boolean
// let muted: boolean = true;
// muted = false;

// //Number
// let age = 6
// let numerador: number = 42;
// let denominador: number = age;
// let resultado = numerador / denominador;

// //String
// let nombre: string = 'Richard';
// let saludo = `Hola! Soy ${nombre}`

// //Arreglos
// let people: string[] = []; //On thisone I can only push Strings
// people = ["Isabel", "Nicole", "Raul"];
// people.push('Ricardo');

// let peopleAndNumbers: Array<string | number> = []; //But in thisone I specified two types of possibilities
// peopleAndNumbers.push("Ricardo");
// peopleAndNumbers.push(2);

// //Enum
// enum Color{
//     Rojo = "Rojo",
//     Verde = "Verde",
//     Azul = "Azul"
// }

// let colorFavorito: Color = Color.Rojo;
// console.log(`My favourite color is ${colorFavorito}`);

// //Any
// let comodin: any = "Joker"; //Does not specify a certain type of variable and anyone is valid
// comodin = { type: "Wildcard" };

// //Object
// let comodinObj: object = { type: "Wildcard" };


/* --------- FUNCTIONS --------- */
// function add(a: number, b: number): number {
//     return a + b;
// }

// const sum = add(4, 6);

// function createAdder(a: number): (number) => number{
//     return function(b: number){
//         return b + a;
//     }
// }

// const addFour = createAdder(4);
// const fourPlus6 = addFour(6);

// function fullName(firstName: string, lastname: string = 'Perez'): string{
//     return `${firstName} ${lastname}`;
// }

// const matias = fullName('Matias');


/* --------- INTERFACES --------- */
// enum Color{
//    Red = 'red',
//    Green = 'green',
//    Blue = 'blue' 
// }

// interface Rectangulo{
//     ancho: number
//     alto: number,
//     color?: Color
// }

// let rect: Rectangulo = {
//     ancho: 4,
//     alto: 8,
//     color: Color.Green
// }

// function area(r: Rectangulo){
//     return r.alto * r.ancho;
// }

// const areaRect = area(rect)
// console.log(areaRect);

// rect.toString = function(){
//     return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
// }

// console.log(rect.toString());


/* --------- INTERFACES --------- */
