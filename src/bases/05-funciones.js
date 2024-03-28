const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar("Goku"))

console.log(saludar2("Vegeta"));

console.log(saludar3("Picoro"));

console.log(saludar4())


const getUser = () => (
   {
        uid: "ABC123",
        usermane: "el_api1502"
    })

const user = getUser();
console.log(user);

// Tarea

const getUsuarioActivo = (nombre) => ({
        uid: "ABC123",
        usermane: nombre
    });


const usuarioActivo = getUsuarioActivo("Gonzalo");
console.log(usuarioActivo);