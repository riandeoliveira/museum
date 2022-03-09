// Faça um objeto de postagem de blog, contendo as seguintes propriedades:

// Autor
// Comentários
//  (autor, data, mensagem)
// Data
// Está ao vivo?
// Mensagem
// Subtítulo
// Título
// Visualizações

// Experimente usar declarações de nomes em inglês.

let blogPost = {
    author: "Rian Oliveira",
    comments: [
        { author: "Giullianno Drago" },
        { date: new Date(2027, 11, 07).toDateString() },
        { message: "Meu garoto, que orgulho!" }
    ],
    date: new Date(2027, 11, 08).toDateString(),
    live: true,
    message: "Vem construir seu futuro com a gente!",
    subtitle: "A Magia do Mundo Real",
    title: "Programação",
    views: 928384,
}

console.log(blogPost);