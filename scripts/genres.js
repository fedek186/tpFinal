let apiKey = "4a170f79e9dd1a6c14bc5bf151dc07a3"
let urlSeries= `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`;  

fetch(urlSeries)
.then(function(response) {
    return response.json();
})

.then(function(data) {
    console.log(data)
    let generoContenedor= document.querySelector(".series_genres_list");
    let info= data.results;

    //crear variable para lista de generos
    let elementosLista= document.querySelector(container_lists);
    console.log(elementosLista)

    for(let i=0 ;i< info.lenght; i++){}
