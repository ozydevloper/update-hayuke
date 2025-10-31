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
};
