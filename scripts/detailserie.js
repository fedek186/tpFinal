

let queryString = location.search;
console.log(queryString)
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id'); 

let api_key='02b80f17e9b209f482a1320b2a6e13a4'

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`
//`https://api.themoviedb.org/3/search/tv/${id}?api_key=${api_key}&language=en-US&page=1&include_adult=false`




fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let h1 = document.querySelector(".tituloPelicula");
        h1.innerText = data.name;
        let h2 = document.querySelector(".descripcionPelicula");
        h2.innerText = data.overview;
        let p = document.querySelector(".fecha");
        p.innerText = `${data.first_air_date} / ${data.number_of_seasons} seasons`;
        let img = document.querySelector(".articlePoster");
        img.innerHTML = `<img class="poster" src="https://www.themoviedb.org/t/p/original/${data.poster_path}">`

        let div = document.querySelector(".divBoton");
        console.log(div);
        console.log(data.genres.length)
        for (let i=0; i < data.genres.length; i++){
            console.log('' +i);
            let genero = `<div class="boton"><a>${data.genres[i].name}</a></div>`;
            div.innerHTML = genero;
        }
       
    })
    .catch(function(error){
        console.log(error);
   })





