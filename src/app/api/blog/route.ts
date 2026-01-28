import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    
    const res = await fetch("http://jsonplaceholder.typicode.com/posts/2");
    const data = await res.json();

    console.log("data:", data);
  return NextResponse.json(data);
}