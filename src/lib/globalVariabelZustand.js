const { create } = require("zustand");

export const useModeFeed = create((set) => ({
  mode: ["home", "upcoming", "search"],
  stateMode: "home",

  setStateMode: (state) => set({ stateMode: state }),
}));
