var A = 10;
var B = 20;

var temporaria = A;
A = B;
B = temporaria;

console.log("Valor de A: " + A);
console.log("Valor de B: " + B);