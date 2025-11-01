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
  async deleteKalangan(req) {
    return await prisma.kalangan.delete({
      where: {
        id: req.id,
      },
    });
  },
  async updateKalangan(req) {
    return await prisma.kalangan.update({
      where: {
        id: req.id,
      },
      data: {
        name: req.name,
      },
    });
  },
};
