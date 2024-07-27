import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";

//비로그인 질문 전체
export const getQuestionListNonLogin = async (
  keyword,
  criteria,
  page
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION,
    {
      params: { page, criteria, keyword },
    }
  );
};
//비로그인 질문 상세보기
export const getQuestionDetailNonLogin = async (
  articleId
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    )
  );
};

//로그인 질문 리스트
export const getQuestionList = async (
  keyword,
  criteria,
  page
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION + "/login",
    {
      params: { page, criteria, keyword },
    }
  );
};
//로그인 질문 상세보기
export const getQuestionDetail = async (
  articleId
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    ) + "/login"
  );
};
//내가 쓴 질문 리스트
export const getMyQna = async (
  page,
  criteria
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION + "/myboard",
    {
      params: { page, criteria },
    }
  );
};

//질문 작성
export const writeQuestion = async (article) => {
  return await axiosInstance.post(
    END_POINT.COMMUNITY_QUESTION,
    article
  );
};
//질문수정
export const updateQuestion = async (
  articleId,
  article
) => {
  return await axiosInstance.patch(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    ),
    article
  );
};
//질문삭제
export const deleteQuestion = async (
  articleId
) => {
  return await axiosInstance.delete(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    )
  );
};
//질문 좋아요한 것들 가져오기
export const QuestionLiked = async () => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION + "/liked"
  );
};

//질문 스크랩한 것들 가져오기
export const QuestionScrapped = async () => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_QUESTION + "/scrapped"
  );
};
//질문 좋아요
export const likeQuestion = async (articleId) => {
  return await axiosInstance.post(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    ) + "/like"
  );
};
//질문 스크랩
export const scrapQuestion = async (
  articleId
) => {
  return await axiosInstance.post(
    END_POINT.COMMUNITY_QUESTION_ARTICLE(
      articleId
    ) + "/scrap"
  );
};
