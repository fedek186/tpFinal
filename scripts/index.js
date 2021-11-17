//Validar formulario
let formulario = document.querySelector('form');
let campoBuscar = document.querySelector('[name=busqueda]')
formulario.addEventListener('submit', function(event)
{
  event.preventDefault();
  if(campoBuscar.value.length <= 3)
  {
    campoBuscar.value = "";
    alert('Ingresar mas de 3 caracteres en el buscador');
  }
  else {
    this.submit();
  };
});

//Peliculas Populares
let pelispopulares = document.querySelector("#pelispopulares");
let apiKey = "41bafc5fa52735dc2b13b57aa420f841";
let urlpelispopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

fetch(urlpelispopulares)
    .then(function(response) {
  return response.json()
})
    .then(function(data){
    let info = data.results;
    let datapopulares="";
    for (let i = 0; i < 5; i++) {
    datapopulares+=
    `<article class="articulo">
    <a href="./detail_movie.html?id=${info[i].id}">
        <div class="elemento">
            <img class="Portadapeli" src="https://www.themoviedb.org/t/p/original/${info[i].poster_path}">
            <p class="NombrePeli">${info[i].title}</p>
            <p class="fechapelicula"> ${info[i].release_date}</p>
        </div>
    </a>
</article>`
    }
pelispopulares.innerHTML=datapopulares
    
})
    .catch(function(error) {
    console.log("Error: " + error);
})

//Lo más Valorado
let valoradas= document.querySelector("#valoradas");
let urlvaloradas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

fetch(urlvaloradas)
    .then(function(response) {
  return response.json()
})
    .then(function(data){
    let info = data.results;
    let datavaloradas="";
    for (let i = 0; i < 5; i++) {
    datavaloradas+=
    `<article class="articulo">
    <a href="./detail_movie.html?id=${info[i].id}">
        <div class="elemento">
            <img class="Portadapeli" src="https://www.themoviedb.org/t/p/original/${info[i].poster_path}">
            <p class="NombrePeli">${info[i].title}</p>
            <p class="fechapelicula"> ${info[i].release_date}</p>
        </div>
    </a>
</article>`
    }
valoradas.innerHTML=datavaloradas

})
    .catch(function(error) {
    console.log("Error: " + error);
})

//Series Populares
let seriespopulares= document.querySelector("#seriespopulares");
let urlseriespopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

fetch(urlseriespopulares)
    .then(function(response) {
  return response.json()
})
    .then(function(data){
    let info = data.results;
    let dataseriespopulares="";
    for (let i = 0; i < 5; i++) {
    dataseriespopulares+=
    `<article class="articulo">
    <a href="./detail_movie.html?id=${info[i].id}">
        <div class="elemento">
            <img class="Portadapeli" src="https://www.themoviedb.org/t/p/original/${info[i].poster_path}">
            <p class="NombrePeli">${info[i].name}</p>
            <p class="fechapelicula"> ${info[i].first_air_date}</p>
        </div>
    </a>
</article>`
    }
seriespopulares.innerHTML=dataseriespopulares
console.log(info);

})
    .catch(function(error) {
    console.log("Error: " + error);
})






