// Desestructuracion o asignacion desestructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
    rango: "Soldado"
};

// const { nombre, edad, clave } = persona


// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ( {nombre, edad, clave, rango = "Capitan"} ) => {
    // console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        años: edad,
        latlng: { 
            lat: 2344222,
            lng: 23432425
        }
    }
};

const {nombreClave, años, latlng:{lat, lng}} = useContext(persona)

console.log(nombreClave, años);
console.log(lat, lng);