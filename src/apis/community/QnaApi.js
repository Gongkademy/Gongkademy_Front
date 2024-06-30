import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";
//질문 리스트
export const getQuestionList = (keyword) => {
  axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION,
    {
      params: { keyword: keyword },
    }
  );
};
//질문 상세보기
export const getQuestionDetail = (articleId) => {
  axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    )
  );
};
//질문 작성
export const writeQuestion = (article) =>
  axiosInstance.post(
    END_POINT.COMMUNITY_QUESTION,
    article
  );
//질문수정
export const updateQuestion = (
  articleId,
  article
) => {
  axiosInstance.patch(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    ),
    article
  );
};
//질문삭제
export const deleteQuestion = (articleId) => {
  axiosInstance.delete(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    )
  );
};
//질문 좋아요한 것들 가져오기
export const QuestionLiked = () => {
  axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION + "/liked"
  );
};

//질문 스크랩한 것들 가져오기
export const QuestionScrapped = () => {
  axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION + "/scrapped"
  );
};
//질문 좋아요
export const likeQuestion = (articleId) => {
  axiosInstance.post(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    ) + "/like"
  );
};
//질문 스크랩
export const scrapQuestion = (articleId) => {
  axiosInstance.post(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    ) + "/scrap"
  );
};
