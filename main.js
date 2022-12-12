// let nombre; 


// if (edad <=17) {alert ("sos un niño")}
//if ((edad <=40) && (edad >=18)) {alert ("sos un joven")}
//if (edad >40) {alert ("trajiste tu bastón?")} //

//let i= parseInt (prompt("elegi un numero"));

//for  (i; i<10; i= i/2) {console.log(i);} 

/*let num1= parseInt (prompt ("Elegi un numero"));
let num2= parseInt (prompt ("Elegi otro numero"));
let operacion= prompt ("Elegi una operación");

switch (operacion) {case "+": alert (num1 + num2)
break;
case "-": alert (num1 - num2)
break;
case "x": alert (num1 - num2)
break;
case "/": alert (num1 - num2)
break;} */

/*let diaNacimiento = parseInt(prompt("Que dia naciste?"));
let mesNacimiento = prompt("De qué mes?").toLowerCase();*/

/*if ((diaNacimiento >= 21) && (mesNacimiento == `marzo`) || (diaNacimiento <= 21) && (mesNacimiento == `abril`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Aries al momento de tu nacimiento`); 
} else if ((diaNacimiento >= 22) && (mesNacimiento == `abril`) || (diaNacimiento <= 21) && (mesNacimiento == `mayo`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Tauro al momento de tu nacimiento`); 
} else if ((diaNacimiento >= 22) && (mesNacimiento == `mayo`) || (diaNacimiento <= 21) && (mesNacimiento == `junio`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Géminis al momento de tu nacimiento`); 
} else if ((diaNacimiento >= 22) && (mesNacimiento == `junio`) || (diaNacimiento <= 21) && (mesNacimiento == `agosto`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Cancer al momento de tu nacimiento`); 
} else if ((diaNacimiento >= 22) && (mesNacimiento == `agosto`) || (diaNacimiento <= 21) && (mesNacimiento == `septiembre`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Virgo al momento de tu nacimiento`); 
} else if ((diaNacimiento >= 22) && (mesNacimiento == `septiembre`) || (diaNacimiento <= 21) && (mesNacimiento == `octubre`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Libra al momento de tu nacimiento`); 
} else if ((diaNacimiento >= 22) && (mesNacimiento == `octubre`) || (diaNacimiento <= 21) && (mesNacimiento == `noviembre`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Escorpio al momento de tu nacimiento`); 
} else if ((diaNacimiento >= 22) && (mesNacimiento == `noviembre`) || (diaNacimiento <= 21) && (mesNacimiento == `diciembre`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Sagitario al momento de tu nacimiento`); 
} else if ((diaNacimiento >= 22) && (mesNacimiento == `diciembre`) || (diaNacimiento <= 21) && (mesNacimiento == `enero`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Capricornio al momento de tu nacimiento`); 
} else if ((diaNacimiento >= 22) && (mesNacimiento == `enero`) || (diaNacimiento <= 21) && (mesNacimiento == `febrero`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Acuario al momento de tu nacimiento`); 
} else if ((diaNacimiento >= 22) && (mesNacimiento == `febrero`) || (diaNacimiento <= 20) && (mesNacimiento == `marzo`)) { alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Piscis al momento de tu nacimiento`);
 }*/

function consultarFecha() {
    let nombre = prompt("Cómo es tu nombre?")
    let diaNacimiento = parseInt(prompt("Que dia naciste?"));
    let mesNacimiento = prompt("De qué mes?").toLowerCase();

    while (diaNacimiento == "ESC") { break }

    if ((diaNacimiento >= 21) && (mesNacimiento == "marzo") || (diaNacimiento <= 19) && (mesNacimiento == "abril")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Aries al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 20) && (mesNacimiento == "abril") || (diaNacimiento <= 20) && (mesNacimiento == "mayo")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Tauro al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 21) && (mesNacimiento == "mayo") || (diaNacimiento <= 20) && (mesNacimiento == "junio")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Géminis al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 21) && (mesNacimiento == "junio") || (diaNacimiento <= 22) && (mesNacimiento == "julio")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Cancer al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 23) && (mesNacimiento == "julio") || (diaNacimiento <= 22) && (mesNacimiento == "agosto")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Leo al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 23) && (mesNacimiento == "agosto") || (diaNacimiento <= 22) && (mesNacimiento == "septiembre")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Virgo al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 23) && (mesNacimiento == "septiembre") || (diaNacimiento <= 22) && (mesNacimiento == "octubre")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Libra al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 23) && (mesNacimiento == "octubre") || (diaNacimiento <= 21) && (mesNacimiento == "noviembre")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Escorpio al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == "noviembre") || (diaNacimiento <= 21) && (mesNacimiento == "diciembre")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Sagitario al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == "diciembre") || (diaNacimiento <= 19) && (mesNacimiento == "enero")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Capricornio al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 20) && (mesNacimiento == "enero") || (diaNacimiento <= 18) && (mesNacimiento == "febrero")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Acuario al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 19) && (mesNacimiento == "febrero") || (diaNacimiento <= 20) && (mesNacimiento == "marzo")) {
        alert(`Hola ${nombre} si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Piscis al momento de tu nacimiento`);
    }

    let fechaNacimiento = (diaNacimiento + "de" + mesNacimiento);
    return fechaNacimiento
}

consultarFecha()

class signo {
    constructor(orden, nombre, fechas, regente, elemento, descripcion) {
        this.orden = orden;
        this.nombre = nombre;
        this.fechas = fechas;
        this.regente = regente;
        this.elemento = elemento;
        this.descripcion = descripcion;
    }
}

/*En esta clase creo la función para crear los signos que los voy a usar muchas veces en el desarrollo*/

const aries = new signo("1", "Aries", "21 de marzo - 19 de abril", "Regido por Marte, el planeta de la sexualidad y la fuerza", "Signo de fuego", "Valiente y testarudo. Asume riesgos, es pionero, entusiasta, independiente y directo");
const tauro = new signo("2", "Tauro", "20 de abril - 20 de mayo", "Regido por Venus, el planeta del amor y la belleza", "Signo de tierra", "Estable, paciente y resolutivo. Elegante, disfruta de los placeres de la vida, comer, dormir y el sexo");
const geminis = new signo("3", "Géminis", "21 de mayo - 20 de junio", "Regido por Mercurio, el planeta de la comunicación y el intelecto", "Signo de aire", "Comunicativo, intelectual e travieso. Necesita expresarse a través del habla, cambia de opinión rápidamente, abre posibiidades, amante de los viajes cortos");
const cancer = new signo("4", "Cancer", "21 de junio - 22 de julio", "Regido por la Luna, que rige las emociones", "Signo de agua", "Cuidador, temperamental y maternal. Cuida de los suyos, necesita sentirse seguro y en casa, son muy empáticos, cuando se sienten atacados sacan sus pinzas");
const leo = new signo("5", "Leo", "23 de julio - 22 de agosto", "Regido por el Sol, que rige el ego y la expresión de uno mismo", "Signo de fuego", "Cercano, leal, orgulloso y teatral. Le gusta impresionar, diferenciarse y mostrar el camino");
const virgo = new signo("6", "Virgo", "23 de agosto - 22 de septiembre", "Regido por Mercurio, el planeta de la comunicación y el intelecto", "Signo de tierra", "Organizado, lógico y servicial. Trabajador, perfeccionista y humilde que se pone al servicio de los demás");
const libra = new signo("7", "Libra", "23 de septiembre - 22 de octubre", "Regido por Venus, el planeta del amor y la belleza", "Signo de aire", "Justo, indeciso y refinado. Diplomático y romántico que busca y aporta belleza a todo lo que hace");
const escorpio = new signo("8", "Escorpio", "23 de octubre - 21 de noviembre", "Regido por Marte y Plutón, planetas de la sexualidad y el poder", "Signo de agua", "Misterioso, magnético e intenso. Busca transformar, no teme hablar de los temas ocultos y criticar lo que muchos no se atreven");
const sagitario = new signo("9", "Sagitario", "22 de noviembre - 21 de diciembre", "Regido por Júpiter, planeta de la suerte y la expansión", "Signo de fuego", "Aventurero, de mentalidad abierta y sincero. Busca con fuerza la verdad, estudioso, divertido y amante de los viajes largos");
const capricornio = new signo("10", "Capricornio", "22 de diciembre - 19 de enero", "Regido por Saturno, planeta de la responsabilidad y la estructura", "Signo de tierra", "Disciplinado, perseverante y tradicional. Ambiciosos, que buscan lograr sus objetivos a través del trabajo duro, siempre lo logran");
const acuario = new signo("11", "Acuario", "20 de  enero - 18 de febrero", "Regido por Saturno y Urano, planetas de la responsabilidad y la libertad", "Signo de aire", "Excentrico, impredecible y humanitario. Genios locos incomprendidos en búsqueda de innovar y cambiar la sociedad");
const piscis = new signo("12", "Piscis", "19 de febrero - 20 de marzo", "Regido por Neptuno, planeta de la espiritualidad", "Signo de agua", "Tierno, soñador y místico. Enamoradizos, capaces de empatizar con cualquier situación y persona, buscan el amor incondicional");

const signos = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, piscis];

/*Creo este array que lo voy a usar para los signos solares, ascendente, luna y planetas*/

const filtrarFuego = signos.filter(signo => signo.elemento == "Signo de fuego")
const filtrarTierra = signos.filter(signo => signo.elemento == "Signo de tierra")
const filtrarAire = signos.filter(signo => signo.elemento == "Signo de aire")
const filtrarAgua = signos.filter(signo => signo.elemento == "Signo de agua")

console.log(filtrarFuego)

/*Acá puedo fitrar y crear un nuevo array con los signos que contengan x elemento*/

let signoUsuario = prompt("Cual es tu signo?");

const busquedaSigno = signos.find(signo => signo.nombre == signoUsuario);

console.log(busquedaSigno)

/*El signo se tiene que escribir con la primera letra en mayúscula en el prompt, al usar el .toLowerCase
en el prompt y en el this.name solamente me muestra el primer objeto, escriba el nombre del signo que escriba*/



