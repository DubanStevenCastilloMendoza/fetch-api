let url=  "https://rickandmortyapi.com/api/character/2"

//consumir API
fetch(url)
.then((data) =>{
    data.json()
    .then((json)=>{
         console.log(json)
         alert(json.name)
     })
     .catch((error)=>{
         console.log(error)
     })
})
.catch((error)=>{
    console.log(error)
})


//pasar el response a json 

