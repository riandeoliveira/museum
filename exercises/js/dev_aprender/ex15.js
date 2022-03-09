// Crie um programa que exiba uma faixa de preço semelhante aos que são usados em lojas online.

// Exemplos:
// Até R$700
// de R$700 a R$1000
// R$1000 ou mais

// Faça o mesmo exercício três vezes, utilizando formas diferentes: primeiro com array, depois com factory function e por último com constructor function.

// Array.
let priceRangeArray = [
    { tooltip: "até R$700", minimum: 0, maximum: 700 },
    { tooltip: "de R$700 a R$1000", minimum: 700, maximum: 1000 },
    { tooltip: "R$1000 ou mais", minimum: 1000, maximum: 999999 }
];

console.log(priceRangeArray);

// Factory function.
function priceRangeFact(tooltip, minimum, maximum) {
    return {
        tooltip,
        minimum,
        maximum
    }
}

let priceRangeCreated = [
    priceRangeFact("até R$700", 0, 700),
    priceRangeFact("de R$700 a R$1000", 700, 1000),
    priceRangeFact("R$1000 ou mais", 1000, 999999)
];

console.log(priceRangeCreated);

// Constructor function.
function PriceRangeConstr(tooltip, minimum, maximum) {
    this.tooltip = tooltip,
    this.minimum = minimum,
    this.maximum = maximum
}

let priceRangeConstr = [
    new PriceRangeConstr("até R$700", 0, 700),
    new PriceRangeConstr("de R$700 a R$1000", 700, 1000),
    new PriceRangeConstr("R$1000 ou mais", 1000, 999999)
];

console.log(priceRangeConstr);