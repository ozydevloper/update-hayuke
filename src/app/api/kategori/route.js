import { NextResponse } from "next/server";
import { KategoriServices } from "./_services";
export async function GET() {
  try {
    const res = await KategoriServices.getAll();
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.error(err);
  }
}
