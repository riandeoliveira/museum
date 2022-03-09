// Crie um programa que receba um número e exiba todos os números primos anteriores ou iguais a ele.

// Números primos são todos aqueles que:
// Sejam números naturais (maiores que zero).
// São apenas divisíveis por 1 e por eles mesmos.
// Não sejam 0 e nem 1.

checkPrimeNumber(15);

function checkPrimeNumber(limit) {
    for (let number = 2; number <= limit; number++) {
        if (primeNumber(number)) console.log(number);
    }
}

function primeNumber(number) {
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            return false
        }
    }
    return true;
}



