import { PokemonGrid } from './components/PokemonGrid';


const getPokemons = async (limit = 20, offset = 0) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map((pokemon: any) => ({
    name: pokemon.name,
    id: pokemon.url.split('/').at(-2),
  }))
  console.log(pokemons)
  //throw new Error("error");
  return pokemons;
}



export default async function page() {
  const pokemons = await getPokemons(25);
  console.log(pokemons)
  return (
    <>
      <span className="text-5xl my-2">Listado de Pokemons </span>
    <small className="text-blue-500">Estatico</small>
  
  <PokemonGrid pokemons={pokemons}></PokemonGrid>
   
    </>
  )
}
