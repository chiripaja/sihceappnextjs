import Image from "next/image";
import { PokemonCard } from "./PokemonCard";
export const PokemonGrid = ({pokemons}:any) => {
  return (
    <div className="flex flex-col">
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((data: any) => (
        <PokemonCard key={data.id} pokemon={data}></PokemonCard>
   
      ))}
    </div>
  </div>
  )
}
