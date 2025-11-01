import { prisma } from "@/db/db";

export const TopikServices = {
  async getAll() {
    return await prisma.topik.findMany();
  },
  async createTopik(req) {
    return await prisma.topik.create({
      data: {
        name: req.name,
      },
    });
  },
  async deleteTopik(req) {
    return await prisma.topik.delete({
      where: {
        id: req.id,
      },
    });
  },
  async updateTopik(req) {
    return await prisma.topik.update({
      where: {
        id: req.id,
      },
      data: {
        name: req.name,
      },
    });
  },
};
