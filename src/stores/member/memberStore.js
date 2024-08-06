import { MEMBER_KEY } from "@stores/member/constant";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useMemberStore = create(
  persist(
    (set) => ({
      member: { memberId: "" },
      setMember: (memberId) =>
        set({
          member: { memberId: memberId },
        }),
    }),
    {
      name: MEMBER_KEY,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useMemberIdStore = useMemberStore((state) => state.member);
