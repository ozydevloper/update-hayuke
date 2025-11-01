import { prisma } from "@/db/db";

export const KotaServices = {
  async getAll() {
    return await prisma.kota.findMany();
  },
  async createKota(req) {
    return await prisma.kota.create({
      data: {
        name: req.name,
      },
    });
  },
  async deleteKota(req) {
    return await prisma.kota.delete({
      where: {
        id: req.id,
      },
    });
  },
  async updateKota(req) {
    return await prisma.kota.update({
      where: {
        id: req.id,
      },
      data: {
        name: req.name,
      },
    });
  },
};
