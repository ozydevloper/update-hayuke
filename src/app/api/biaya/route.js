import { NextResponse } from "next/server";
import { BiayaServices } from "./_services";
export async function GET() {
  try {
    const res = await BiayaServices.getAll();
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.error(err);
  }
}
