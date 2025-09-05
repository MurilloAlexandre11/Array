const meses = ["jan", "fev", "mar"];
console.log(meses[0], meses[2]);

const pontos = [];
pontos[0] = 5;
pontos[2] = 15;

console.log(pontos);
console.log(pontos.length); 


const fila = [];
fila.push("A");
fila.push("B");
fila.push("C");

console.log(fila); 

const numeros = [1, 2, 3];
const saiu = numeros.pop();

console.log("Saiu:", saiu); 
console.log("Array agora:", numeros); 

const logins = ["ana"];
logins.unshift("joao");

console.log(logins); 

const pares = [2, 4, 6];
pares[1] = 8;

console.log(pares); 

const original = ["x", "y"];
const copia = original.slice();

console.log("original:", original); 
console.log("copia:", copia);      

const array1 = [1];
const array2 = [2, 3];
const unido = array1.concat(array2);

console.log(unido); 

const letras = ["a", "b", "c"];
console.log(letras.includes("b")); 

const temperaturas = ["frio", "morno", "quente"];
temperaturas.reverse();

console.log(temperaturas); 
