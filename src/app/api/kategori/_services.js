import { prisma } from "@/db/db";

export const KategoriServices = {
  async getAll() {
    return await prisma.kategori.findMany();
  },
  async createKategori(req) {
    return await prisma.kategori.create({
      data: {
        name: req.name,
      },
    });
  },
};
