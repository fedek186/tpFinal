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
      });
  }
}
