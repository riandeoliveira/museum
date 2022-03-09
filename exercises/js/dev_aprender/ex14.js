// Crie um objeto de postagem semelhante ao do exercício anterior, mas usando uma constructor function.

function BlogPost(author, comments, date, live, message, subtitle, title, views) {
    this.author = author,
        this.comments = comments,
        this.date = date,
        this.live = live,
        this.message = message,
        this.subtitle = subtitle,
        this.title = title,
        this.views = views
}

const blogPost = new BlogPost("Rian Oliveira", [
    { author: "Giullianno Drago" },
    { date: new Date(2027, 11, 08).toDateString() },
    { message: "Meu garoto, que orgulho!" }
], new Date(2027, 11, 08).toDateString(), true, "Vem construir seu futuro com a gente!", "A Magia do Mundo Real", "Programação", 928384);
console.log(blogPost);
