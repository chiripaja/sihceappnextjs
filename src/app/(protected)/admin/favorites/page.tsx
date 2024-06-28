import { PokemonGrid } from "../pokemon/components/PokemonGrid";


export default async function page() {
  
  
  return (
    <>
    <span className="text-5xl my-2">Pokemons Favoritos</span>
    <small className="text-blue-500">estatico</small>
  <PokemonGrid pokemons={[]}></PokemonGrid>
   
    </>
  )
}
