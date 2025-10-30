import { NextResponse } from "next/server";
import { KalanganServices } from "./_services";
export async function GET() {
  try {
    const res = await KalanganServices.getAll();
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.error(err);
  }
}
