import { create } from "zustand";
import {
  getConcernList, //고민리스트
  getConcernDetail, //고민상세보기
  writeConcern, //고민작성
  updateConcern, //고민수정
  deleteConcern, //고민삭제
  concernLiked, //고민좋아요목록
  concernScrapped, //고민스크랩목록
  likeConcern, //고민좋아요
  scrapConcern, //고민스크랩
} from "@/apis/community/concernApi";
const useConcernStore = create((set) => ({
  concern: null,
  concernList: [],
  likedConcerns: [],
  scrappedConcerns: [],

  //고민 목록 가져오기
  fetchConcernList: async (
    keyword,
    criteria,
    pageNo
  ) => {
    try {
      const response = await getConcernList(
        keyword,
        criteria,
        pageNo
      );
      set({ concernList: response.data });
    } catch (e) {
      console.error(
        "고민 목록 가져오기 실패 : ",
        e
      );
    }
  },
  //고민 상세보기
  fetchConcernDetail: async (articleId) => {
    try {
      const response = await getConcernDetail(
        articleId
      );
      set({ concern: response.data });
    } catch (e) {
      console.error("고민 상세보기 실패: ", e);
    }
  },
  //고민글 작성
  writeConcern: async (article) => {
    await writeConcern(article).then(
      (response) => {
        console.log(response);
        return response.data;
      }
    );
  },
  //고민 수정
  updateConcern: async (articleId, article) => {
    await updateConcern(articleId, article);
  },
  //고민 삭제
  deleteConcern: async (articleId) => {
    await deleteConcern(articleId);
  },
  //좋아요 목록 가져오기
  fetchConcernLiked: async () => {
    try {
      const response = await concernLiked();
      set({ likedConcerns: response.data });
    } catch (e) {
      console.error(
        "좋아요한 리스트 가져오기 실패: ",
        e
      );
    }
  },
  //스크랩 목록 가져오기
  fetchConcernScrapped: async () => {
    try {
      const response = await concernScrapped();
      set({ scrappedConcerns: response.data });
    } catch (e) {
      console.error(
        "스크랩한 리스트 가져오기 실패: ",
        e
      );
    }
  },
  //고민 좋아요
  likeConcern: async (articleId) => {
    try {
      await likeConcern(articleId);
    } catch (error) {
      console.error("좋아요 실패! :", error);
    }
  },
  //고민 스크랩
  scrapConcern: async (articleId) => {
    try {
      await scrapConcern(articleId);
    } catch (error) {
      console.error("스크랩 실패! :", error);
    }
  },
}));
export default useConcernStore;
