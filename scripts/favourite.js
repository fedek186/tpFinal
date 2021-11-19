/*
//Creamos array y lo cargamos en local Storage
let arrayId = [];
localStorage.setItem('id',JSON.stringify(arrayId));
//Traemos el array del local storage y le pusheamos un ID
let array = JSON.parse(localStorage.getItem('id'));
array.push("559969");
localStorage.setItem('id',JSON.stringify(array));
*/

//Me fijo si hay algo en el localstorage y si lo hay laburo
if (localStorage.getItem("id") != null) {
  console.log(localStorage.getItem("id"));
  let arrayFavoritos = JSON.parse(localStorage.getItem("id"));
  let apiKey = "41bafc5fa52735dc2b13b57aa420f841";
  let section = document.querySelector(".formatoSection");
  console.log(section);

  for (let i = 0; i < arrayFavoritos.length; i++) {
    let url = ` https://api.themoviedb.org/3/movie/${arrayFavoritos[i]}?api_key=${apiKey}`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //significa que es pelicula
        let pelicula = `<article class="articulo">
        <a href="./detail_movie.html?id=${data.id}">
            <div class="elemento">
                <img class="Portadapeli" src="https://www.themoviedb.org/t/p/original/${data.poster_path}">
                <p class="NombrePeli">${data.title}</p>
                <p class="fechapelicula"> ${data.release_date}</p>
            </div>
        </a>
    </article>`;
    section.innerHTML += pelicula;
      })
      .catch(function (error) {
        //Probamos con si es una serie
      });
  }
}
