import { NextRequest, NextResponse } from "next/server";
import { AgendaImageRepository, AgendaServices } from "./_services";
import { verifySignature } from "@/lib/api/signature";
export async function GET(req) {
  const signature = req.headers.get("sig");
  if (!signature || !verifySignature(signature)) {
    return NextResponse.json({ error: "nyari apa nih" }, { status: 401 });
  }

  try {
    const res = await AgendaServices.getAll();

    return NextResponse.json(res);
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
    await AgendaImageRepository.DeleteByIdPublic(body.publicId);
    await AgendaServices.deleteAgenda(body.id);
    return NextResponse.json({ message: "Success" });
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
    const formData = await req.formData();

    const newAgenda = {};
    for (const [key, value] of formData.entries()) {
      if (
        key == "pembicara" ||
        key == "penyelenggara" ||
        key == "pelaksanaan"
      ) {
        newAgenda[key] = JSON.parse(value);
      } else {
        newAgenda[key] = value;
      }
    }

    const result = await AgendaImageRepository.UploadImage(newAgenda.poster);
    newAgenda.poster = [];
    newAgenda.poster.push(result.secure_url);
    newAgenda.poster.push(result.public_id);

    newAgenda.tanggal = new Date(newAgenda.tanggal);

    await AgendaServices.createAgenda(newAgenda);

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function PUT(req = NextRequest) {
  const signature = req.headers.get("sig");
  if (!signature || !verifySignature(signature)) {
    return NextResponse.json({ error: "nyari apa nih" }, { status: 401 });
  }

  try {
    const body = await req.json();
    await AgendaServices.editAgenda(body);

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.error(err);
  }
}
