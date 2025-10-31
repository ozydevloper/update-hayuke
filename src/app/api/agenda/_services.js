import { prisma } from "@/db/db";

export const AgendaServices = {
  async getAll() {
    return await prisma.agenda.findMany();
  },
};
