//Validar formulario
let formulario = document.querySelector("form");
let campoBuscar = document.querySelector("[name=busqueda]");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  if (campoBuscar.value.length <= 3) {
    campoBuscar.value = "";
    alert("Ingresar mas de 3 caracteres en el buscador");
  } else {
    this.submit();
  }
});

let queryString = location.search; 
console.log(queryString);
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");

let api_key = "02b80f17e9b209f482a1320b2a6e13a4";

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let h1 = document.querySelector(".tituloPelicula");
    h1.innerText = data.original_title;
    let h2 = document.querySelector(".descripcionPelicula");
    h2.innerText = data.overview;
    let p = document.querySelector(".fecha");
    p.innerText = `${data.release_date} / ${data.runtime} min / Rating: ${data.vote_average}`;
    let img = document.querySelector(".articlePoster");
    img.innerHTML = `<img class="poster" src="https://www.themoviedb.org/t/p/original/${data.poster_path}">`;

    //empezando lista generos

    let div = document.querySelector(".divBoton");
    for (let i = 0; i < data.genres.length; i++) {
      let genero = `<div class="boton"><a href="detail_genre_movies.html?id=${data.genres[i].id}&tipo=peliculas&nombre=${data.genres[i].name}">${data.genres[i].name}</a></div>`;
      div.innerHTML += genero;
    }

    //FAVORITOS
    let corazon = document.querySelector(".iconCorazon"); //Capturamos el elemento

    if (localStorage.getItem("idPelis") == null) { //Existe algo guardado en el local? No
      let arrayIdPeliculas = []; //Creamos array Id
      localStorage.setItem("idPelis", JSON.stringify(arrayIdPeliculas)); //Guardamos el array en el local
    } else { //Existe algo guardado en el local? Si
      let array = JSON.parse(localStorage.getItem("idPelis")); //Traemos el array
      if (array.indexOf(id) != -1) { //Esta en el array? Si 
        corazon.style.filter = "invert(39%) sepia(92%) saturate(5128%) hue-rotate(204deg) brightness(99%) contrast(85%)"; //Se pinta de azul
      }
    }

    ///
    corazon.addEventListener('click', function() {
      let array = JSON.parse(localStorage.getItem("idPelis")); //Traemos el array
      if (array.indexOf(id) != -1) { //Esta en el array? SI
        corazon.style.filter = "invert(68%) sepia(0%) saturate(0%) hue-rotate(162deg) brightness(92%) contrast(87%)"; //Pasa a Gris
        let posicion = array.indexOf(id); //Buscamos la posicion en la que estaba
        array.splice(posicion, 1); //Lo borramos
        localStorage.setItem("idPelis", JSON.stringify(array)); //Guardamos el array sin el
      } else { //Esta en el array? NO
        corazon.style.filter = "invert(39%) sepia(92%) saturate(5128%) hue-rotate(204deg) brightness(99%) contrast(85%)"; //Lo ponemos azul
        array.push(id); //Lo agregamos al array
        localStorage.setItem("idPelis", JSON.stringify(array)); //Lo guardamos
      }
    });
  })
  .catch(function (error) {
    console.log(error);
  });
