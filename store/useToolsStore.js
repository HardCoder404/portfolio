import { create } from "zustand";

const useToolsStore = create((set) => ({
  toolsOrder: [], 
  setToolsOrder: (newOrder) => set({ toolsOrder: newOrder }),
}));

export default useToolsStore;
