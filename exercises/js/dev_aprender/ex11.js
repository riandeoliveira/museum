// Crie um objeto endereço que possua:

// Bairro
// CEP
// Cidade
// Estado
// Número da casa
// Rua
// País

// E os exiba dentro de uma função, usando o objeto como parâmetro.

let endereco = {
    bairro: "São Vicente",
    cep: 94155170,
    cidade: "Gravataí",
    estado: "RS",
    numCasa: 785,
    rua: "Giovani Salvati",
    pais: "Brasil"
}

function exibeEndereco(endereco) {
    for (chave in endereco)
        console.log(chave, endereco[chave]);
}

exibeEndereco(endereco);