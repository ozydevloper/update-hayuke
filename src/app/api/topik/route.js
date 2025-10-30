import { NextResponse } from "next/server";
import { TopikServices } from "./_services";
export async function GET() {
  try {
    const res = await TopikServices.getAll();
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.error(err);
  }
}
