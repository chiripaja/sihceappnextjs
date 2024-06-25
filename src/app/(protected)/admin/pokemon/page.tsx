'use client'
const getPokemons=async(limit=20,offset=0)=>{
  const data=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res=>res.json());
  
  const pokemons=data.results.map((pokemon:any)=>({
    name:pokemon.name,
    url:pokemon.url.split('/').at(-2),
  }))
  console.log(pokemons)
  return data;
}



export default async function page() {
  const pokemons=await getPokemons();
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          {JSON.stringify(pokemons)}
        </div>
      </div>
        
    </div>
  )
}
