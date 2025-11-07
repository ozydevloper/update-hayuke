import { NextResponse } from "next/server";
import { BiayaServices } from "./_services";
import { verifySignature } from "@/lib/api/signature";

export async function GET(req) {

  const signature = req.headers.get("sig");
  if (!signature || !verifySignature(signature)) {
    return NextResponse.json({ error: "nyari apa nih" }, { status: 401 });
  }  
  try {
    const res = await BiayaServices.getAll();
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.error(err);
  }
}
export async function POST(req = NextRequest) {

  const signature = req.headers.get("sig");
  if (!signature || !verifySignature(signature)) {
    return NextResponse.json({ error: "nyari apa nih" }, { status: 401 });
  }

  try {
    const body = await req.json();
    await BiayaServices.createBiaya(body);
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.json(err);
  }
}
export async function DELETE(req = NextRequest) {
  const signature = req.headers.get("sig");
  if (!signature || !verifySignature(signature)) {
    return NextResponse.json({ error: "nyari apa nih" }, { status: 401 });
  }


  try {
    const body = await req.json();
    await BiayaServices.deleteBiaya(body);
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.error(err);
  }
}

export async function PUT(req = NextRequest) {
  const signature = req.headers.get("sig");
  if (!signature || !verifySignature(signature)) {
    return NextResponse.json({ error: "nyari apa nih" }, { status: 401 });
  }
  try {
    const body = await req.json();
    await BiayaServices.updateBiaya(body);
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.error(err);
  }
}
