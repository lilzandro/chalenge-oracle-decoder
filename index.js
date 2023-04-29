window.onload = () => {
  // Objeto que contiene los reemplazos de las letras clave
  const reemplazos = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };

  // Array de las letras clave
  const letrasCLave = ["ai", "enter", "imes", "ober", "ufat"];

  // Expresión regular para verificar si hay caracteres especiales, letras mayúsculas o números en el texto
  const verificar = /[\dA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]/;

  // Función para desencriptar el texto
  function desencriptando(texto, reemplazos) {
    // Verifica si hay caracteres especiales, letras mayúsculas o números en el texto. Si es así, muestra un mensaje de error.
    if (verificar.test(texto)) {
      document.getElementById("texto").style.boxShadow =
        "0px 3px 10px rgba(180, 0, 0, 0.753) inset";
      document.getElementById("texto").style.transition = "0.1s";
      document.getElementById("error").style.display = "flex";
      document.getElementById("error").scrollIntoView({ behavior: "smooth" });
      document.getElementById("resultado").style.display = "none";
      document.getElementById("rompecabezas").style.display = "block";
      document.getElementById("texto1").style.display = "block";
      document.getElementById("botonCopiar").style.display = "none";
      return;
    }

    document.getElementById("error").style.display = "none";
    document.getElementById("texto").style.boxShadow =
      "0px 1px 10px rgba(0, 0, 0, 0.3) inset";

    // Reemplaza cada letra clave en el texto con su correspondiente letra del objeto reemplazos
    const textoFinal = texto.replaceAll(
      /ai|enter|imes|ober|ufat/g,
      (match) => reemplazos[match]
    );

    // Si el texto ha sido desencriptado correctamente, muestra el resultado en el elemento HTML correspondiente y oculta el resto de elementos innecesarios
    if (textoFinal) {
      document.getElementById("rompecabezas").style.display = "none";
      document.getElementById("texto1").style.display = "none";
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = textoFinal;
      resultado.style.display = "block";
      document.getElementById("botonCopiar").style.display = "block";
      resultado.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  // Función para encriptar el texto, reemplazando cada vocal con su correspondiente letra clave
  function encriptandoTexto(texto, letrasClave) {
    // Verifica si hay caracteres especiales, letras mayúsculas o números en el texto. Si es así, muestra un mensaje de error.
    if (verificar.test(texto)) {
      document.getElementById("texto").style.boxShadow =
        "0px 3px 10px rgba(180, 0, 0, 0.753) inset";
      document.getElementById("texto").style.transition = "0.1s";
      document.getElementById("error").style.display = "flex";
      document.getElementById("error").scrollIntoView({ behavior: "smooth" });
      document.getElementById("resultado").style.display = "none";
      document.getElementById("rompecabezas").style.display = "block";
      document.getElementById("texto1").style.display = "block";
      document.getElementById("botonCopiar").style.display = "none";
      console.log("error");
      return;
    }
    document.getElementById("error").style.display = "none";
    document.getElementById("texto").style.boxShadow =
      "0px 1px 10px rgba(0, 0, 0, 0.3) inset";
    // Crea un array para almacenar los datos encriptados

    const datos = [];
    // Recorre cada caracter del texto
    for (let i = 0; i < texto.length; i++) {
      // Si el caracter es una vocal, lo reemplaza con su correspondiente letra clave
      if (texto[i] === "a") {
        datos.push(letrasClave[0]);
      } else if (texto[i] === "e") {
        datos.push(letrasClave[1]);
      } else if (texto[i] === "i") {
        datos.push(letrasClave[2]);
      } else if (texto[i] === "o") {
        datos.push(letrasClave[3]);
      } else if (texto[i] === "u") {
        datos.push(letrasClave[4]);
      } else {
        // Si el caracter no es una vocal, lo deja igual
        datos.push(texto[i]);
      }
    }
    // Une los datos encriptados en una cadena de texto final
    const textoFinal = datos.join("");
    // Si el texto ha sido encriptado correctamente, muestra el resultado en el elemento HTML correspondiente y oculta el resto de elementos innecesarios
    if (textoFinal) {
      document.getElementById("rompecabezas").style.display = "none";
      document.getElementById("texto1").style.display = "none";
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = textoFinal;
      resultado.style.display = "block";
      document.getElementById("botonCopiar").style.display = "block";
      resultado.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  function eventos() {
    // obtener el botón "encriptar" del DOM
    const encriptar = document.getElementById("encriptar");
    // agregar un escuchador de eventos "click" al botón "encriptar"
    encriptar.addEventListener("click", (e) => {
      e.preventDefault(); // prevenir el comportamiento predeterminado del botón
      // obtener el texto a encriptar del input del DOM
      const datoTexto = document.getElementById("texto");
      const texto = datoTexto.value;
      datoTexto.value = ""; // limpiar el input
      // llamar a la función encriptandoTexto() y pasar el texto a encriptar y las letras clave
      encriptandoTexto(texto, letrasCLave);
    });

    // obtener el botón "desencriptar" del DOM
    const desencriptar = document.getElementById("desencriptar");
    // agregar un escuchador de eventos "click" al botón "desencriptar"
    desencriptar.addEventListener("click", (e) => {
      e.preventDefault(); // prevenir el comportamiento predeterminado del botón
      // obtener el texto a desencriptar del input del DOM
      const datoTexto = document.getElementById("texto");
      const texto = datoTexto.value;
      datoTexto.value = ""; // limpiar el input
      // llamar a la función desencriptando() y pasar el texto a desencriptar y los reemplazos
      desencriptando(texto, reemplazos);
    });
  }

  // llamar a la función eventos() para que agregue los escuchadores de eventos
  eventos();
};
// función copiarTexto(): copia el texto del elemento con ID "resultado" al portapapeles del usuario
function copiarTexto() {
  // obtener el texto a copiar del elemento con ID "resultado" del DOM
  const textoACopiar = document.getElementById("resultado").innerText;
  console.log(textoACopiar); // imprimir el texto a copiar en la consola
  // copiar el texto al portapapeles del usuario
  navigator.clipboard.writeText(textoACopiar);
}
