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
    let diaNacimiento = parseInt(prompt("Que dia naciste?"));
    let mesNacimiento = prompt("De qué mes?").toLowerCase();

    while (diaNacimiento == "ESC") { break }

    if ((diaNacimiento >= 21) && (mesNacimiento == `marzo`) || (diaNacimiento <= 21) && (mesNacimiento == `abril`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Aries al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == `abril`) || (diaNacimiento <= 21) && (mesNacimiento == `mayo`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Tauro al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == `mayo`) || (diaNacimiento <= 21) && (mesNacimiento == `junio`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Géminis al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == `junio`) || (diaNacimiento <= 21) && (mesNacimiento == `julio`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Cancer al momento de tu nacimiento`);
     } else if ((diaNacimiento >= 22) && (mesNacimiento == `julio`) || (diaNacimiento <= 21) && (mesNacimiento == `agosto`)) {
            alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Leo al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == `agosto`) || (diaNacimiento <= 21) && (mesNacimiento == `septiembre`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Virgo al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == `septiembre`) || (diaNacimiento <= 21) && (mesNacimiento == `octubre`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Libra al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == `octubre`) || (diaNacimiento <= 21) && (mesNacimiento == `noviembre`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Escorpio al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == `noviembre`) || (diaNacimiento <= 21) && (mesNacimiento == `diciembre`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Sagitario al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == `diciembre`) || (diaNacimiento <= 21) && (mesNacimiento == `enero`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Capricornio al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == `enero`) || (diaNacimiento <= 21) && (mesNacimiento == `febrero`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Acuario al momento de tu nacimiento`);
    } else if ((diaNacimiento >= 22) && (mesNacimiento == `febrero`) || (diaNacimiento <= 20) && (mesNacimiento == `marzo`)) {
        alert(`Si naciste el ${diaNacimiento} de ${mesNacimiento} el sol estaba transitando la constelacion de Piscis al momento de tu nacimiento`);
    }

    let fechaNacimiento = (diaNacimiento + "de" + mesNacimiento);
    return fechaNacimiento
}

consultarFecha()







