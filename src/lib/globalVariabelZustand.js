const { create } = require("zustand");

export const useModeFeed = create((set) => ({
  mode: ["home", "upcoming", "search"],
  stateMode: "home",
  onSearch: false,

  setStateMode: (state) => set({ stateMode: state }),
  setOnSearch: (state) => set({ onSearch: state }),
}));
