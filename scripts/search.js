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

//Agarramos la palabra que se busco
let queryString = location.search; //Cadena de texto
let queryStringObject = new URLSearchParams(queryString);
let palabra = queryStringObject.get("busqueda");
console.log(palabra);

//Ponemos la palabra en el H1
let h1 = document.querySelector("h1");
h1.innerText = `Buscar: ${palabra}`;

//GIF
let sectionGeneral = document.querySelector(".formatoSection");
window.addEventListener("load", function(event) {
  let gify = '<img class="gif" src="./img/load.gif">';
  sectionGeneral.innerHTML = gify;
});


//Traeemos los datos de la api y agarramos el section
let apiKey = "41bafc5fa52735dc2b13b57aa420f841";
let url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${palabra}`;//Explicar URL
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let gif = document.querySelector(".gif");
    gif.style.display = "none";
    let info = data.results;
    let articulo = "";
    for (let i = 0; i < info.length; i++) {
      if (info[i].title != undefined) {
        articulo = ` 
        <article class="articulo">
            <a href="./detail_movie.html?id=${info[i].id}">
                <div class="elemento">
                    <img class="Portadapeli" src="https://www.themoviedb.org/t/p/original/${info[i].poster_path}">
                    <p class="NombrePeli">${info[i].title}</p>
                    <p class="fechapelicula"> ${info[i].release_date}</p>
                </div>
            </a>
        </article>`;
      } else {
        articulo = `<article class="articulo">
        <a href="./detail_series.html?id=${info[i].id}">
            <div class="elemento">
                <img class="Portadapeli" src="https://www.themoviedb.org/t/p/original/${info[i].poster_path}">
                <p class="NombrePeli">${info[i].name}</p>
                <p class="fechapelicula"> ${info[i].first_air_date}</p>
            </div>
        </a>
    </article>`;
      }
      sectionGeneral.innerHTML += articulo;
    }
    if (info.length == 0) {
      let main = document.querySelector("main");
      main.innerHTML += `
        <section class="errorSection">
            <img class="imgError" src="../img/notFound.png"> 
            <h2 class="msjError"> Sherlock esta investigando porque no se encontraron los resultados de su busqueda </h2>
        </section>`;
    }
  })
  .catch(function (error) {
    alert("Error en la traida de datos");
    console.log("Error: " + error);
  });
