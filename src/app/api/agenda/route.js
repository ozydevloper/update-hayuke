import { NextRequest, NextResponse } from "next/server";
import { AgendaImageRepository, AgendaServices } from "./_services";
export async function GET() {
  try {
    const res = await AgendaServices.getAll();

    return NextResponse.json(res);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function DELETE(req = NextRequest) {
  try {
    const { id, publicId } = await req.json();
    await AgendaImageRepository.DeleteByIdPublic(publicId);
    await AgendaServices.deleteAgenda(id);
    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST(req = NextRequest) {
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
