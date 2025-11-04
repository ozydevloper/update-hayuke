const { create } = require("zustand");

export const useModeFeed = create((set) => ({
  mode: ["home", "upcoming", "search"],
}));
