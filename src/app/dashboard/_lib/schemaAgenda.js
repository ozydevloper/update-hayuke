import z from "zod";

export const AgendaZodSchema = z.object({
  judul: z.string().nonempty({ error: "Judul harus diisi!" }),
  deskripsi: z.string().nonempty({ error: "Deskripsi harus diisi!" }),
  waktu: z.string().nonempty({ error: "Waktu harus diisi!" }),
  tanggal: z.string().nonempty({ error: "Tanggal harus diisi!" }),
  pembicara: z
    .array(z.string().nonempty({ error: "Pembicara harus diisi!" }))
    .nonempty({ error: "Pembicara minimal satu, '-' untuk default!" }),
  penyelenggara: z
    .array(z.string().nonempty({ error: "Penyelenggara harus diisi!" }))
    .nonempty({ error: "Penyelenggara minimal satu, '-' untuk default!" }),
  kategori: z.string().nonempty({ error: "Kategori harus diisi!" }),
  topik: z.string().nonempty({ error: "Topik harus diisi!" }),
  kalangan: z.string().nonempty({ error: "Kalangan harus diisi!" }),
  biaya: z.string().nonempty({ error: "Biaya harus diisi!" }),
  pelaksanaan: z
    .array(
      z
        .string()
        .nonempty({ error: "Via Pelaksaan harus diisi, '-' untuk default!" })
    )
    .nonempty({ error: "Pelaksaan harus diisi!" }),
});
