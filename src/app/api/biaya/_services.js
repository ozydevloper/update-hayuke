import { prisma } from "@/db/db";

export const BiayaServices = {
  async getAll() {
    return await prisma.biaya.findMany();
  },
};
