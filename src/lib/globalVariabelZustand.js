const { create } = require("zustand");

const useKategori = create((set) => ({
  kategori: [],

  setKategori: () => set((fetchKategori) => ({ kategori: fetchKategori })),
}));
