import { prisma } from "@/db/db";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const AgendaServices = {
  async getAll() {
    return await prisma.agenda.findMany();
  },

  async createAgenda(data) {
    await prisma.agenda.create({
      data: {
        poster: data.poster,
        judul: data.judul,
        deskripsi: data.deskripsi,
        tanggal: data.tanggal,
        waktu: data.waktu,
        pembicara: data.pembicara,
        penyelenggara: data.penyelenggara,
        kategoriId: data.kategori,
        topikId: data.topik,
        kotaId: data.kota == "" ? null : data.kota,
        kalanganId: data.kalangan,
        biayaId: data.biaya,
        pelaksanaan: data.pelaksanaan,
      },
    });
  },
  async deleteAgenda(id) {
    return await prisma.agenda.delete({
      where: {
        id: id,
      },
    });
  },
  async editAgenda(editAgenda) {
    return await prisma.agenda.update({
      where: {
        id: editAgenda.id,
      },
      data: {
        judul: editAgenda.judul,
        deskripsi: editAgenda.deskripsi,
        tanggal: new Date(editAgenda.tanggal),
        waktu: editAgenda.waktu,
        pembicara: editAgenda.pembicara,
        penyelenggara: editAgenda.penyelenggara,
        pelaksanaan: editAgenda.pelaksanaan,
        kategoriId: editAgenda.kategori,
        topikId: editAgenda.topik,
        kotaId: editAgenda.kota == "" ? null : data.kota,
        kalanganId: editAgenda.kalangan,
        biayaId: editAgenda.biaya,
      },
    });
  },
};

export const AgendaImageRepository = {
  async DeleteByIdPublic(public_id) {
    console.log(public_id);
    return await cloudinary.uploader.destroy(public_id);
  },
  async UploadImage(poster) {
    const fileImage = poster;
    const bytes = await fileImage.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "agendaBlue/poster",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });
    return result;
  },
};
