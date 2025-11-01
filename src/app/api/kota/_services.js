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
};
