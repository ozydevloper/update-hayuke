/*
  Warnings:

  - You are about to drop the column `biaya` on the `Agenda` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Agenda" DROP COLUMN "biaya",
ADD COLUMN     "biayaId" TEXT;

-- CreateTable
CREATE TABLE "Biaya" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dibuatTanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Biaya_id_key" ON "Biaya"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Biaya_name_key" ON "Biaya"("name");

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_biayaId_fkey" FOREIGN KEY ("biayaId") REFERENCES "Biaya"("id") ON DELETE SET NULL ON UPDATE CASCADE;
