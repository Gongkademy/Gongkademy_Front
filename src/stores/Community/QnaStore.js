import { create } from "zustand";
import {
  getQuestionList, //질문리스트
  getQuestionDetail, //질문상세보기
  writeQuestion, //질문작성
  updateQuestion, //질문수정
  deleteQuestion, //질문삭제
  QuestionLiked, //질문좋아요목록
  QuestionScrapped, //질문스크랩목록
  likeQuestion, //질문좋아요
  scrapQuestion, //질문스크랩
} from "@apis/community/QnaApi";
const useQnaStore = create((set, get) => ({
  qna: null,
  qnaList: {},
  likedQnas: [],
  scrappedQnas: [],

  //질문 목록 가져오기
  fetchQnaList: async (
    keyword,
    criteria,
    pageNo
  ) => {
    try {
      const response = await getQuestionList(
        keyword,
        criteria,
        pageNo
      );
      set({ qnaList: response.data });
    } catch (e) {
      console.error(
        "질문 목록 가져오기 실패 : ",
        e
      );
    }
  },
  //질문 상세보기
  fetchQnaDetail: async (articleId) => {
    try {
      const response = await getQuestionDetail(
        articleId
      );
      set({ qna: response.data });
    } catch (e) {
      console.error("질문 상세보기 실패: ", e);
    }
  },
  //질문글 작성
  writeQna: async (article) => {
    await writeQuestion(article).then(
      (response) => {
        return response.data;
      }
    );
  },
  //질문 수정
  updateQna: async (articleId, article) => {
    await updateQuestion(articleId, article);
  },
  //질문 삭제
  deleteQna: async (articleId) => {
    await deleteQuestion(articleId);
  },
  //좋아요 목록 가져오기
  fetchQnaLiked: async () => {
    try {
      const response = await QuestionLiked();
      set({ likedQnas: response.data });
    } catch (e) {
      console.error(
        "좋아요한 리스트 가져오기 실패: ",
        e
      );
    }
  },
  //스크랩 목록 가져오기
  fetchQnaScrapped: async () => {
    try {
      const response = await QuestionScrapped();
      set({ scrappedQnas: response.data });
    } catch (e) {
      console.error(
        "스크랩한 리스트 가져오기 실패: ",
        e
      );
    }
  },
  //질문 좋아요
  likeQna: async (articleId) => {
    try {
      await likeQuestion(articleId);
    } catch (error) {
      console.error("좋아요 실패! :", error);
    }
  },
  //질문 스크랩
  scrapQna: async (articleId) => {
    try {
      await scrapQuestion(articleId);
    } catch (error) {
      console.error("스크랩 실패! :", error);
    }
  },
}));
export default useQnaStore;
