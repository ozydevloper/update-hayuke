import { NextRequest, NextResponse } from "next/server";
import { KategoriServices } from "./_services";

export async function GET() {
  try {
    const res = await KategoriServices.getAll();
    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST(req = NextRequest) {
  try {
    const body = await req.json();
    await KategoriServices.createKategori(body);
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.error(err);
  }
}

export async function DELETE(req = NextRequest) {
  try {
    const body = await req.json();
    await KategoriServices.deleteKategori(body);
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.error(err);
  }
}

export async function PUT(req = NextRequest) {
  try {
    const body = await req.json();
    await KategoriServices.updateKategori(body);
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.error(err);
  }
}
