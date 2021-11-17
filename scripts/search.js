//Agarramos la palabra que se busco
let queryString = location.search;
let queryStringObject = new URLSearchParams(queryString);
let palabra = queryStringObject.get("busqueda");
console.log(palabra);

//Ponemos la palabra en el H1
let h1 = document.querySelector("h1");
h1.innerHTML = `Buscar: ${palabra}`;

//Traeemos los datos de la api y agarramos el section
let sectionGeneral = document.querySelector(".formatoSection");
let apiKey = "41bafc5fa52735dc2b13b57aa420f841";
let url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${palabra}`;
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let info = data.results;
    console.log(info);
    for (let i = 0; i < info.length; i++) {
      let peliculaArt = ` 
        <article class="articulo">
            <a href="./detail_movie.html?id=${info[i].id}">
                <div class="elemento">
                    <img class="Portadapeli" src="https://www.themoviedb.org/t/p/original/${info[i].poster_path}">
                    <p class="NombrePeli">${info[i].title}</p>
                    <p class="fechapelicula"> ${info[i].release_date}</p>
                </div>
            </a>
        </article>`;
        sectionGeneral.innerHTML += peliculaArt;
    };
    if(info.length == 0) {
        let main = document.querySelector('main');
        main.innerHTML += `
        <section class="errorSection">
            <img class="imgError" src="../img/notFound.png"> 
            <h2 class="msjError"> Sherlock esta investigando porque no se encontraron los resultados de su busqueda </h2>
        </section>`;
    };
  })
  .catch(function (error) {
    alert("Error en la traida de datos");
    console.log("Error: " + error);
  });

 