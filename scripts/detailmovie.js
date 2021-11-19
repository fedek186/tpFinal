let queryString = location.search;
console.log(queryString)
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id'); 

let api_key='02b80f17e9b209f482a1320b2a6e13a4'

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let h1 = document.querySelector(".tituloPelicula");
        h1.innerText = data.original_title;
        let h2 = document.querySelector(".descripcionPelicula");
        h2.innerText = data.overview;
        let p = document.querySelector(".fecha");
        p.innerText = `${data.release_date} / ${data.runtime} min`;
        let img = document.querySelector(".articlePoster");
        img.innerHTML = `<img class="poster" src="https://www.themoviedb.org/t/p/original/${data.poster_path}">`

        //empezando lista generos  

        let div = document.querySelector(".divBoton");
        console.log(div);
        console.log(data.genres.length)
        for (let i=0; i < data.genres.length; i++){
            console.log('sjsi' +i);
            let genero = `<div class="boton"><a>${data.genres[i].name}</a></div>`;
            div.innerHTML += genero;
        }
       

    })
    .catch(function(error){
        console.log(error);
    })
