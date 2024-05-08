// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

let peliculaPeque = []
let peliculaMedia = []
let peliculaGrande = []

for (let i = 0; i < movies.length; i++) {
  let peli = movies[i]
  if (peli.durationInMinutes < 100) {
    peliculaPeque.push(peli)
  } else if (peli.durationInMinutes > 100 && peli.durationInMinutes < 200) {
    peliculaMedia.push(peli)
  } else if (peli.durationInMinutes > 200) {
    peliculaGrande.push(peli)
  } 
}

console.log('Listado de peliculas pequeñas: ')
console.log(peliculaPeque)
console.log('Listado de peliculas medianas: ')
console.log(peliculaMedia)
console.log('Listado de peliculas grandes: ')
console.log(peliculaGrande)
