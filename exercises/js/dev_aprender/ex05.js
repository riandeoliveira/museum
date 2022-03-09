// Escreva um programa que receba um número e exiba todos os números até este, e diga quais deles são pares e quais são ímpares.

function showEvenOdd(maxNumber) {
    if (typeof maxNumber !== "number" || maxNumber < 0) {
        console.log("Por favor, insira um número válido maior ou igual a 0!");
    } else {
        for (let i = 0; i <= maxNumber; i++) {
            if (i % 2 === 0)
                console.log(`${i}: PAR`);
            else
                console.log(`${i}: ÍMPAR`);
        }
    }
}

showEvenOdd(50);