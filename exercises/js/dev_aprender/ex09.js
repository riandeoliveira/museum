// Faça um programa que receba um número e exibe a quantidade de asteriscos correspondente a ele.

// Exemplo com o número 5:
// *
// **
// ***
// ****
// *****

showAsterisks(10);

function showAsterisks(lines) {
    for (let line = 1; line <= lines; line++) {
        let asterisks = "";
        for (let i = 0; i < line; i++) {
            asterisks += "*";
        }
        console.log(asterisks);
    }
}