let paginas = 1;

const btnAdelante = document.getElementById('adelante');
const btnAtras = document.getElementById('atras');



btnAtras.addEventListener('click', ()=>{
    if(paginas > 1){
    paginas--;
    render();
    }
    
})

btnAdelante.addEventListener('click', ()=>{
    if(paginas <= 1000){
    paginas++;
    render();
    }
    
})


async function api(pagina) {
    try{
        const key = 'caf6dca6f29a026b04a453923a89c316';
        const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=es-MX&page=${paginas}`;


        const resultado = await fetch(url);
        if(resultado.status === 200){
            const datos = await resultado.json();
            return datos.results; ;   
        }else if(resultado.status === 404){
            console.log('la pelicula que buscas no existe');
        } else if(resultado.status === 401){
            console.log('pusiste la llave mal');
        }else{
            console.log('error desconocido');
        }
    }catch(error){
        console.error('ES UN FALLO' + error);
    }
}

// function animacionCartas(){
//     carta.addEventListener('click', () => {
//     console.log(`Has hecho click en: cartas`);
//     // Puedes abrir detalle, mostrar info o aplicar animación
//   });
// };

function insertarNodo(personaje){
    const carta = document.createElement('section');
    carta.className = 'cartas';
    const insercion = document.createRange().createContextualFragment(/*HTML */`
            <article class="imagen-c">
                <img src="https://image.tmdb.org/t/p/original${personaje.poster_path}" alt="${personaje.title}">
            </article>
            <h2 class="titulo">${personaje.title}</h2>
            <p class="parrafo">${!personaje.overview ? 'El misterio está servido... aún no hay descripción para esta película. ¿Te animas a descubrirla por ti mismo?': personaje.overview}</p>    
    `);
    carta.append(insercion);
    // animacionCartas();
    carta.addEventListener('click', () => {
        carta.classList.toggle('girodecartas');
        console.log(`Has hecho click en: cartas`);
    });

    return carta;
}


async function render() {
    const laApi = await api(paginas);
    const selector = document.querySelector('.contenedor');
    selector.innerHTML = '';

     laApi.forEach(element => {
        selector.append(insertarNodo(element)); 
    });    
}

render();

async function appi(url) {
    try{
        const resultado = await fetch(url);

        if(resultado.status === 200){
            const datos = await resultado.json();
            console.log('datos.results: ', datos);
        }else if(resultado.status === 404){
            console.log('la pelicula que buscas no existe');
        } else if(resultado.status === 401){
            console.log('pusiste la llave mal');
        }else{
            console.log('error desconocido');
        }
    }catch(error){
        console.log('es un' + error);
    }
}


function linksApi(){
    
}

const key = 'caf6dca6f29a026b04a453923a89c316';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-MX&page=${paginas}`;
    const url1 = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&lengauge=es-Mx`;
    const url2 = `https://api.themoviedb.org/3/configuration?api_key=caf6dca6f29a026b04a453923a89c316&language=es-MX`;

    const otra = 'http://api.anidb.net:9001/httpapi?request=anime';

appi(otra);