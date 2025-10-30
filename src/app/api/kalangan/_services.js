import { prisma } from "@/db/db";

export const KalanganServices = {
  async getAll() {
    return await prisma.kalangan.findMany();
  },
};
