

class signo {
    constructor(orden, nombre, fechas, regente, elemento, descripcion, ascendente, imagen) {
        this.orden = orden;
        this.nombre = nombre;
        this.fechas = fechas;
        this.regente = regente;
        this.elemento = elemento;
        this.descripcion = descripcion;
        this.ascendente = ascendente;
        this.imagen = "./images/" + imagen;
    }
}

/*En esta clase creo la función para crear los signos que los voy a usar muchas veces en el desarrollo*/

const aries = new signo("1", "Aries", "21 de marzo - 19 de abril", "regido por Marte, el planeta de la sexualidad y la fuerza", "Signo de fuego", "valiente y testarudo. Asume riesgos, es pionero, entusiasta, independiente y directo", "Lo tienen fácil para dar su opinión, afirmar lo que piensan y pedir lo que quieren. Ágiles y decididos, poseen habilidades natas para el liderazgo. Les gusta iniciar proyectos y tomar el mando. Activan con facilidad la actividad física.", "aries.jpg");
const tauro = new signo("2", "Tauro", "20 de abril - 20 de mayo", "regido por Venus, el planeta del amor y la belleza", "Signo de tierra", "estable, paciente y resolutivo. Elegante, disfruta de los placeres de la vida, comer, dormir y el sexo", "Tienen buena presencia, estilo, un comportamiento tranquilo y alardes naturales de riqueza. Pacíficos y relajados, atraen muchas amistades. Al disfrutar de las artes prácticas son buenos bailarines, jardineros, cocineros, estilistas o alfareros.", "tauro.jpg");
const geminis = new signo("3", "Géminis", "21 de mayo - 20 de junio", "regido por Mercurio, el planeta de la comunicación y el intelecto", "signo de aire", "Comunicativo, intelectual e travieso. Necesita expresarse a través del habla, cambia de opinión rápidamente, abre posibiidades, amante de los viajes cortos", "Dan impresión de ser inteligentes e ingeniosos, de tener mente fuerte y buenos modales. La comunicación es clave para ellos, crecen al conectarse con los demás. Excelentes maestros, grandes oradores.", "geminis.jpg");
const cancer = new signo("4", "Cancer", "21 de junio - 22 de julio", "regido por la Luna, que rige las emociones", "Signo de agua", "cuidador, temperamental y maternal. Cuida de los suyos, necesita sentirse seguro y en casa, son muy empáticos, cuando se sienten atacados sacan sus pinzas", "Se los ve como almas cariñosas que cuidan a los demás. Son bastante videntes, con poderosas intuiciones y la capacidad de sentir las emociones de los demás como propias. Buenas personas de negocios por su intuición, pragmatismo y cautela.", "cancer.jpg");
const leo = new signo("5", "Leo", "23 de julio - 22 de agosto", "regido por el Sol, que rige el ego y la expresión de uno mismo", "Signo de fuego", "cercano, leal, orgulloso y teatral. Le gusta impresionar, diferenciarse y mostrar el camino", "Llaman la atención al entrar a cualquier lugar, se comportan como estrellas y tienen un aire teatral. Sus vidas están orientadas a la creatividad y a descubrir sus talentos. Necesitan sentirse admirados y respetados. Almas cercanas, cariñosas y generosas. Disfrutan socializando.", "leo.jpg");
const virgo = new signo("6", "Virgo", "23 de agosto - 22 de septiembre", "regido por Mercurio, el planeta de la comunicación y el intelecto", "Signo de tierra", "organizado, lógico y servicial. Trabajador, perfeccionista y humilde que se pone al servicio de los demás", "Son educados y hablan con suavidad, muy preocupados por el bienestar de los demás. Son analíticos y perceptivos, se fijan en los detalles. Para que sean productivos es importante que haya orden y limpieza a su alrededor. ", "virgo.jpg");
const libra = new signo("7", "Libra", "23 de septiembre - 22 de octubre", "regido por Venus, el planeta del amor y la belleza", "Signo de aire", "justo, indeciso y refinado. Diplomático y romántico que busca y aporta belleza a todo lo que hace", "Atractivos y encantadores, se mueven con belleza y elegancia. La justicia y la diplomacia son muy importantes para estas almas. Ven pros y contras de cada situación. Sensibles a la estética y la armonía, suelen vestir muy bien y crean entornos refinados y agradables.", "libra.jpg");
const escorpio = new signo("8", "Escorpio", "23 de octubre - 21 de noviembre", "regido por Marte y Plutón, planetas de la sexualidad y el poder", "Signo de agua", "misterioso, magnético e intenso. Busca transformar, no teme hablar de los temas ocultos y criticar lo que muchos no se atreven", "Son vistos como personas fuertes, herméticas y decididas, con un magnetismo y carisma inmensos. Son supervivientes que pueden con situaciones intensas. Agentes de cambio en el mundo, ya que tienen mucha influencia y capacidad de persuación.", "escorpio.jpg");
const sagitario = new signo("9", "Sagitario", "22 de noviembre - 21 de diciembre", "regido por Júpiter, planeta de la suerte y la expansión", "Signo de fuego", "aventurero, de mentalidad abierta y sincero. Busca con fuerza la verdad, estudioso, divertido y amante de los viajes largos", "Personas animadas, extrovertidas, divertidas, independientes e inspiradoras. Nacidos con buena suerte, son inquietos anhelan la aventura y viajan física y mentalmente. Pueden ser maravillosos maestros, haciendo que otras personas sean receptivas y perceptivas ayudandolos a crear conciencia.", "sagitario.jpg");
const capricornio = new signo("10", "Capricornio", "22 de diciembre - 19 de enero", "regido por Saturno, planeta de la responsabilidad y la estructura", "Signo de tierra", "disciplinado, perseverante y tradicional. Ambiciosos, que buscan lograr sus objetivos a través del trabajo duro, siempre lo logran", "Dan la impresión de ser personas tradicionales, pacientes, tímidas y contenidas. Individuos elegantes y refinados, son maravillosamente confiables, determinados y autosuficientes. Pueden tener dotes musicales.", "capricornio.jpg");
const acuario = new signo("11", "Acuario", "20 de  enero - 18 de febrero", "regido por Saturno y Urano, planetas de la responsabilidad y la libertad", "Signo de aire", "excentrico, impredecible y humanitario. Genios locos incomprendidos en búsqueda de innovar y cambiar la sociedad", "Se muestran como almas excéntricas, rebeldes y emocionantes que divierten con su originalidad. Tienen un estilo único y un comportamiento único, impresionando al resto con su inconformismo. Pueden crear grupos de amigos creativos e interesantes.", "acuario.jpg");
const piscis = new signo("12", "Piscis", "19 de febrero - 20 de marzo", "regido por Neptuno, planeta de la espiritualidad", "Signo de agua", "tierno, soñador y místico. Enamoradizos, capaces de empatizar con cualquier situación y persona, buscan el amor incondicional", "Tienen una especial habilidad para influir en su entorno. Entran al mundo a partir del idealismo y la sensibilidad. A menudo son creativos y espirituales disfrutando de las artes muy imaginativas: la fotografía, el cine, la danza, la música y el teatro.", "piscis.jpg");

const signos = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, piscis];

/*Creo este array que lo voy a usar para los signos solares, ascendente, luna y planetas*/

/*const filtrarFuego = signos.filter(signo => signo.elemento == "Signo de fuego")
const filtrarTierra = signos.filter(signo => signo.elemento == "Signo de tierra")
const filtrarAire = signos.filter(signo => signo.elemento == "Signo de aire")
const filtrarAgua = signos.filter(signo => signo.elemento == "Signo de agua")

console.log(filtrarFuego)*/

/*Acá puedo fitrar y crear un nuevo array con los signos que contengan x elemento*/

/*let signoUsuario = prompt("Cual es tu signo?");

const busquedaSigno = signos.find(signo => signo.nombre == signoUsuario);

console.log(busquedaSigno)*/

/*El signo se tiene que escribir con la primera letra en mayúscula en el prompt, al usar el .toLowerCase
en el prompt y en el this.name solamente me muestra el primer objeto, escriba el nombre del signo que escriba*/


let selectorDias = document.getElementById("dias")
for (let i = 1; i <= 31; i++) {
    selectorDias.innerHTML += `<option value="${i}">${i}</option>`;
}


const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
    "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

const selectorMes = document.getElementById("meses");
selectorMes.innerHTML = "";
meses.forEach((mes) => {
    selectorMes.innerHTML += `<option value="${mes}">${mes}</option>`;
});


const selectorAño = document.getElementById("año");
let fecha = new Date();
let año = fecha.getFullYear();
for (let i = 1930; i <= año; i++) {
    selectorAño.innerHTML += `<option value="${i}">${i}</option>`;
}

const selectorHora = document.getElementById("hora");
for (let i = 0; i <= 23; i++) {
    selectorHora.innerHTML += `<option value="${i}">${i}</option>`;
}

const selectorMinutos = document.getElementById("minutos");
for (let i = 0; i < 60; i++) {
    selectorMinutos.innerHTML += `<option value="${i}">${i}</option>`;
}


let selectorPaises = document.getElementById("pais")

const url = "./paises.json"
fetch(url)
    .then(res => res.json())
    .then(paises => obtenerPaises(paises))



function obtenerPaises(paises) {
    console.log(paises)
    paises.forEach((pais) => {
        selectorPaises.innerHTML += `<option value="${pais}">${pais}</option>`;
    })
}

document.addEventListener("DOMContentLoaded", e => obtenerPaises())

/*paises.forEach((pais) => {
    obtenerPaises ()
});*/

const form = document.getElementById("form");
const boton = document.getElementById("btn");

const input = document.getElementById("input");

input.addEventListener("change", () => { console.log(`${input.value}`) })

selectorDias.onchange = () => {

    console.log(selectorDias.value)
}

selectorMes.onchange = () => {
    console.log(selectorMes.value)
}

selectorAño.onchange = () => {
    console.log(selectorAño.value)
}

selectorHora.onchange = () => {
    console.log(selectorHora.value)
}

selectorMinutos.onChange = () => {
    console.log(selectorMinutos.value)
}
selectorPaises.onChange = () => {
    console.log(selectorPaises.value)
}


/* Para poder "recolectar" la info de los usuarios creo un usuario que va a estar en un array de usuarios*/

class usuario {
    constructor(nombreUsuario, diaNacimientoUsuario, mesNacimientoUsuario,
        añoNacimientoUsuario, horaNacimientoUsuario, minutosNacimientoUsuario,
        paisNacimientoUsuario) {
        this.nombreUsuario = nombreUsuario;
        this.diaNacimientoUsuario = diaNacimientoUsuario;
        this.mesNacimientoUsuario = mesNacimientoUsuario;
        this.añoNacimientoUsuario = añoNacimientoUsuario;
        this.horaNacimientoUsuario = horaNacimientoUsuario;
        this.minutosNacimientoUsuario = minutosNacimientoUsuario;
        this.paisNacimientoUsuario = paisNacimientoUsuario;
        this.signoSolar = signoSolar;
    }
}

const usuarios = [];

if (localStorage.getItem(usuarios)) {
    let usuario = JSON.parse(localStorage.getItem(usuarios));
    for (let i = 0; i < usuario.length; i++) {
        usuarios.push(usuario[i]);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarUsuario();
    mostrarUsuarios();
});


/* En esta parte de la función tengo mis dudas, acá tengo el problema 
que me borra los datos del nombre, y no me selecciona la info en los
selectores*/

function agregarUsuario() {
    const nombre = document.getElementById("input").value;
    const diaNacimiento = parseInt(document.getElementById("dias").value);
    const añoNacimiento = document.getElementById("año").value;
    const horaNacimiento = parseInt(document.getElementById("hora").value);
    const mesNacimiento = document.getElementById("meses").value;
    const minutosNacimiento = document.getElementById("minutos").value;
    const paisNacimiento = document.getElementById("pais").value;
    const nuevoUsuario = new usuario(nombre, diaNacimiento, mesNacimiento, añoNacimiento, horaNacimiento, minutosNacimiento, paisNacimiento)
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    form.reset();
    return nuevoUsuario;
}

/* Acá guardo los usuarios en el storage para poder darle la información
equivalente a signo solar y ascendente*/

const datosUsuario = JSON.parse(localStorage.getItem(usuarios));

function signoSolar(diaNacimiento, mesNacimiento) {
    let signoSolar = signo;

    if (diaNacimiento >= 21 && mesNacimiento == "marzo"
        || diaNacimiento <= 19 && mesNacimiento == "abril") {
        console.log(aries)
        return signoSolar = aries;
    } else if (diaNacimiento >= 20 &&
        mesNacimiento == "abril" || diaNacimiento <= 20 && mesNacimiento == "mayo") {
        return signoSolar = tauro;
    } else if ((diaNacimiento >= 21 &&
        mesNacimiento == "mayo") || (diaNacimiento <= 20 && mesNacimiento == "junio")) {
        return geminis;
    } else if ((diaNacimiento >= 23 &&
        mesNacimiento == "julio") || (diaNacimiento <= 22 && mesNacimiento == "julio")) {
        return cancer;
    } else if ((diaNacimiento >= 23 &&
        mesNacimiento == "julio") || (diaNacimiento <= 22 && mesNacimiento == "agosto")) {
        return leo;
    } else if ((diaNacimiento >= 23 &&
        mesNacimiento == "agosto") || (diaNacimiento <= 22 && mesNacimiento == "septiembre")) {
        return virgo;
    } else if ((diaNacimiento >= 23 &&
        mesNacimiento == "septiembre") || (diaNacimiento <= 22 && mesNacimiento == "octubre")) {
        return libra;
    } else if ((diaNacimiento >= 23 &&
        mesNacimiento == "octubre") || (diaNacimiento <= 21 && mesNacimiento == "noviembre")) {
        return escorpio;
    } else if ((diaNacimiento >= 22 &&
        mesNacimiento == "noviembre") || (diaNacimiento <= 21 && mesNacimiento == "diciembre")) {
        return sagitario;
    } else if ((diaNacimiento >= 22 &&
        mesNacimiento == "diciembre") || (diaNacimiento <= 19 && mesNacimiento == "enero")) {
        return capricornio;
    } else if ((diaNacimiento >= 20 &&
        mesNacimiento == "enero") || (diaNacimiento <= 18 && mesNacimiento == "febrero")) {
        return acuario;
    } else if ((diaNacimiento >= 19 &&
        mesNacimiento == "febrero") || (diaNacimiento <= 20 && mesNacimiento == "marzo")) {
        return piscis;
    }
    return signoSolar
}

/*signoAscendente debe utilizar el resultado de signoSolar y compararlo con la hora de nacimiento*/

const usuariosNuevos = document.getElementById('usuarios');

const mostrarUsuarios = () => {

    usuarios.innerHTML = '';
    usuarios.forEach((usuario) => {
        console.log(usuario);
        let { nombreUsuario, diaNacimientoUsuario, mesNacimientoUsuario, añoNacimientoUsuario, horaNacimientoUsuario, minutosNacimientoUsuario, paisNacimientoUsuario } = usuario;
        let signo = signoSolar(diaNacimientoUsuario, mesNacimientoUsuario);
        let ascendente = signoAscendente(usuario);
        const div = document.createElement('div');
        div.innerHTML += `
                        <div class='usuarios'>
                        <div class='usuarios__div'>
                        <img class= 'cartaAstral'src="./images/cartaAstral.png">
                            <h3 class='usuarios__textoNombre'>${nombreUsuario}</h3>
                            <h4 class='usuarios__texto'>Fecha de nacimiento: ${diaNacimientoUsuario} de ${mesNacimientoUsuario} de ${añoNacimientoUsuario}</h4>
                            <h5 class='usuarios__texto'>Hora de nacimiento: ${horaNacimientoUsuario} : ${minutosNacimientoUsuario}</h5>
                            <h6 class='usuarios__texto'>País de nacimiento: ${paisNacimientoUsuario}</h6>
                            </div>
                            <div class='astrologia'>
                            <p class='astrologia__frase' >Estas son las estrellas dentro de ti</p>
                            <div class='astrologia__signos'>
                            <div class='astrologia__signo'>
                            <img class= 'astrologia__imagen'src="${signo.imagen}">
                            <h7 class='astrologia__titulos'>Sol: ${signo.nombre} </h7>
                            <p class='usuarios__texto'>${signo.fechas}</p>
                            <p class='astrologia__texto'>${signo.elemento}, ${signo.regente}, el nativo de este signo es ${signo.descripcion}</p>
                            </div>
                            <div class='astrologia__signo'>
                            <img class= 'astrologia__imagen' src="${ascendente.imagen}">
                            <h8 class='astrologia__titulos'>Ascendente: ${ascendente.nombre} </h8>
                            <p class='astrologia__texto'>${ascendente.elemento}, ${ascendente.regente}, el nativo de este signo es ${ascendente.ascendente}</p>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        `
        usuariosNuevos.appendChild(div);
    })
}

/*function signoAscendente(usuario) {
    let { diaNacimientoUsuario, mesNacimientoUsuario, horaNacimientoUsuario } = usuario;
    signoSolarUsuario = signoSolar(diaNacimientoUsuario, mesNacimientoUsuario)
    console.log(signoSolarUsuario == aries)
    console.log(horaNacimientoUsuario)
    if (signoSolarUsuario == aries && horaNacimientoUsuario >= 8 && horaNacimientoUsuario < 10
        || signoSolarUsuario == tauro && horaNacimientoUsuario >= 6 && horaNacimientoUsuario < 8
        || signoSolarUsuario == geminis && horaNacimientoUsuario >= 4 && horaNacimientoUsuario < 6
        || signoSolarUsuario == cancer && horaNacimientoUsuario >= 2 && horaNacimientoUsuario < 4
        || signoSolarUsuario == leo && horaNacimientoUsuario >= 24 && horaNacimientoUsuario < 2
        || signoSolarUsuario == virgo && horaNacimientoUsuario >= 22 && horaNacimientoUsuario < 24
        || signoSolarUsuario == libra && horaNacimientoUsuario >= 20 && horaNacimientoUsuario < 22
        || signoSolarUsuario == escorpio && horaNacimientoUsuario >= 18 && horaNacimientoUsuario < 20
        || signoSolarUsuario == sagitario && horaNacimientoUsuario >= 16 && horaNacimientoUsuario < 18
        || signoSolarUsuario == capricornio && horaNacimientoUsuario >= 14 && horaNacimientoUsuario < 16
        || signoSolarUsuario == acuario && horaNacimientoUsuario >= 12 && horaNacimientoUsuario < 14
        || signoSolarUsuario == piscis && horaNacimientoUsuario >= 10 && horaNacimientoUsuario < 12) {
        console.log(tauro)
        return tauro
    } else if (signoSolarUsuario == aries && horaNacimientoUsuario >= 10 && horaNacimientoUsuario < 12
        || signoSolarUsuario == tauro && horaNacimientoUsuario >= 8 && horaNacimientoUsuario < 10
        || signoSolarUsuario == geminis && horaNacimientoUsuario >= 6 && horaNacimientoUsuario < 8
        || signoSolarUsuario == cancer && horaNacimientoUsuario >= 4 && horaNacimientoUsuario < 6
        || signoSolarUsuario == leo && horaNacimientoUsuario >= 2 && horaNacimientoUsuario < 4
        || signoSolarUsuario == virgo && horaNacimientoUsuario >= 24 && horaNacimientoUsuario < 2
        || signoSolarUsuario == libra && horaNacimientoUsuario >= 22 && horaNacimientoUsuario < 24
        || signoSolarUsuario == escorpio && horaNacimientoUsuario >= 20 && horaNacimientoUsuario < 22
        || signoSolarUsuario == sagitario && horaNacimientoUsuario >= 18 && horaNacimientoUsuario < 20
        || signoSolarUsuario == capricornio && horaNacimientoUsuario >= 16 && horaNacimientoUsuario < 18
        || signoSolarUsuario == acuario && horaNacimientoUsuario >= 14 && horaNacimientoUsuario < 16
        || signoSolarUsuario == piscis && horaNacimientoUsuario >= 12 && horaNacimientoUsuario < 14) {
        console.log(geminis)
        return geminis
    } else if (signoSolarUsuario == aries && horaNacimientoUsuario >= 12 && horaNacimientoUsuario < 14
        || signoSolarUsuario == tauro && horaNacimientoUsuario >= 10 && horaNacimientoUsuario < 12
        || signoSolarUsuario == geminis && horaNacimientoUsuario >= 8 && horaNacimientoUsuario < 10
        || signoSolarUsuario == cancer && horaNacimientoUsuario >= 6 && horaNacimientoUsuario < 8
        || signoSolarUsuario == leo && horaNacimientoUsuario >= 4 && horaNacimientoUsuario < 6
        || signoSolarUsuario == virgo && horaNacimientoUsuario >= 2 && horaNacimientoUsuario < 4
        || signoSolarUsuario == libra && horaNacimientoUsuario >= 24 && horaNacimientoUsuario < 22
        || signoSolarUsuario == escorpio && horaNacimientoUsuario >= 22 && horaNacimientoUsuario < 24
        || signoSolarUsuario == sagitario && horaNacimientoUsuario >= 20 && horaNacimientoUsuario < 22
        || signoSolarUsuario == capricornio && horaNacimientoUsuario >= 18 && horaNacimientoUsuario < 20
        || signoSolarUsuario == acuario && horaNacimientoUsuario >= 16 && horaNacimientoUsuario < 18
        || signoSolarUsuario == piscis && horaNacimientoUsuario >= 14 && horaNacimientoUsuario < 16) {
        console.log(geminis)
        return cancer }
        }*/


function signoAscendente(usuario) {
    let { diaNacimientoUsuario, mesNacimientoUsuario, horaNacimientoUsuario } = usuario;
    signoSolarUsuario = signoSolar(diaNacimientoUsuario, mesNacimientoUsuario)
    console.log(signoSolarUsuario == aries)
    console.log(horaNacimientoUsuario)

   switch (horaNacimientoUsuario >= 8 < 10) {
         case signoSolarUsuario == aries: return tauro;
             break;
         case signoSolarUsuario == tauro: return geminis;
             break;
         case signoSolarUsuario == geminis: return cancer;
             break;
         case signoSolarUsuario == cancer: return leo;
             break;
         case signoSolarUsuario == leo: return virgo;
             break;
         case signoSolarUsuario == virgo: return libra;
             break;
         case signoSolarUsuario == libra: return escorpio;
             break;
         case signoSolarUsuario == escorpio: return sagitario;
             break;
         case signoSolarUsuario == sagitario: return capricorpio;
             break;
         case signoSolarUsuario == capricornio: return acuario;
             break;
         case signoSolarUsuario == acuario: return piscis;
             break;
         case signoSolarUsuario == piscis: return aries;
             break;
     }
     switch (horaNacimientoUsuario >= 10 < 12) {
         case signoSolarUsuario == aries: return geminis;
             break;
         case signoSolarUsuario == tauro: return cancer;
             break;
         case signoSolarUsuario == geminis: return leo;
             break;
         case signoSolarUsuario == cancer: return virgo;
             break;
         case signoSolarUsuario == leo: return libra;
             break;
         case signoSolarUsuario == virgo: return escorpio;
             break;
         case signoSolarUsuario == libra: return sagitario;
             break;
         case signoSolarUsuario == escorpio: return capricornio;
             break;
         case signoSolarUsuario == sagitario: return acuario;
             break;
         case signoSolarUsuario == capricornio: return piscis;
             break;
         case signoSolarUsuario == acuario: return aries;
             break;
         case signoSolarUsuario == piscis: return tauro;
             break;
     }
     switch (horaNacimientoUsuario >= 12 < 14) {
         case signoSolarUsuario == aries: return cancer;
             break;
         case signoSolarUsuario == tauro: return leo;
             break;
         case signoSolarUsuario == geminis: return virgo;
             break;
         case signoSolarUsuario == cancer: return libra;
             break;
         case signoSolarUsuario == leo: return escorpio;
             break;
         case signoSolarUsuario == virgo: return sagitario;
             break;
         case signoSolarUsuario == libra: return capricornio;
             break;
         case signoSolarUsuario == escorpio: return acuario;
             break;
         case signoSolarUsuario == sagitario: return piscis;
             break;
         case signoSolarUsuario == capricornio: return aries;
             break;
         case signoSolarUsuario == acuario: return tauro;
             break;
         case signoSolarUsuario == piscis: return geminis;
             break;
     }
     switch (horaNacimientoUsuario >= 14 < 16) {
         case signoSolarUsuario == aries: return leo;
             break;
         case signoSolarUsuario == tauro: return virgo;
             break;
         case signoSolarUsuario == geminis: return libra;
             break;
         case signoSolarUsuario == cancer: return escorpio;
             break;
         case signoSolarUsuario == leo: return sagitario;
             break;
         case signoSolarUsuario == virgo: return capricornio;
             break;
         case signoSolarUsuario == libra: return acuario;
             break;
         case signoSolarUsuario == escorpio: return piscis;
             break;
         case signoSolarUsuario == sagitario: return aries;
             break;
         case signoSolarUsuario == capricornio: return tauro;
             break;
         case signoSolarUsuario == acuario: return geminis;
             break;
         case signoSolarUsuario == piscis: return cancer;
             break;
     }
     switch (horaNacimientoUsuario >= 16 < 18) {
         case signoSolarUsuario == aries: return virgo;
             break;
         case signoSolarUsuario == tauro: return libra;
             break;
         case signoSolarUsuario == geminis: return escorpio;
             break;
         case signoSolarUsuario == cancer: return sagitario;
             break;
         case signoSolarUsuario == leo: return capricornio;
             break;
         case signoSolarUsuario == virgo: return acuario;
             break;
         case signoSolarUsuario == libra: return piscis;
             break;
         case signoSolarUsuario == escorpio: return aries;
             break;
         case signoSolarUsuario == sagitario: return tauro;
             break;
         case signoSolarUsuario == capricornio: return geminis;
             break;
         case signoSolarUsuario == acuario: return cancer;
             break;
         case signoSolarUsuario == piscis: return leo;
             break;
     }
     switch (horaNacimientoUsuario >= 18 < 20) {
         case signoSolarUsuario == aries: return libra;
             break;
         case signoSolarUsuario == tauro: return escorpio;
             break;
         case signoSolarUsuario == geminis: return sagitario;
             break;
         case signoSolarUsuario == cancer: return capricornio;
             break;
         case signoSolarUsuario == leo: return acuario;
             break;
         case signoSolarUsuario == virgo: return piscis;
             break;
         case signoSolarUsuario == libra: return aries;
             break;
         case signoSolarUsuario == escorpio: return tauro;
             break;
         case signoSolarUsuario == sagitario: return geminis;
             break;
         case signoSolarUsuario == capricornio: return cancer;
             break;
         case signoSolarUsuario == acuario: return leo;
             break;
         case signoSolarUsuario == piscis: return virgo;
             break;
     }
     switch (horaNacimientoUsuario >= 20 < 22) {
         case signoSolarUsuario == aries: return escorpio;
             break;
         case signoSolarUsuario == tauro: return sagitario;
             break;
         case signoSolarUsuario == geminis: return capricornio;
             break;
         case signoSolarUsuario == cancer: return acuario;
             break;
         case signoSolarUsuario == leo: return piscis;
             break;
         case signoSolarUsuario == virgo: return aries;
             break;
         case signoSolarUsuario == libra: return tauro;
             break;
         case signoSolarUsuario == escorpio: return geminis;
             break;
         case signoSolarUsuario == sagitario: return cancer;
             break;
         case signoSolarUsuario == capricornio: return leo;
             break;
         case signoSolarUsuario == acuario: return virgo;
             break;
         case signoSolarUsuario == piscis: return libra;
             break;
     }
     switch (horaNacimientoUsuario >= 22 < 24) {
         case signoSolarUsuario == aries: return sagitario;
             break;
         case signoSolarUsuario == tauro: return capricornio;
             break;
         case signoSolarUsuario == geminis: return acuario;
             break;
         case signoSolarUsuario == cancer: return piscis;
             break;
         case signoSolarUsuario == leo: return aries;
             break;
         case signoSolarUsuario == virgo: return tauro;
             break;
         case signoSolarUsuario == libra: return geminis;
             break;
         case signoSolarUsuario == escorpio: return cancer;
             break;
         case signoSolarUsuario == sagitario: return leo;
             break;
         case signoSolarUsuario == capricornio: return virgo;
             break;
         case signoSolarUsuario == acuario: return libra;
             break;
         case signoSolarUsuario == piscis: return escorpio;
             break;
     }
     switch (horaNacimientoUsuario >= 24 < 2) {
         case signoSolarUsuario == aries: return capricornio;
             break;
         case signoSolarUsuario == tauro: return acuario;
             break;
         case signoSolarUsuario == geminis: return piscis;
             break;
         case signoSolarUsuario == cancer: return aries;
             break;
         case signoSolarUsuario == leo: return tauro;
             break;
         case signoSolarUsuario == virgo: return geminis;
             break;
         case signoSolarUsuario == libra: return cancer;
             break;
         case signoSolarUsuario == escorpio: return leo;
             break;
         case signoSolarUsuario == sagitario: return virgo;
             break;
         case signoSolarUsuario == capricornio: return libra;
             break;
         case signoSolarUsuario == acuario: return escorpio;
             break;
         case signoSolarUsuario == piscis: return sagitario;
             break;
     }
     switch (horaNacimientoUsuario >= 2 < 4) {
         case signoSolarUsuario == aries: return acuario;
             break;
         case signoSolarUsuario == tauro: return piscis;
             break;
         case signoSolarUsuario == geminis: return aries;
             break;
         case signoSolarUsuario == cancer: return tauro;
             break;
         case signoSolarUsuario == leo: return geminis;
             break;
         case signoSolarUsuario == virgo: return cancer;
             break;
         case signoSolarUsuario == libra: return leo;
             break;
         case signoSolarUsuario == escorpio: return virgo;
             break;
         case signoSolarUsuario == sagitario: return libra;
             break;
         case signoSolarUsuario == capricornio: return escorpio;
             break;
         case signoSolarUsuario == acuario: return sagitario;
             break;
         case signoSolarUsuario == piscis: return capricornio;
             break;
     }
     switch (horaNacimientoUsuario >= 4 < 6) {
         case signoSolarUsuario == aries: return piscis;
             break;
         case signoSolarUsuario == tauro: return aries;
             break;
         case signoSolarUsuario == geminis: return tauro;
             break;
         case signoSolarUsuario == cancer: return geminis;
             break;
         case signoSolarUsuario == leo: return cancer;
             break;
         case signoSolarUsuario == virgo: return leo;
             break;
         case signoSolarUsuario == libra: return virgo;
             break;
         case signoSolarUsuario == escorpio: return libra;
             break;
         case signoSolarUsuario == sagitario: return escorpio;
             break;
         case signoSolarUsuario == capricornio: return sagitario;
             break;
         case signoSolarUsuario == acuario: return capricornio;
             break;
         case signoSolarUsuario == piscis: return acuario;
             break;
     }
     if (horaNacimientoUsuario >= 6 < 8) {
         return signoSolarUsuario
     } }
