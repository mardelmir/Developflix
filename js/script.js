import peliculas from './peliculas.js'


const divAccion = document.getElementById('genero-28');
const divThriller = document.getElementById('genero-53');
const divAventura = document.getElementById('genero-12');


peliculas.sort((a, b) => a.title > b.title ? 1 : -1)

peliculas.filter((element) => element.genre_ids.find((genre) => {
    let titulo = document.createElement('p');
    titulo.textContent = element.title;

    let poster = document.createElement('img');
    poster.src = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
    poster.alt = `Poster de la película ${element.title}`;

    let extra = document.createElement('p');
    extra.innerHTML = `Estreno: ${element.release_date} <br /> Valoración: <strong>${element.vote_average}</strong>`;
    extra.classList.add('oculto');

    let divPeli = document.createElement('div');
    divPeli.appendChild(titulo);
    titulo.insertAdjacentElement('beforebegin', poster);
    titulo.insertAdjacentElement('afterend', extra);
    divPeli.classList.add('cartel');


    if (genre === 28) {
        divAccion.appendChild(divPeli);
    } else if (genre === 53) {
        divThriller.appendChild(divPeli);
    } else if (genre === 12) {
        divAventura.appendChild(divPeli);
    }
}))