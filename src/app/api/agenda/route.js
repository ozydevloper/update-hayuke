import { NextRequest, NextResponse } from "next/server";
import { AgendaServices } from "./_services";
export async function GET() {
  try {
    const res = await AgendaServices.getAll();

    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.error(err);
  }
}

export async function POST(req = NextRequest) {
  try {
    const formData = await req.formData();
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.error(err);
  }
}
