import heroes, {owners} from "./data/heroes";


console.log(owners)
// const getHeroeById = (id) => {
//     return heroes.find((heroe) => heroe.id === id)
// }


// Hice yo funciona
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)



 console.log( getHeroeById(2) );


 const getHeroesbyOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

 console.log(getHeroesbyOwner("DC"))