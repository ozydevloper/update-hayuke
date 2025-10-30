import { NextResponse } from "next/server";
import { KotaServices } from "./_services";
export async function GET() {
  try {
    const res = await KotaServices.getAll();
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.error(err);
  }
}
