'use client'
import { useState } from "react";

export default function ContadorPage() {
  const [contador, setContador] = useState(5)

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Contador</span>
      <span className="text-9xl">{contador}</span>
      <div className="flex">
        <button 
        className="flex w-14 items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600"
        onClick={()=>setContador(contador-1)}
        >
          -1
        </button>
        <button className="flex w-14 items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600"
        onClick={()=>setContador(contador+1)}>
          +1
        </button>
      </div>
    </div>
  );
}