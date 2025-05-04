// controla el modo eliminacion para los articulos
let modoEliminacion = false;

//articulos definidos por seccion para carga dinamica
const baseArticulos = {
    index: [
        {
            titulo: `Botafogo sufre una pesadilla en santiago`,
            categoria: "Deportes",
            contenido: `La U amargó al último campeón de la Copa Libertadores, ganándole 1 a 0 en Santiago y llevándose los 3 puntos.`,
            media: null
        },
        {
            titulo: `Colo Colo rescata un empate e la agonía ante Atlético Bucaramanga en su debut en Libertadores`,
            categoria: "Deportes",
            contenido: `El Cacique no tuvo su mejor noche, pero de todas formas logró rescatar un punto de oro en su estreno en el torneo continental. Jorge Almirón queda con mucho por mejorar en un equipo que esta noche se salvó a puro corazón`,
            media: null
        },
        {
            titulo: `Aranceles de EE.UU.: tensión en el libre comercio y alerta para el cobre chileno`,
            categoria: "Negocios",
            contenido: `EEUU impone arancel del 10% a importaciones chilenas desde el 5 de abril, pese a TLC. Sectores como agroindustria (vino y frutas) enfrentan pérdida de competitividad y costos elevados. Cobre, clave en exportaciones, sigue exento por ahora, pero con riesgos futuros`,
            media: null
        }
    ],
    Deporte: [
        {
            titulo: `¡Cómo en el 96! Triunfazo y debut soñado de Universidad de Chile a costa de Botafogo`,
            categoria: "Deportes",
            contenido: `<p>Universidad de Chile logró este miércoles una de sus victorias más resonantes de los últimos años al derrotar por 1-0 al campeón defensor, Botafogo, en el Estadio Nacional, en encuentro válido por la primera fecha del Grupo A de la CONMEBOL Libertadores 2025.</p>
            `,
            media: "<img src='img/goludechilecelebracion.jpeg' class='articulo-media'>"
        },
        {
            titulo: `Colo Colo rescata un empate e la agonía ante Atlético Bucaramanga en su debut en Libertadores`,
            categoria: "Deportes",
            contenido: `<p>Colo Colo tuvo que sufrir y mucho para poder conseguir su primer punto en la Copa Libertadores. El Cacique debutó con un empate agónico por 3 a 3 ante Atlético Bucaramanga, en un partido que tuvo de todo.</p> 
            <p>El equipo de Jorge Almirón tuvo una noche para el olvido, pero que a puro corazón logró transformar en una historia épica. Una con la que respiran un poco más tranquilos y que les deja una gran tarea si quieren pelear de verdad en el plano internacional.</p>
            `,
            media: "<img src='img/atleticobucaramangavscolocolo.jpg' class='articulo-media'>"
        },
        {
            titulo: `Tras 25 años en el club Thomas Müller dice adiós`,
            categoria: "Deportes",
            contenido: `<p>Thomas Müller no continuará en el Bayern Múnich tras 25 años. El multicampeón con el Bayern Múnich, Thomas Müller, jugará sus últimos partidos con la camiseta del gigante de Baviera en la nueva edición del mundial de clubes que se disputará en junio, ya que no se renovó su contrato con el equipo de sus amores.</p> 
            <p>Müller llegó el año 2000 al Bayern, solo cuando tenía 10 años de edad, jugando toda su carrera en el equipo y ahora tendrá que buscar nuevos horizontes.</p>
            `,
            media: "<img src='img/20250405_143557-1024x1280.jpg' class='articulo-media'>"
        }
    ],
    Negocios: [
        {
            titulo: `Trump declara una guerra comercial al mundo y anuncia un arancel universal base del 10%`,
            categoria: "Negocios",
            contenido: `<p>Estados Unidos da un nuevo golpe al comercio global con una ola de aranceles que afectarán a más de 180 países y territorios.</p>
             <p>En un evento en la Casa Blanca, Donald Trump firmó una orden presidencial que impone tarifas a socios comerciales clave, argumentando que la nación ha sido "estafada por más de 50 años".</p>
             <p>La medida, que incluye un arancel universal base del 10%, mientras que países como China y los miembros de la Unión Europea serán algunos de los más damnificados.</p> 
             `,
            media: "<img src='img/trump.png' class='articulo-media'>"
        },
        {
            titulo: `Boric lanza dura crítica contra Trump a horas del anuncio de aranceles de EE.UU.`,
            categoria: "Negocios",
            contenido: `<p>El Presidente Boric calificó este miércoles de aspirante a “emperador” al presidente Donald Trump, en el segundo día de su gira a India.</p>
            <p>Sus dichos ocurrieron en un momento sensible: a horas de que EE.UU. anuncie aranceles para varios países. Fuentes de la cancillería señalaron que su intervención no contribuye  a potenciar los intereses nacionales y es más bien un guiño a su base política.</p> 
            `,
            media: "<img src='img/gabrielboric.png' class='articulo-media'>"
        },
        {
            titulo: `Chilenos ven complejo emprender en 2025, pero un 87% afirma que lo haría en el futuro.`,
            categoria: "Negocios",
            contenido: `<p>Según la Xª Encuesta Ecosistema Emprendedor realizada por la Universidad Gabriela Mistral (UGM), aún existen importantes brechas de género en el ecosistema emprendedor.</p>
            <p>Si bien el emprendimiento es una de las actividades más valoradas en el país, un poco más de la mitad de los chilenos (51%) prefiere ser empresario antes que emprendedor.</p>
            <p>La consulta, realizada entre el 17 y 21 de marzo de 2025, corresponde a un estudio cuantitativo, no probabilístico, 
                que se realizó mediante la aplicación de encuestas online a personas registradas en un panel con más de 300 mil personas de todo el país, 
                mayores de 18 años y de diferentes grupos socioeconómicos.
                Según los resultados preliminares del informe, la proporción de personas que actualmente tienen un emprendimiento, disminuyó 2 puntos (a 25%) en comparación con enero del año en curso.</p>
            <p>Por otro lado, se mantiene la percepción de limitaciones para emprender y aumenta la percepción negativa del contexto (probabilidad de éxito del negocio, probabilidad de conseguir recursos), 
                y de que el año pasado era mejor para emprender que el actual. De hecho, un 73% considera que el gobierno no tiene como prioridad el emprendimiento nacional.</p>
            `,
            media: "<img src='img/emprendimiento.png' class='articulo-media'>"
        }
    ]
};

//combina los articulos definidos con los dinamicos filtrados por seccion
function obtenerArticulosCompletos() {
    const seccion = obtenerSeccionActual();
    return [...baseArticulos[seccion], ...articulosDinamicos.filter(a => a.seccion === seccion)];
}
let articulosDinamicos = JSON.parse(localStorage.getItem('articulosDinamicos')) || [];

function obtenerSeccionActual() {
    const path = window.location.pathname;
    const pagina = path.split('/').pop().split('.')[0]; // Mejor manejo de rutas
    return Object.keys(baseArticulos).includes(pagina) ? pagina : 'index';
}

//crea elemenos HTML para mostrar en el grid ademas muestra los bontones de eliminacion cuando esta activo el modo eliminacion
function renderizarArticulos() {
    const seccion = obtenerSeccionActual();
    const grid = document.querySelector('.grid-articulos');
    grid.innerHTML = '';

    const articulosCompletos = obtenerArticulosCompletos();
    
    articulosCompletos.forEach(articulo => { 
        const div = document.createElement('div');
        div.className = 'articulo';
        div.innerHTML = `
            ${modoEliminacion ? `<button class="btn-eliminar" onclick="eliminarArticulo(${articulo.id})">X</button>` : ''}
            <h3>${articulo.titulo}</h3>
            ${seccion === 'index' ? `<span class="categoria">${articulo.categoria}</span>` : ''}
            <div class="contenido-noticia">${articulo.contenido}</div>
            ${articulo.media || ''}
        `;
        grid.appendChild(div);
    });
    actualizarContador();
}

//funcion para actualizar el contador de articulo, se puede usar por otras funciones
function actualizarContador() {
    const seccion = obtenerSeccionActual();
    const total = baseArticulos[seccion].length + 
                articulosDinamicos.filter(a => a.seccion === seccion).length;
    const contador = document.getElementById('contador');
    if (contador) contador.textContent = total;
}

//actualiza el reloj del diario en tiempo real
function actualizarReloj() {
    const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    const reloj = document.getElementById('reloj');
    if (reloj) {
        reloj.textContent = new Date().toLocaleDateString('es-CL', opciones);
    }
}

//al cargar los archivos, crea los elementos multimedia en base64 y los guarda el Localstorage(o sea en el navegador)
function crearElementoMultimedia(archivo) {
    return new Promise((resolve) => {
        if (!archivo) return resolve('');
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            resolve(`<img src="${base64}" class="articulo-media">`);
        };
        reader.readAsDataURL(archivo);
    });
}

//crea los articulos, los almacena en localstorage del navegador
async function agregarArticulo(titulo, contenido, archivo) {
    const mediaHTML = await crearElementoMultimedia(archivo);
    const seccionActual = obtenerSeccionActual();
    
    //muestra un selector de categoria solo en la pagina index
    const categoria = seccionActual === 'index' 
        ? document.getElementById('selectCategoria').value 
        : seccionActual;

    const nuevaNoticia = {
        seccion: seccionActual,
        categoria: categoria,
        titulo,
        contenido: contenido.split('\n').map(p => `<p>${p}</p>`).join(''),
        media: mediaHTML,
        id: Date.now()
    };

    articulosDinamicos.unshift(nuevaNoticia);
    localStorage.setItem('articulosDinamicos', JSON.stringify(articulosDinamicos));
    renderizarArticulos();
}

//Activa y desactiva el modo eliminacion, ademas cambia el icono del mismo al cambiar de modos
function toggleModoEliminacion() {
    modoEliminacion = !modoEliminacion;
    renderizarArticulos();
    const btnEliminar = document.getElementById('btnEliminar');
    btnEliminar.textContent = modoEliminacion ? '✖' : '🗑';
    btnEliminar.style.backgroundColor = modoEliminacion ? '#cc0000' : '#31231e';
}

//elimina los articulos almacenados en localstorage y vuelve a renderizar los articulos
function eliminarArticulo(id) {
    articulosDinamicos = articulosDinamicos.filter(art => art.id !== id);
    localStorage.setItem('articulosDinamicos', JSON.stringify(articulosDinamicos));
    renderizarArticulos();
}

//es el formulario que se muestra al crear una noticia el cual cuenta con: selecctor de categorias, titulo, contenido y algun archivo media
//ademas de validaciones para que los campos no queden vacios 
function manejarFormularioArticulos() {
    const formulario = document.getElementById('formArticulo');
    if (!formulario) return;

    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const categoria = document.getElementById('selectCategoria')?.value;
        const titulo = formulario.querySelector('input').value.trim();
        const contenido = formulario.querySelector('textarea').value.trim();
        const archivo = formulario.querySelector('#mediaInput').files[0];
        
        if (!titulo || !contenido || (window.location.pathname.includes('index') && !categoria)) {
            alert('Complete todos los campos requeridos');
            return;
        }
        
        await agregarArticulo(titulo, contenido, archivo, categoria);
        formulario.reset();
        document.getElementById('formOverlay').style.display = 'none';
    });
}


//es el formulario que se muestra en la pagina de contacto, el cual contiene un titulo y un contenido
//ademas de validaciones para completar los campos
function manejarFormularioContacto() {
    const formulario = document.getElementById('formContacto');
    if (!formulario) return;

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = formulario.querySelectorAll('input, textarea');
        let valido = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) valido = false;
        });

        if (!valido) {
            alert('Complete todos los campos');
            return;
        }
        formulario.reset();
    });
}

//contiene las condiciones del formulario emergente, es decir click en el boton + abre el formulario
//click en boton x del formulario lo cierra, click fuera del margen del formulario lo cierra
function configurarFormularioEmergente() {
    const btnPublicar = document.getElementById('btnPublicar');
    const overlay = document.getElementById('formOverlay');
    
    if (btnPublicar && overlay) {
        btnPublicar.addEventListener('click', () => overlay.style.display = 'block');
        document.getElementById('closeForm').addEventListener('click', () => overlay.style.display = 'none');
        overlay.addEventListener('click', (e) => e.target === overlay && (overlay.style.display = 'none'));
    }
}

//inicializa y configura las funciones al cargar la pagina
function inicializarAplicacion() {
    setInterval(actualizarReloj, 1000);
    actualizarReloj();
    renderizarArticulos();
    configurarFormularioEmergente();
    manejarFormularioArticulos();
    manejarFormularioContacto();

    //boton flotante + que rota
    const btnPublicar = document.createElement('button');
    btnPublicar.id = 'btnPublicar';
    btnPublicar.className = 'btn-flotante';
    btnPublicar.innerHTML = '+';  
    btnPublicar.onclick = () => document.getElementById('formOverlay').style.display = 'block';
    document.body.appendChild(btnPublicar);

    // boton modo eliminacion que solo se expande al seleccionar 
    const btnEliminar = document.createElement('button');
    btnEliminar.id = 'btnEliminar';
    btnEliminar.className = 'btn-trash';
    btnEliminar.innerHTML = '🗑';
    btnEliminar.onclick = toggleModoEliminacion;
    document.body.appendChild(btnEliminar);
}

document.addEventListener('DOMContentLoaded', inicializarAplicacion);