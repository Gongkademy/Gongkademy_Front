import { LOGIN_KEY } from "@stores/member/constant";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useLoginStore = create(
  //TODO: isLogin관련 로직은 서버에서도 처리해줘야할거같음
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (isLogin) => set({ isLogin: isLogin }),
    }),
    {
      name: LOGIN_KEY,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
