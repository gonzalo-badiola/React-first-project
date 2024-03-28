const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        Zip: 30000,
        lat: 14.454,
        lng: 34.343
    }

}



const persona2 = {...persona};
persona2.nombre = "Peter"

console.log( persona);

console.log(persona2)