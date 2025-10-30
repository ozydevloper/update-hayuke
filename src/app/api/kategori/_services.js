import { prisma } from "@/db/db";

export const KategoriServices = {
  async getAll() {
    return await prisma.kategori.findMany();
  },
};
