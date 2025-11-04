export const tanggalParse = (tanggalObjek) => {
  const tanggal = new Date(tanggalObjek);
  const options = {
    weekday: "long", // Nama hari lengkap (contoh: Rabu)
    year: "numeric", // Tahun lengkap (contoh: 2025)
    month: "long", // Nama bulan lengkap (contoh: November)
    day: "numeric", // Tanggal dalam angka (contoh: 5)
  };

  // Menggunakan toLocaleDateString() dengan lokal Indonesia (id-ID)
  return tanggal.toLocaleDateString("id-ID", options);
};
