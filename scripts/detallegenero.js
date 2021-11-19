let queryString = location.search;
console.log(queryString)
let queryStringObject = new URLSearchParams(queryString);
console.log(queryStringObject)

let variableId = queryStringObject.get("id");
console.log(variableId)

let variableTipo = queryStringObject.get("tipo")
console.log(variableTipo)

let variableGenero = queryStringObject.get("nombre")
console.log(variableGenero)

let apiKey = "4a170f79e9dd1a6c14bc5bf151dc07a3"
let url = ""
let titulo = document.querySelector(".titulo")

let section = document.querySelector(".formatoSection")



if (variableTipo == "peliculas") {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=4a170f79e9dd1a6c14bc5bf151dc07a3&with_genres=${variableId}`
    titulo.innerText = `${variableGenero}:Peliculas`
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            let info= data.results;
            let peliculaFav = "";
            for (let i = 0; i < info.length; i++) {
                console.log(info[i].title)
                peliculaFav = ` 
                <article class="articulo">
                    <a href="./detail_movie.html?id=${info[i].id}">
                        <div class="elemento">
                            <img class="Portadapeli" src="https://www.themoviedb.org/t/p/original/${info[i].poster_path}">
                            <p class="NombrePeli">${info[i].title}</p>
                            <p class="fechapelicula"> ${info[i].release_date}</p>
                        </div>
                    </a>
                </article>`;
                section.innerHTML += peliculaFav
            }
        })
        .catch(function (error) {
            console.log("Error: " + error);
        })
}
else {
    url = `https://api.themoviedb.org/3/discover/tv?api_key=4a170f79e9dd1a6c14bc5bf151dc07a3&with_genres=${variableId}`
    titulo.innerText = `${variableGenero}:Series`
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            let info= data.results;
            let serieFav = "";
            for (let i = 0; i < info.length; i++) {
                console.log(info[i].title)
                serieFav =  
                `<article class="articulo">
        <a href="./source/detail_movie.html?id=${info[i].id}">
            <div class="elemento">
                <img class="Portadapeli" src="https://www.themoviedb.org/t/p/original/${info[i].poster_path}">
                <p class="NombrePeli">${info[i].name}</p>
                <p class="fechapelicula"> ${info[i].first_air_date}</p>
            </div>
        </a>
    </article>`;
                section.innerHTML += serieFav
            }
        })
        .catch(function (error) {
            console.log("Error: " + error);
        })
}
