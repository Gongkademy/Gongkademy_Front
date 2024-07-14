import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";

//댓글작성
export const writeReview = async (review) => {
  return await axiosInstance.post(
    END_POINT.COMMUNITY_REVIEW,
    review
  );
};
//댓글수정
export const updateReview = async (
  commentId,
  comment
) => {
  return await axiosInstance.patch(
    END_POINT.COMMUNITY_REVIEW_COMMENT(commentId),
    comment
  );
};
//댓글삭제
export const deleteReview = async (commentId) => {
  return await axiosInstance.delete(
    END_POINT.COMMUNITY_REVIEW_COMMENT(commentId)
  );
};
//댓글좋아요취소
export const likeReview = async (commentId) => {
  return await axiosInstance.post(
    END_POINT.COMMUNITY_REVIEW_COMMENT(
      commentId
    ) + "/like"
  );
};
