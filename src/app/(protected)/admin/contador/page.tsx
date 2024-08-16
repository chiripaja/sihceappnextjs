'use client'
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne } from "@/store/counter/counterSlice";
import { useState } from "react";

export default function ContadorPage() {
  const [contador, setContador] = useState(5)
 const count=useAppSelector(state=>state.counter.count)
 const dispatch=useAppDispatch();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Contador</span>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button 
        className="flex w-14 items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600"
        onClick={()=>dispatch(substractOne())}
        >
          -1
        </button>
        <button className="flex w-14 items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600"
        onClick={()=>dispatch(addOne())}>
          +1
        </button>
      </div>
    </div>
  );
}