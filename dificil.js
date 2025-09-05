const fila = [];

console.log("Entrada: João");
fila.push("João");

console.log("Entrada: Maria");
fila.push("Maria");

console.log("Entrada: Pedro");
fila.push("Pedro");

console.log("Fila atual:", fila);

 
let saiu = fila.shift();
console.log("Saiu da fila:", saiu);
console.log("Fila depois:", fila);

saiu = fila.shift();
console.log("Saiu da fila:", saiu);
console.log("Fila depois:", fila);


const arr = [1, 2, 3, 2, 4, 2];
const valorAlvo = 2;

for (let i = arr.length - 1; i >= 0; i--) { 
    if (arr[i] === valorAlvo) {
        arr.splice(i, 1);
    }
}

console.log(arr); 


const arr1 = [1, 2, 3, 4, 5];
const meio = arr1.splice(0, 2); 
const reorganizado = arr1.concat(meio);
console.log(reorganizado);


let matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];


[matriz[0], matriz[2]] = [matriz[2], matriz[0]];
console.log(matriz);





  const nomes = ["ana","bea","ana","duda"];
for (let i = nomes.length - 1; i >= 0; i--) {
    if (nomes[i] === "ana") {
        nomes.splice(i, 1);
    }
}
console.log(nomes);



const nums = [10, 2, 30, 4];
nums.sort(); 
console.log(nums); 

const historico = [];
historico.push("abrir arquivo");
historico.push("editar texto");
historico.push("salvar");

console.log("Histórico:", historico);


let desfazer = historico.pop();
console.log("Desfazer:", desfazer);
console.log("Histórico agora:", historico);


const letras = ["a","b","c","d"];
letras.splice(0, 1); 
letras.splice(2, 1); 
console.log(letras); 

const original = [[1,2], [3,4]];
const copia = original.slice(); 
copia[0].push(99);

console.log("copia:", copia);      
console.log("original:", original);


const tabela = [
  ["Nome","Idade","Cidade"],
  ["Ana",25,"SP"],
  ["Bia",30,"RJ"]
];

const csv = tabela.map(linha => linha.join(",")).join("\n");
console.log(csv);

