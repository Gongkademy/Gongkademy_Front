import { create } from "zustand";
//공지사항 세개 가져오는거 getNoticeList
//공지사항 들어가는거 getNoticeDetail
//공지사항 좋아요누르기 likeNotice
//공지사항 스크랩 scrapNotice
//좋아요 눌렀는지 확인 noticeLiked
//스크랩 했는지 확인 noticeScrapped
import {
  getNoticeList,
  getNoticeDetail,
  likeNotice,
  scrapNotice,
  noticeLiked,
  noticeScrapped,
  getNoticeListNonLogin,
  getNoticeDetailNonLogin,
} from "@apis/community/noticeApi";
const useNoticeStore = create((set, get) => ({
  notice: null,
  noticeList: [],
  likedNotices: [],
  scrappedNotices: [],

  //공지사항 목록 가져오기
  fetchNoticeList: async () => {
    try {
      const response = await getNoticeList();
      set({ noticeList: response.data });
    } catch (error) {
      console.error(
        "공지사항리스트 가져오기 실패 : ",
        error
      );
    }
  },
  //비로그인
  fetchNoticeListNonLogin: async () => {
    try {
      const response =
        await getNoticeListNonLogin();
      set({ noticeList: response.data });
    } catch (error) {
      console.error(
        "공지사항리스트 가져오기 실패 : ",
        error
      );
    }
  },
  //공지사항 상세보기
  fetchNoticeDetail: async (articleId) => {
    try {
      const response = await getNoticeDetail(
        articleId
      );
      set({ notice: response.data });
    } catch (error) {
      console.error(
        "공지사항 상세보기 실패 : ",
        error
      );
    }
  },
  fetchNoticeDetailNonLogin: async (
    articleId
  ) => {
    try {
      const response =
        await getNoticeDetailNonLogin(articleId);
      set({ notice: response.data });
    } catch (error) {
      console.error(
        "공지사항 상세보기 실패 : ",
        error
      );
    }
  },
  // 공지사항 좋아요
  likeNotice: async (articleId) => {
    try {
      await likeNotice(articleId);
      get().fetchNoticeLiked();
    } catch (error) {
      console.error("좋아요 실패! :", error);
    }
  },

  // 공지사항 스크랩
  scrapNotice: async (articleId) => {
    try {
      await scrapNotice(articleId);
      get().fetchNoticeScrapped();
    } catch (error) {
      console.error("스크랩 실패! :", error);
    }
  },

  // 좋아요 여부 확인
  fetchNoticeLiked: async () => {
    try {
      const response = await noticeLiked();
      set({ likedNotices: response.data });
    } catch (error) {
      console.error(
        "좋아요한 리스트 가져오기 실패! :",
        error
      );
    }
  },

  // 스크랩 여부 확인
  fetchNoticeScrapped: async () => {
    try {
      const response = await noticeScrapped();
      set({ scrappedNotices: response.data });
    } catch (error) {
      console.error(
        "스크랩한 리스트 가져오기 실패! :",
        error
      );
    }
  },
}));
export default useNoticeStore;
