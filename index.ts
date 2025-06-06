//Typescript es un superconjunto de JavaScript que añade tipado estático y otras características.
//Para compilar el código TypeScript a JavaScript, se utiliza el comando `tsc` en la terminal.
//Para ejecutar el código JavaScript generado, se utiliza el comando `node` en la terminal.
//Para instalar TypeScript globalmente, se utiliza el comando `npm install -g typescript` en la terminal.
//Para instalar TypeScript localmente en un proyecto, se utiliza el comando `npm install typescript` en la terminal.
//Para compilar un archivo TypeScript específico, se utiliza el comando `tsc nombreArchivo.ts` en la terminal.
//Para compilar todos los archivos TypeScript en un proyecto, se utiliza el comando `tsc` en la terminal.

//console.log("Hola, mundo!");


//Explicit
let myVariable: string = 'Pepita';
//console.log(myVariable);

//Primitivos

let myVariable1: string;
myVariable1 = 'Hello';
//console.log(myVariable1);

//Error 
let myNumber: 1;
myNumber = 1;
//console.log(myNumber);

/*Special types*/

let myAny: any; // elimina la detección de errores
myAny = 'Hello';
//console.log(myAny);


let myUnknown: unknown; //elimina la detección de errores
myUnknown = 'Hello';
//console.log(myUnknown);



/*Arrays*/

const arrStrings: string[] = [];
arrStrings.push('Hello'); //Metodo para añadir elementos al array
//console.log(arrStrings);

const arr: readonly string[] = ['abc']; //readonly espera que el array no se modifique
//console.log(arr);

// Inference


const arrInference = [1, 2, 3]; // TypeScript infiere el tipo de los elementos del array
//arrInference.push("abc"); // Esto generará un error porque el tipo de los elementos es number
arrInference.push(4); // Esto es correcto porque 4 es un número
//console.log(arrInference);

// Tuplas - Tipo de arreglo predefinido para cada uno de los indices

const myTuple: [string, number] = ['Hello', 42]; // Tupla con un string y un número
//console.log(myTuple);

/*Functions*/

function myFunction(param: string): string {
    return `Hello, ${param}`;
}

myFunction('Jhon');
console.log(myFunction('Jhon'));

//myFunction('Jhon');

//? en funcion lo hace opcional


//function myFunction2(param1:number, param2: number):number {
//return  param1 + param2    
//}
//si no retorna void
