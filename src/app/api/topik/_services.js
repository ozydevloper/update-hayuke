import { prisma } from "@/db/db";

export const TopikServices = {
  async getAll() {
    return await prisma.topik.findMany();
  },
};
