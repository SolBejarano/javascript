

class signo {
    constructor(orden, nombre, fechas, regente, elemento, descripcion, ascendente, urano, neptuno, pluton, imagen) {
        this.orden = orden;
        this.nombre = nombre;
        this.fechas = fechas;
        this.regente = regente;
        this.elemento = elemento;
        this.descripcion = descripcion;
        this.ascendente = ascendente;
        this.urano = urano;
        this.neptuno = neptuno;
        this.pluton = pluton;
        this.imagen = "./images/" + imagen;
    }
}

/*En esta clase creo la función para crear los signos que los voy a usar muchas veces en el desarrollo*/

const aries = new signo("1", "Aries", "21 de marzo - 19 de abril", "regido por Marte, el planeta de la sexualidad y la fuerza", "Signo de fuego", "valiente y testarudo. Asume riesgos, es pionero, entusiasta, independiente y directo", "Lo tienen fácil para dar su opinión, afirmar lo que piensan y pedir lo que quieren. Ágiles y decididos, poseen habilidades natas para el liderazgo. Les gusta iniciar proyectos y tomar el mando. Activan con facilidad la actividad física.", "Las generaciones con urano en aries lideran grandes cambios sociales. obstinados e individualistas, son rebeldes que preparan el camino para nuevos territorios. Pioneros en ciencia y tecnología", "", "", "aries.jpg");
const tauro = new signo("2", "Tauro", "20 de abril - 20 de mayo", "regido por Venus, el planeta del amor y la belleza", "Signo de tierra", "estable, paciente y resolutivo. Elegante, disfruta de los placeres de la vida, comer, dormir y el sexo", "Tienen buena presencia, estilo, un comportamiento tranquilo y alardes naturales de riqueza. Pacíficos y relajados, atraen muchas amistades. Al disfrutar de las artes prácticas son buenos bailarines, jardineros, cocineros, estilistas o alfareros.", "Las generaciones con urano en tauro tienen relaciones inestables con la seguridad y la riqueza, a menudo las infancias de estas personas fueron en crisis económicas. Intentan liberarse de los recursos materiales y las obligaciones económicas.", "", "", "tauro.jpg");
const geminis = new signo("3", "Géminis", "21 de mayo - 20 de junio", "regido por Mercurio, el planeta de la comunicación y el intelecto", "signo de aire", "Comunicativo, intelectual e travieso. Necesita expresarse a través del habla, cambia de opinión rápidamente, abre posibiidades, amante de los viajes cortos", "Dan impresión de ser inteligentes e ingeniosos, de tener mente fuerte y buenos modales. La comunicación es clave para ellos, crecen al conectarse con los demás. Excelentes maestros, grandes oradores.", "Las generaciones con urano en géminis revolucionan nuestra forma de pensar y de comunicarnos como sociedad. Crean innovaciones tecnológicas que ayudan a conectar a las personas y también avances en prácticas intelectuales.", "", "", "geminis.jpg");
const cancer = new signo("4", "Cancer", "21 de junio - 22 de julio", "regido por la Luna, que rige las emociones", "Signo de agua", "cuidador, temperamental y maternal. Cuida de los suyos, necesita sentirse seguro y en casa, son muy empáticos, cuando se sienten atacados sacan sus pinzas", "Se los ve como almas cariñosas que cuidan a los demás. Son bastante videntes, con poderosas intuiciones y la capacidad de sentir las emociones de los demás como propias. Buenas personas de negocios por su intuición, pragmatismo y cautela.", "Las generaciones con urano en cancer tienen ideas novedosas sobre la vida doméstica y familiar, rompiendo con las tradiciones. Pueden tener familias inestables y rebeldes, eligiendo caminos distintos a como fueron educados.", "", "Los núcleos familiares. Seres profundamente emocionales, con fuertes ataduras con la familia, el hogar y sus países.", "cancer.jpg");
const leo = new signo("5", "Leo", "23 de julio - 22 de agosto", "regido por el Sol, que rige el ego y la expresión de uno mismo", "Signo de fuego", "cercano, leal, orgulloso y teatral. Le gusta impresionar, diferenciarse y mostrar el camino", "Llaman la atención al entrar a cualquier lugar, se comportan como estrellas y tienen un aire teatral. Sus vidas están orientadas a la creatividad y a descubrir sus talentos. Necesitan sentirse admirados y respetados. Almas cercanas, cariñosas y generosas. Disfrutan socializando.", "Aquellos con urano en leo son son originales, creativos y expresivos. Pueden influir enormemente en la sociedad, en concreto revolucionando las artes y el mundo del espectáculo.", "", "Los hedonistas. Generaciones muy creativas, juguetonas y orientadas a buscar el placer.", "leo.jpg");
const virgo = new signo("6", "Virgo", "23 de agosto - 22 de septiembre", "regido por Mercurio, el planeta de la comunicación y el intelecto", "Signo de tierra", "organizado, lógico y servicial. Trabajador, perfeccionista y humilde que se pone al servicio de los demás", "Son educados y hablan con suavidad, muy preocupados por el bienestar de los demás. Son analíticos y perceptivos, se fijan en los detalles. Para que sean productivos es importante que haya orden y limpieza a su alrededor.", "Aquellos nacidos con urano en virgo descubren maneras revolucionarias de relacionarse con la salud y la medicina. Encuentran curas a enfermedades, introducen nuevas dietas, métodos de ejercicio y remedios alternativos.", "Canalizan su compasión a través del servicio a la humanidad. Les interesa especialmente sanar física y espiritualmente.", "Los pragmáticos. Valoran el medio ambiente y trabajan mucho para acumular riqueza. Se rebelaron contra la búsqueda del placer desmedido de la generación que los precedía. Les importa mucho el bienestar.", "virgo.jpg");
const libra = new signo("7", "Libra", "23 de septiembre - 22 de octubre", "regido por Venus, el planeta del amor y la belleza", "Signo de aire", "justo, indeciso y refinado. Diplomático y romántico que busca y aporta belleza a todo lo que hace", "Atractivos y encantadores, se mueven con belleza y elegancia. La justicia y la diplomacia son muy importantes para estas almas. Ven pros y contras de cada situación. Sensibles a la estética y la armonía, suelen vestir muy bien y crean entornos refinados y agradables.", "Estas generaciones se rebelan contra las tradiciones que rodean al matrimonio y las relaciones. Les cuesta estabilizarse, tienden a divorciarse y a contraer varios matrimonios. Tienen gustos estéticos poco habituales, ayudando a romper moldes creativos y a revolucionar el arte y la cultura.", "Tienen grandes ideas acerca del amor y la paz. A su vez, neptuno puede diluir y minar la paz de libra.", "Los igualitarios. Les preocupa la integridad, la igualdad y la justicia. Ésta es la Generación X, conocida por su apatía, inconstancia y por sus dificultades para establecerse.", "libra.jpg");
const escorpio = new signo("8", "Escorpio", "23 de octubre - 21 de noviembre", "regido por Marte y Plutón, planetas de la sexualidad y el poder", "Signo de agua", "misterioso, magnético e intenso. Busca transformar, no teme hablar de los temas ocultos y criticar lo que muchos no se atreven", "Son vistos como personas fuertes, herméticas y decididas, con un magnetismo y carisma inmensos. Son supervivientes que pueden con situaciones intensas. Agentes de cambio en el mundo, ya que tienen mucha influencia y capacidad de persuación.", "Los nacidos en este tránsito alteran la forma en la que la sociedad se relaciona con la espiritualidad, la psicología y lo esotérico. Se convierten en artistas, agentes de cambio y sanadores.", "Les interesa el misticismo, la transformación psicológica y eliminar tabúes. Estas generaciones luchan por gobiernos más transparentes, trabajando para desmantelar el poder abusivo que daña el medioambiente y la humanidad.", "Los revolucionarios. Son imaginativos, obstinados y poseen poderes psíquicos. Son poderosos revolucionarios que aparecen al final de la era, liberándonos de las fuerzas opresivas, mientras nos llevan a un renacimiento colectivo.", "escorpio.jpg");
const sagitario = new signo("9", "Sagitario", "22 de noviembre - 21 de diciembre", "regido por Júpiter, planeta de la suerte y la expansión", "Signo de fuego", "aventurero, de mentalidad abierta y sincero. Busca con fuerza la verdad, estudioso, divertido y amante de los viajes largos", "Personas animadas, extrovertidas, divertidas, independientes e inspiradoras. Nacidos con buena suerte, son inquietos anhelan la aventura y viajan física y mentalmente. Pueden ser maravillosos maestros, haciendo que otras personas sean receptivas y perceptivas ayudandolos a crear conciencia.", "Estas generaciones introducen nuevas filosofías y revolucionan la religión. Rompen la fe ciega y el fundamentalismo estableciendo enfoques más auténticos de la espiritualidad.", "Son idealistas, de mentalidad abierta. Sus generaciones incluyen poderosos maestros espirituales, filósofos, sanadores intuitivos y buscadores de la verdad. Pueden desmontar el fundamentalismo y mostrar una comprensión profunda y apertura a culturas distintas de la propia.", "Los reveladores de la verdad. Tienen espíritu aventurero, aman la libertad y desprecian la autoridad. Extrovertidos e irrefrenables, luchan por sus creencias exponiendo y propagando la verdad.", "sagitario.jpg");
const capricornio = new signo("10", "Capricornio", "22 de diciembre - 19 de enero", "regido por Saturno, planeta de la responsabilidad y la estructura", "Signo de tierra", "disciplinado, perseverante y tradicional. Ambiciosos, que buscan lograr sus objetivos a través del trabajo duro, siempre lo logran", "Dan la impresión de ser personas tradicionales, pacientes, tímidas y contenidas. Individuos elegantes y refinados, son maravillosamente confiables, determinados y autosuficientes. Pueden tener dotes musicales.", "Estas generaciones derrocan las tradiciones anticuadas, los gobiernos, empresas y líderes opresivos, y los sustituyen por modelos innovadores y tecnológicamente sofisticados. Se rebelan contra la autorida, crean nuevas costumbres y sistemas que revolucionan la sociedad.", "Ayudan a derribar muros y barreras innecesarias. Puede ser esencial para acabar con el patriarcado. Desdibujan las tradiciones y encuentran maneras prácticas de ampliar la visión espiritual para mejorar el medioambiente y para la creación de sociedades y gobiernos más compasivos.", "Los constructores. Trabajan para acabar con la tiranía y establecer nuevos gobiernos, estructuras, normativas y tradiciones.", "capricornio.jpg");
const acuario = new signo("11", "Acuario", "20 de  enero - 18 de febrero", "regido por Saturno y Urano, planetas de la responsabilidad y la libertad", "Signo de aire", "excentrico, impredecible y humanitario. Genios locos incomprendidos en búsqueda de innovar y cambiar la sociedad", "Se muestran como almas excéntricas, rebeldes y emocionantes que divierten con su originalidad. Tienen un estilo único y un comportamiento único, impresionando al resto con su inconformismo. Pueden crear grupos de amigos creativos e interesantes.", "Aquellos nacidos en este tránsito son almas revolucionarias que dan grandes pasos para el avance de la humanidad. Reformadores y rebeldes, crean inventos ingeniosos y tienen ideas revolucionarias en cuestiones de tecnología, ciencia o viajes espaciales.", "Estas generaciones propagan su visión humanitaria para poder ayudar al prójimo. Les interesa establecer comunidades espirituales, compasivas e inclusivas, así como introducir tecnología que una a las personas.", "Los futuristas. Son humanitarios, con importantes valores. Son promotores de la democracia y trabajan para ayudar a los más débiles.", "acuario.jpg");
const piscis = new signo("12", "Piscis", "19 de febrero - 20 de marzo", "regido por Neptuno, planeta de la espiritualidad", "Signo de agua", "tierno, soñador y místico. Enamoradizos, capaces de empatizar con cualquier situación y persona, buscan el amor incondicional", "Tienen una especial habilidad para influir en su entorno. Entran al mundo a partir del idealismo y la sensibilidad. A menudo son creativos y espirituales disfrutando de las artes muy imaginativas: la fotografía, el cine, la danza, la música y el teatro.", "Los nacidos en este tránsito son almas místicas y revolucionarias en los ámbitos del cine, la fotografía, la espiritualidad y la música. Poco prácticos, se pueden perder en los sueños y en el idealismo. Plantan semillas espirituales importantes, que además de innovar, unen.", "Estas generaciones son profundamente espirituales. Luchan por eliminar las barreras entre las personas, integrándolas de forma compasiva. Al tener habilidades psíquicas y una comprensión innata de la unidad y la interconexión, podrían elevar nuestra sociedad para que cumpla con sus ideales más exaltados.", "Los artistas espirituales. Centran su atención en la espiritualidad, el arte y la cultura.", "piscis.jpg");

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

        let uranoUsuario = urano(usuario);
        let plutonUsuario = pluton(usuario);
        let neptunoUsuario = neptuno(usuario);
        const div = document.createElement('div');
        div.innerHTML += `
                        <div class='usuarios data-anijs="if: scroll, on: window, do: fadeInUpBig"'>
                        <div class='usuarios__div data-anijs="if: scroll, on: window, do: fadeInUpBig"'>
                        <img class= 'cartaAstral'src="./images/cartaAstral.png">
                            <h3 class='usuarios__textoNombre'>${nombreUsuario}</h3>
                            <h4 class='usuarios__texto'>Fecha de nacimiento: ${diaNacimientoUsuario} de ${mesNacimientoUsuario} de ${añoNacimientoUsuario}</h4>
                            <h5 class='usuarios__texto'>Hora de nacimiento: ${horaNacimientoUsuario} : ${minutosNacimientoUsuario}</h5>
                            <h6 class='usuarios__texto'>País de nacimiento: ${paisNacimientoUsuario}</h6>
                            </div>
                            <div class='astrologia'>
                            <p class='astrologia__frase' >Descubre las estrellas dentro de ti</p>
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
                            <div class='astrologia__signo'>
                            <img class= 'astrologia__imagen' src="${uranoUsuario.imagen}">
                            <h8 class='astrologia__titulos'>Urano: ${uranoUsuario.nombre} </h8>
                            <p class='astrologia__texto'>${uranoUsuario.urano}</p>
                            </div>
                            <div class='astrologia__signo'>
                            <img class= 'astrologia__imagen' src="${neptunoUsuario.imagen}">
                            <h8 class='astrologia__titulos'>Neptuno: ${neptunoUsuario.nombre} </h8>
                            <p class='astrologia__texto'>${neptunoUsuario.neptuno}</p>
                            </div>
                            <div class='astrologia__signo'>
                            <img class= 'astrologia__imagen' src="${plutonUsuario.imagen}">
                            <h8 class='astrologia__titulos'>Pluton: ${plutonUsuario.nombre} </h8>
                            <p class='astrologia__texto'>${plutonUsuario.pluton}</p>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        `
        usuariosNuevos.appendChild(div);
    })



    function signoAscendente(usuario) {
        let { diaNacimientoUsuario, mesNacimientoUsuario, horaNacimientoUsuario } = usuario;
        signoSolarUsuario = signoSolar(diaNacimientoUsuario, mesNacimientoUsuario);
        console.log(signoSolarUsuario == aries);
        console.log(horaNacimientoUsuario);
        let ascendente;

        if (horaNacimientoUsuario >= 8 && horaNacimientoUsuario < 10) {
            if (signoSolarUsuario == piscis) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 11];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 1]; }
        } else if (horaNacimientoUsuario >= 10 && horaNacimientoUsuario < 12) {
            if (signoSolarUsuario == piscis || signoSolarUsuario == acuario) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 10];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 2]; }
        } else if (horaNacimientoUsuario >= 12 && horaNacimientoUsuario < 14) {
            if (signoSolarUsuario == piscis || signoSolarUsuario == acuario
                || signoSolarUsuario == capricornio) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 9];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 3]; }
        } else if (horaNacimientoUsuario >= 14 && horaNacimientoUsuario < 16) {
            if (signoSolarUsuario == piscis || signoSolarUsuario == acuario
                || signoSolarUsuario == capricornio || signoSolarUsuario == sagitario) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 8];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 4]; }
        } else if (horaNacimientoUsuario >= 16 && horaNacimientoUsuario < 18) {
            if (signoSolarUsuario == piscis || signoSolarUsuario == acuario
                || signoSolarUsuario == capricornio || signoSolarUsuario == sagitario
                || signoSolarUsuario == escorpio) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 7];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 5]; }
        } else if (horaNacimientoUsuario >= 18 && horaNacimientoUsuario < 20) {
            if (signoSolarUsuario == piscis || signoSolarUsuario == acuario
                || signoSolarUsuario == capricornio || signoSolarUsuario == sagitario
                || signoSolarUsuario == escorpio || signoSolarUsuario == libra) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 6];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 6]; }
        } else if (horaNacimientoUsuario >= 20 && horaNacimientoUsuario < 22) {
            if (signoSolarUsuario == piscis || signoSolarUsuario == acuario
                || signoSolarUsuario == capricornio || signoSolarUsuario == sagitario
                || signoSolarUsuario == escorpio || signoSolarUsuario == libra
                || signoSolarUsuario == virgo) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 5];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 7]; }
        } else if (horaNacimientoUsuario >= 22 && horaNacimientoUsuario < 24) {
            if (signoSolarUsuario == piscis || signoSolarUsuario == acuario
                || signoSolarUsuario == capricornio || signoSolarUsuario == sagitario
                || signoSolarUsuario == escorpio || signoSolarUsuario == libra
                || signoSolarUsuario == virgo || signoSolarUsuario == leo) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 4];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 8]; }
        } else if (horaNacimientoUsuario >= 24 && horaNacimientoUsuario < 2) {
            if (signoSolarUsuario == piscis || signoSolarUsuario == acuario
                || signoSolarUsuario == capricornio || signoSolarUsuario == sagitario
                || signoSolarUsuario == escorpio || signoSolarUsuario == libra
                || signoSolarUsuario == virgo || signoSolarUsuario == leo
                || signoSolarUsuario == cancer) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 3];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 9]; }
        } else if (horaNacimientoUsuario >= 2 && horaNacimientoUsuario < 4) {
            if (signoSolarUsuario == piscis || signoSolarUsuario == acuario
                || signoSolarUsuario == capricornio || signoSolarUsuario == sagitario
                || signoSolarUsuario == escorpio || signoSolarUsuario == libra
                || signoSolarUsuario == virgo || signoSolarUsuario == leo
                || signoSolarUsuario == cancer || signoSolarUsuario == geminis) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 2];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 10]; }
        } else if (horaNacimientoUsuario >= 4 && horaNacimientoUsuario < 6) {
            if (signoSolarUsuario == piscis || signoSolarUsuario == acuario
                || signoSolarUsuario == capricornio || signoSolarUsuario == sagitario
                || signoSolarUsuario == escorpio || signoSolarUsuario == libra
                || signoSolarUsuario == virgo || signoSolarUsuario == leo
                || signoSolarUsuario == cancer || signoSolarUsuario == geminis
                || signoSolarUsuario == tauro) {
                ascendente = signos[signos.indexOf(signoSolarUsuario) - 1];
            } else { ascendente = signos[signos.indexOf(signoSolarUsuario) + 11]; }
        } else if (horaNacimientoUsuario >= 6 && horaNacimientoUsuario < 8) {
            ascendente = signoSolarUsuario;
        }
        return ascendente
    }

}

function urano(usuario) {
    let { añoNacimientoUsuario } = usuario;
    let urano
    if (añoNacimientoUsuario >= 1928 && añoNacimientoUsuario < 1935
        || añoNacimientoUsuario >= 2010 && añoNacimientoUsuario < 2019) {
        return urano = aries
    } else if (añoNacimientoUsuario >= 1935 && añoNacimientoUsuario < 1942
        || añoNacimientoUsuario >= 2019 && añoNacimientoUsuario < 2025) {
        return urano = tauro
    } else if (añoNacimientoUsuario >= 1942 && añoNacimientoUsuario < 1949
        || añoNacimientoUsuario >= 2025 && añoNacimientoUsuario < 2033) {
        return urano = geminis
    } else if (añoNacimientoUsuario >= 1949 && añoNacimientoUsuario < 1956
        || añoNacimientoUsuario >= 2033 && añoNacimientoUsuario < 2039) {
        return urano = cancer
    } else if (añoNacimientoUsuario >= 1956 && añoNacimientoUsuario < 1961
        || añoNacimientoUsuario >= 2039 && añoNacimientoUsuario < 2046) {
        return urano = leo
    } else if (añoNacimientoUsuario >= 1961 && añoNacimientoUsuario < 1968
        || añoNacimientoUsuario >= 2046 && añoNacimientoUsuario < 2053) {
        return urano = virgo
    } else if (añoNacimientoUsuario >= 1968 && añoNacimientoUsuario < 1975
        || añoNacimientoUsuario >= 2053 && añoNacimientoUsuario < 2059) {
        return urano = libra
    } else if (añoNacimientoUsuario >= 1975 && añoNacimientoUsuario < 1981
        || añoNacimientoUsuario >= 2059 && añoNacimientoUsuario < 2066) {
        return urano = escorpio
    } else if (añoNacimientoUsuario >= 1981 && añoNacimientoUsuario < 1988
        || añoNacimientoUsuario >= 2066 && añoNacimientoUsuario < 2072) {
        return urano = sagitario
    } else if (añoNacimientoUsuario >= 1988 && añoNacimientoUsuario < 1996
        || añoNacimientoUsuario >= 2072 && añoNacimientoUsuario < 2079) {
        return urano = capricornio
    } else if (añoNacimientoUsuario >= 1912 && añoNacimientoUsuario < 1920
        || añoNacimientoUsuario >= 1996 && añoNacimientoUsuario < 2003) {
        return urano = acuario
    } else if (añoNacimientoUsuario >= 1920 && añoNacimientoUsuario < 1928
        || añoNacimientoUsuario >= 2003 && añoNacimientoUsuario < 2010) {
        return urano = piscis
    }
    return urano
}

function neptuno(usuario) {
    let { añoNacimientoUsuario } = usuario;
    let neptuno
    if (añoNacimientoUsuario >= 1928 && añoNacimientoUsuario < 1942) {
        return neptuno = virgo
    } else if (añoNacimientoUsuario >= 1942 && añoNacimientoUsuario < 1956) {
        return neptuno = libra
    } else if (añoNacimientoUsuario >= 1956 && añoNacimientoUsuario < 1970) {
        return neptuno = escorpio
    } else if (añoNacimientoUsuario >= 1970 && añoNacimientoUsuario < 1984) {
        return neptuno = sagitario
    } else if (añoNacimientoUsuario >= 1984 && añoNacimientoUsuario < 1998) {
        return neptuno = capricornio
    } else if (añoNacimientoUsuario >= 1998 && añoNacimientoUsuario < 2012) {
        return neptuno = acuario
    } else if (añoNacimientoUsuario >= 2012 && añoNacimientoUsuario < 2026) {
        return neptuno = piscis
    }
    return neptuno
}

function pluton(usuario) {
    let { añoNacimientoUsuario } = usuario;
    let pluton
    if (añoNacimientoUsuario >= 1914 && añoNacimientoUsuario < 1939) {
        return pluton = cancer
    } else if (añoNacimientoUsuario >= 1937 && añoNacimientoUsuario < 1958) {
        return pluton = leo
    } else if (añoNacimientoUsuario >= 1956 && añoNacimientoUsuario < 1972) {
        return pluton = virgo
    } else if (añoNacimientoUsuario >= 1972 && añoNacimientoUsuario < 1984) {
        return pluton = libra
    } else if (añoNacimientoUsuario >= 1985 && añoNacimientoUsuario < 1995) {
        return pluton = escorpio
    } else if (añoNacimientoUsuario >= 1995 && añoNacimientoUsuario < 2008) {
        return pluton = sagitario
    } else if (añoNacimientoUsuario >= 2008 && añoNacimientoUsuario < 2024) {
        return pluton = capricornio
    } else if (añoNacimientoUsuario >= 2024 && añoNacimientoUsuario < 2044) {
        return pluton = acuario
    } else if (añoNacimientoUsuario >= 2044 && añoNacimientoUsuario < 2068) {
        return pluton = piscis
    }
    return pluton
}

