
// const getImagenPromesa = () => {
//     const promesa = new Promise( (resolve, reject) =>{
//         resolve ("https:ldlsajdñsajdlsad.com")
//     })
//     return promesa;
// }


// getImagenPromesa().then(console.log);


// lo mismo simplificado
// const getImagenPromesa = () => 
// new Promise( resolve =>resolve ("https:ldlsajdñsajdlsad.com") )
    
// getImagenPromesa().then(console.log);



// lo mismo usando Async
const getImage = async() => {
    try{
        const apiKey = "sA74RxhP11Gd0qHFZlqxYEVp2d8K5MZd";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const {url} = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);

    }catch (error){
        //manjeo del error
        console.error(error);
    }

   
}

getImage();


// const apiKey = "sA74RxhP11Gd0qHFZlqxYEVp2d8K5MZd";

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
// .then(resp => resp.json())
// .then( ({data} ) => {
//     const {url} = data.images.original;
    
//     const img = document.createElement("img");
//     img.src = url;

//     document.body.append(img);
// })
// .catch(console.warn);