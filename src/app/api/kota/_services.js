import { prisma } from "@/db/db";

export const KotaServices = {
  async getAll() {
    return await prisma.kota.findMany();
  },
};
