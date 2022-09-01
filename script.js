const textEntrada = document.querySelector("#inputEntrada");
const textSalida = document.querySelector("#inputSalida");
var botonEnc = document.querySelector("#encriptar");
var botonDesenc = document.querySelector("#desencriptar");
var botonCopiar = document.querySelector("#copiar");
/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`*/
function encriptar(){
    mensaje = textEntrada.value
    textEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");
    textSalida.value = textEncriptado;
    textEntrada.value="";
    document.getElementById("inputSalida").style.backgroundImage = "none";

}

function desencriptar(){
    mensaje = textEntrada.value
    textEncriptado = mensaje
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    textSalida.value = textEncriptado;
    textEntrada.value="";
    document.getElementById("inputSalida").style.backgroundImage = "none";
    

}

function copiar(){
    textSalida.select();
    navigator.clipboard.writeText(textSalida.value);
    Swal.fire({
        title: "Texto Copiado",
        icon: "success",
        with: "50%",
        timer: "1000",
        showConfirmButton: false

    })
    textSalida.value="";
}

