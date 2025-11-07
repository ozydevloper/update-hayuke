import { NextRequest, NextResponse } from 'next/server'
 
export async function proxy(req = NextRequest ) {
    if (req.method == "GET")   {
        console.log(req)
    }
}