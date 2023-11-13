import peliculas from './peliculas.js'


// Secciones

const divAccion = document.getElementById('genero-28');
const divThriller = document.getElementById('genero-53');
const divAventura = document.getElementById('genero-12');


// Orden alfabético + clasificación

peliculas.sort((a, b) => {
    if (a.title == b.title) {
        return 0;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 1;
})

peliculas.filter((element) => element.genre_ids.find((genre) => {
    let titulo = document.createElement('p');
    titulo.textContent = element.title;

    let poster = document.createElement('img');
    poster.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
    poster.alt = `Poster de la película ${element.title}`

    let divPeli = document.createElement('div');
    divPeli.appendChild(titulo);
    titulo.insertAdjacentElement('beforebegin', poster);

    if (genre === 28) {
        divAccion.appendChild(divPeli);
    } else if (genre === 53) {
        divThriller.appendChild(divPeli);
    } else if (genre === 12) {
        divAventura.appendChild(divPeli);
    }

}))



/* Filtros

const filtroAccion = peliculas.filter((elemento) => elemento.genre_ids.find((genero) => genero === 28));
console.log(filtroAccion)

const filtroThriller = peliculas.filter((elemento) => elemento.genre_ids.find((genero) => genero === 53));
console.log(filtroThriller)

const filtroAventura = peliculas.filter((elemento) => elemento.genre_ids.find((genero) => genero === 12));
console.log(filtroAventura)*/


