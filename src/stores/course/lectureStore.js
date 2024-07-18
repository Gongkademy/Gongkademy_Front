import { LECUTRE_KEY } from "@pages/Service/Lecture/constants";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useLectureStore = create(
  persist(
    (set, get) => ({
      curLecture: {},
      setCurLecture: (lecture) => set(() => ({ curLecture: { ...lecture } })),
    }),
    {
      name: LECUTRE_KEY,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useLectureStore;
