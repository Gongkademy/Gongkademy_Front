import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";

//댓글작성
export const writeReview = (review) =>
  axiosInstance.post(
    END_POINT.COMMUNITY_REVIEW,
    review
  );
//댓글수정
export const updateReview = (
  commentId,
  comment
) => {
  axiosInstance.patch(
    END_POINT.COMMUNITY_REVIEW_COMMENT(commentId),
    comment
  );
};
//댓글삭제
export const deleteReview = (commentId) => {
  axiosInstance.delete(
    END_POINT.COMMUNITY_REVIEW_COMMENT(commentId)
  );
};
//댓글좋아요취소
export const likeReview = (commentId) => {
  axiosInstance.post(
    END_POINT.COMMUNITY_REVIEW_COMMENT(
      commentId
    ) + "/like"
  );
};
