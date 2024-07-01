import { create } from "zustand";
const useCommonStore = create((set) => ({
  keyword: "",
  criteria: "",
  setKeyword: (word) => set({ keyword: word }),
  setCriteria: (condition) =>
    set({ criteria: condition }),
}));
export default useCommonStore;
