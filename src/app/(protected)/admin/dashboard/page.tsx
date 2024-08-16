'use client'
import { useAppSelector } from "@/store";

export default function DashboardPage() {
  const contador=useAppSelector(state=>state.counter.count)
  return (
    <div>
      <h1>Hello Dashboards</h1>
      <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Contador</span>
      <span className="text-9xl">{contador}</span>
      <div className="flex">
        
       
      </div>
    </div>
    </div>
  );
}