const arr1 = ["A", "B", "C", "D"];
arr1.splice(1, 1);
console.log(arr1); 


const arr2 = ["A", "C", "D"];
arr2.splice(1, 0, "X", "Y"); 
console.log(arr2); 

const nums = [10, 20, 30, 40, 50];
const sub = nums.slice(1, 4);
console.log(sub);

const letras = ["a", "b", "c", "d"];
const str = letras.join("-");
console.log(str);

const nums2 = [3, 1, 3, 2, 3];
const lastIndex = nums2.lastIndexOf(3);
console.log(lastIndex); 

const original = [1, 2, 3];
const copia = [...original];

copia.push(4);

console.log("original:", original); 
console.log("copia:", copia);

const matriz = [
  [1, 2],
  [3, 4]
];

console.log("Diagonal:", matriz[0][0], matriz[1][1]);


const arr3 = [1, 2, 3, 4];
arr3.length = 1;
console.log(arr3);


const arr4 = [10, 20, 30, 40];


arr4.splice(2, 1); 
console.log(arr4);


const arr5 = [1, 2, 3];
arr5.reverse();
console.log(arr5);




