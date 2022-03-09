// Crie um método par ler propriedades de um objeto e exiba somente as propriedades do tipo string que encontram-se nesse objeto.

const movie = {
    releaseYear: 2019,
    name: "Vingadores: Ultimato",
    released: true,
    yearSetIn: 2023,
    director: "Joe Russo e Anthony Russo",
    failed: false
}

showProperties(movie);

function showProperties(object) {
    for (prop in object) {
        if (typeof object[prop] === "string") {
            console.log(prop, object[prop])
        }
    }
}