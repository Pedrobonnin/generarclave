//Declaración de variables

var formulario = document.querySelector("#formulario");
var button = document.querySelector("#button");
var respuesta = document.querySelector("#respuesta");

// variables para expresiones regulares

// La clave tiene que tener 2 letras del nombre, 3 letras del apellido, el DNI completo y la fecha.

function getKey() {
  // Generación de clave
  var key = nombre.value.substring(0, 2);
  key +=  apellido.value.substring(0, 3);
  key += dni.value;
  key += fecha.value.substring(8);
  key += fecha.value.substring(3, 5);
  key += fecha.value.substring(0, 2);

  return key;
}

function validacion(evento) {
  evento.preventDefault();
  //Declaración de variables
  let nombre = document.querySelector("#nombre");
  let apellido= document.querySelector("#apellido");
  let dni = document.querySelector("#dni");
  let fecha = document.querySelector("#fecha");

  // variables para expresiones regulares
  let expRegnombre = /^([A-Z a-z]+[\s]*)+$/;
  let expRegapellido = /^([A-Z a-z]+[\s]*)+$/;
  let expRegdni = /^\d+$/;
  let expRegfecha = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;

  if (!nombre.value | !apellido.value | !dni.value | !fecha.value) {
    alert("Campos vacios!");
    return;
  } else {
    if (!expRegnombre.exec(nombre.value)) {
      alert("Nombre solo debe contener letras");
      nombre.focus();
      return;
    }
    if (!expRegapellido.exec(apellido.value)) {
      alert("El apellido solo debe tener letras.");
      apellido.focus();
      return;
    }
    if (!expRegdni.exec(dni.value)) {
      alert("El DNI debe ser solo numeros.");
      dni.focus();
      return;
    }

    if (!expRegfecha.exec(fecha.value)) {
      alert("Fecha de nacimiento deben ser sólo numeros");
      fecha.focus();
      return;
    }
  }

  let clave = getKey(evento);
  respuesta.innerHTML = "Tu clave es:" + clave.toUpperCase();

  alert("Enviando Formulario");
}

formulario.addEventListener("submit", validacion);