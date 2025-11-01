import { prisma } from "@/db/db";

export const KalanganServices = {
  async getAll() {
    return await prisma.kalangan.findMany();
  },
  async createKalangan(req) {
    return await prisma.kalangan.create({
      data: {
        name: req.name,
      },
    });
  },
};
