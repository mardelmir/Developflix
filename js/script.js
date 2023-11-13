import peliculas from './peliculas.js'


// Filtros
const filtroAccion = peliculas.filter((elemento) => elemento.genre_ids.find((genero) => genero === 28));
console.log(filtroAccion)

const filtroThriller = peliculas.filter((elemento) => elemento.genre_ids.find((genero) => genero === 53));
console.log(filtroThriller)

const filtroAventura = peliculas.filter((elemento) => elemento.genre_ids.find((genero) => genero === 12))
console.log(filtroAventura)


// Asignación a la sección correcta
const divAccion = document.getElementById('genero-28');
const divThriller = document.getElementById('genero-53');
const divAventura = document.getElementById('genero-12');



for (let i=0; i<filtroAccion.length; i++) {
    let titulosAccion = document.createElement('p');
    titulosAccion.textContent = filtroAccion[i].title;
    let posterAcc = document.createElement('img');
    posterAcc.src= `https://image.tmdb.org/t/p/w200${filtroAccion[i].poster_path}`;

    let divPeli= document.createElement('div')
    divPeli.appendChild(titulosAccion);
    titulosAccion.insertAdjacentElement('beforebegin', posterAcc)
    divAccion.appendChild(divPeli)
}
