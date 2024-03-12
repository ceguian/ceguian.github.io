
let textoCopia = document.getElementById("mensaje").textContent;

function encriptar() {
    let texto = document.getElementById("texto").value;

    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");



    if (document.getElementById("texto").value.length != 0) {


        document.getElementById("texto").value = textoEncriptado;
        document.getElementById("titulo-mensaje").textContent = "Mensaje Encriptado";
        document.getElementById("mensaje").textContent = textoEncriptado;
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("pez").style.display = "none";
        document.getElementById("parrafo").style.display = "none";
        document.getElementById("texto").value = "";
    }
    else {
        alert("Ingresa un mensaje a encriptar");
        document.getElementById("pez").style.display = "flex";
        document.getElementById("parrafo").style.display = "flex";
        document.getElementById("mensaje").textContent = textoEncriptado;
        document.getElementById("mensaje").style.display = "none";
    }
}

function desencriptar() {
    texto = document.getElementById("texto").value;

    let textoDesencriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (document.getElementById("texto").value.length != 0) {


        document.getElementById("texto").value = textoDesencriptado;
        document.getElementById("titulo-mensaje").textContent = "Mensaje Desencriptado";
        document.getElementById("mensaje").textContent = textoDesencriptado;
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("pez").style.display = "none";
        document.getElementById("parrafo").style.display = "none";
        document.getElementById("texto").value = "";
    }
    else {
        alert("Ingresa un mensaje a Desencriptar");
        document.getElementById("pez").style.display = "flex";
        document.getElementById("parrafo").style.display = "flex";
        document.getElementById("mensaje").textContent = "";
        document.getElementById("mensaje").style.display = "none";
    }
}

function copiar() {
    let copiarTexto = document.getElementById("mensaje");

    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiarTexto.value);
}

