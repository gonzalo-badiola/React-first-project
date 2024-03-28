const nombre = "Gonzalo";
const apellido = "Badiola"; 

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);


function getSaludo(nombre){
    return "Hola " + nombre
}

console.log(`este es un texto: ${getSaludo(nombre)}`)