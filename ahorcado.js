var N1 = localStorage.getItem("nombre1")
var P1 = 0
var N2 = localStorage.getItem("nombre2")
var P2 = 0
document.getElementById("Pj1").innerHTML = "Puntos de " + N1 + " = " + P1
document.getElementById("Pj2").innerHTML = "Puntos de " + N2 + " = " + P2
var TurnoP = N1
var TurnoR = N2
document.getElementById("TP").innerHTML = "Turno de " + TurnoP + " para preguntar"
function Esconder() {
    Palabra = document.getElementById("Palabra").value
    var Tamaño = Palabra.length
    var V = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú"]
    var PalabraS = Palabra
    for (var v = 0; v < V.length; v++) {
        PalabraS = PalabraS.replaceAll(V[v], "_")
    }
    console.log(PalabraS)
    document.getElementById("palabra_secreta").innerHTML = PalabraS
    document.getElementById("TR").innerHTML = "Turno de " + TurnoR + " para responder"
    document.getElementById("Palabra").value = ""
    document.getElementById("?").style.visibility = "hidden"
    document.getElementById("Respuesta").style.visibility = "visible"
}
function Comprobar() {
    respuesta = document.getElementById("respuestaI").value
    if (respuesta.toLowerCase() == Palabra.toLowerCase()) {
        if (TurnoR == N2) {
            console.log("Obtuviste 1 punto")
            P2 = P2 + 1
        } else {
            console.log("Obtuviste 1 punto")
            P1 = P1 + 1
        }
        document.getElementById("Pj1").innerHTML = "Puntos de " + N1 + " = " + P1
        document.getElementById("Pj2").innerHTML = "Puntos de " + N2 + " = " + P2
    }
    document.getElementById("respuestaI").value=""
    document.getElementById("Respuesta").style.visibility = "hidden"
    document.getElementById("?").style.visibility = "visible"
    if(TurnoR == N1){
        TurnoR = N2
        TurnoP = N1
    }else{
        TurnoR = N1
        TurnoP = N2
    }
    document.getElementById("TP").innerHTML = "Turno de " + TurnoP + " para preguntar"
}