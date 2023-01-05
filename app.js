// Funcion de encriptar
function encriptar() {
  var texto = document.querySelector("#input-texto").value;
  var textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector(".text-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

// Funcion de desencriptar
function desencriptar() {
  var texto = document.querySelector("#input-texto").value;
  var textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.querySelector(".text-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
}

var boton1 = document.querySelector("#btn-desencriptar");
boton1.onclick = desencriptar;

// Funcion de copiar
function copiarTexto() {
  var copyText = document.getElementById("msg");
  copyText.Select;
  navigator.clipboard.writeText(copyText.value);
}
