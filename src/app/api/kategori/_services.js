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
  async deleteKategori(req) {
    return await prisma.kategori.delete({
      where: {
        id: req.id,
      },
    });
  },
  async updateKategori(req) {
    return await prisma.kategori.update({
      where: {
        id: req.id,
      },
      data: {
        name: req.name,
      },
    });
  },
};
