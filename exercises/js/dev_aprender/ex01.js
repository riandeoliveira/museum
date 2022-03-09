// Troque o valor de uma variável pelo valor de outra variável.

let a = "Vermelho";
let b = "Azul";
let c = a;

console.log("Antes era:", "\n", `a = ${a}`, "\n", `b = ${b}`, "\n");

a = b;
b = c

console.log("Agora é:", "\n", `a = ${a}`, "\n", `b = ${b}`);