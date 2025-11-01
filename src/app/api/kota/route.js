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

export async function POST(req = NextRequest) {
  try {
    const body = await req.json();
    await KotaServices.createKota(body);
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.json(err);
  }
}
