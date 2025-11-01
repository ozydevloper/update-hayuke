import { prisma } from "@/db/db";

export const BiayaServices = {
  async getAll() {
    return await prisma.biaya.findMany();
  },
  async createBiaya(req) {
    return await prisma.biaya.create({
      data: {
        name: req.name,
      },
    });
  },
  async deleteBiaya(req) {
    return await prisma.biaya.delete({
      where: {
        id: req.id,
      },
    });
  },
  async updateBiaya(req) {
    return await prisma.biaya.update({
      where: {
        id: req.id,
      },
      data: {
        name: req.name,
      },
    });
  },
};
