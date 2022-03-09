// Crie um programa que recebe um número e o utiliza como limite para o cálculo dos múltiplos de 3 e de 5. Calcule todos os múltiplos até o número limite, some-os e exiba eles no console.

checkMultiples(10);

function checkMultiples(limit) {
    let multiples3 = 0;
    let multiples5 = 0;
    if (typeof limit !== "number" || limit < 0) {
        console.log("Insira um número válido acima de zero.");
    } else {
        for (let i = 0; i <= limit; i++) {
            if (i % 3 === 0)
                multiples3 += i;
            if (i % 5 === 0)
                multiples5 += i;
        }
        console.log(multiples3 + multiples5);
    }
}