-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "dibuatTanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" TEXT NOT NULL,
    "poster" TEXT[],
    "judul" TEXT,
    "deskripsi" TEXT,
    "tanggal" TIMESTAMP(3),
    "waktu" TEXT,
    "pembicara" TEXT[],
    "penyelenggara" TEXT[],
    "biaya" TEXT,
    "pelaksanaan" TEXT[] DEFAULT ARRAY['offline', '-', '-']::TEXT[],
    "kategoriId" TEXT,
    "topikId" TEXT,
    "kotaId" TEXT,
    "kalanganId" TEXT,
    "dibuatTanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Kategori" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dibuatTanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Topik" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dibuatTanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Kota" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dibuatTanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Kalangan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dibuatTanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Agenda_id_key" ON "Agenda"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Kategori_id_key" ON "Kategori"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Kategori_name_key" ON "Kategori"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Topik_id_key" ON "Topik"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Topik_name_key" ON "Topik"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Kota_id_key" ON "Kota"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Kota_name_key" ON "Kota"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Kalangan_id_key" ON "Kalangan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Kalangan_name_key" ON "Kalangan"("name");

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "Kategori"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_topikId_fkey" FOREIGN KEY ("topikId") REFERENCES "Topik"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_kotaId_fkey" FOREIGN KEY ("kotaId") REFERENCES "Kota"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_kalanganId_fkey" FOREIGN KEY ("kalanganId") REFERENCES "Kalangan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
