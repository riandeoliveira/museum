// Faça um Fizz Buzz. Um algoritmo que testa as habilidades de codificação de um programador.

// Regras:
// O programa deve receber um número.
// Se ele for divisível por 3 retorne Fizz.
// Se for divisível por 5 retorne Buzz.
// Se for divisível por ambos retorne FizzBuzz.
// Se não for divisível por nenhum dos dois retorne o próprio número.
// Se ele não for um número retorne que não é um número.

function fizzBuzz(number) {
    if (typeof number !== "number")
        return "Não é um número";
    if (number % 3 === 0 && number % 5 === 0)
        return "FizzBuzz";
    if (number % 3 === 0)
        return "Fizz";
    if (number % 5 === 0)
        return "Buzz";
    return number;
}

console.log(fizzBuzz(15));