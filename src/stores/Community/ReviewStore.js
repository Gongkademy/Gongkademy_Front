import { create } from "zustand";
import {
  writeReview, //댓글작성
  updateReview, //댓글수정
  deleteReview, //댓글삭제
  likeReview, //댓글좋아요
} from "@apis/community/ReviewApi";
const useReviewStore = create((set, get) => ({
  //댓글 작성
  writeReview: async (comment) => {
    await writeReview(comment);
  },
  //댓글 수정
  updateReview: async (commentId, comment) => {
    await updateReview(commentId, comment);
  },
  //댓글 삭제
  deleteReview: async (commentId) => {
    await deleteReview(commentId);
  },
  //댓글 좋아요
  likeReview: async (commentId) => {
    try {
      await likeReview(commentId);
    } catch (error) {
      console.error("좋아요 실패! :", error);
    }
  },
}));
export default useReviewStore;
