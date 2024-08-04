import { create } from "zustand";
import {
  createJSONStorage,
  persist,
} from "zustand/middleware";
const useCommonStore = create(
  persist(
    (set) => ({
      keyword: "",
      criteria: "",
      setKeyword: (word) =>
        set({ keyword: word }),
      setCriteria: (condition) =>
        set({ criteria: condition }),
    }),
    {
      name: "search-condition", // 스토리지에 저장될 key
      storage: createJSONStorage(
        () => localStorage
      ),
    }
  )
);
export default useCommonStore;
