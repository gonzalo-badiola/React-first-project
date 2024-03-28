

const personajes = ["Goku", "Vegeta", "Trunks"];

const [ , , p3 ] = personajes;

console.log( p3 );

const returnArreglo = () => {
    return ["ABC", 123];
}

const [letras, numeros] = returnArreglo();
console.log(letras, numeros);

// Tarea 
const useState = (valor) => {
    return [valor, () => {console.log("Hola Mundo")}];
};

const [nombre, setNombre] = useState("Goku");
console.log(nombre);
setNombre();

