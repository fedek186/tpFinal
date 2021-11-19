let apiKey = "4a170f79e9dd1a6c14bc5bf151dc07a3"
let urlSeries= `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`;  

fetch(urlSeries)
.then(function(response) {
    return response.json();
})

.then(function(data) {
    console.log(data)
     //creo una variable para los generos de las series
    let seriesLista = document.querySelector(".series_genres_list")
    let info= data.genres
    
//cargamos los articulos y tenemos ya todos los generos por serie
    for (let i = 0; i < 5; i++) {
      let generoSeries= `<article><a href="detail_genre_series.html?id=${info[i].id}?tipo=series">${info[i].name}</a></article>`
        seriesLista.innerHTML += generoSeries
        
    }

        
})
.catch(function(error){
    console.log("error:" + error);
})


//Peliculas
let urlPeliculas= `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;


fetch(urlPeliculas)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);

  let pelisLista= document.querySelector(".movies_genres_list")
  let info= data.genres

  for (let i = 0; i < 5; i++) {
      let generosPeliculas= `<article><a href="detail_genre_movies.html?id=${info[i].id}?tipo=peliculas">${info[i].name}</a></article>`
      pelisLista.innerHTML += generosPeliculas
      
  }
})
.catch(function(error) {
  console.log("Error: " + error);
})
