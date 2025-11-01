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
};
