import { request } from "http";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
    const res=await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    const data = await res.json()
    return NextResponse.json({
        method:'GET',
        data:data,
    });
}

export async function POST(request:Request) {
    console.log({method:request.method});
    return NextResponse.json({
        method:'POST',
        count:100,
    });
}