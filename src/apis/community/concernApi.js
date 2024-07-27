import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";
//고민 리스트
export const getConcernListNonLogin = async (
  keyword,
  criteria,
  page
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_CONCERN,
    {
      params: { page, criteria, keyword },
    }
  );
};
//고민 상세보기
export const getConcernDetailNonLogin = async (
  articleId
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(articleId)
  );
};

//로그인 고민 리스트
export const getConcernList = async (
  keyword,
  criteria,
  page
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_CONCERN + "/login",
    {
      params: { page, criteria, keyword },
    }
  );
};
//로그인 고민 상세보기
export const getConcernDetail = async (
  articleId
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(
      articleId
    ) + "/login"
  );
};
//내 고민
export const getMyConcern = async (
  page,
  criteria
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_CONCERN + "myboard",
    { params: { page, criteria } }
  );
};
//고민 작성
export const writeConcern = async (article) => {
  return await axiosInstance.post(
    END_POINT.COMMUNITY_CONCERN,
    article
  );
};
//고민수정
export const updateConcern = async (
  articleId,
  article
) => {
  return await axiosInstance.patch(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(
      articleId
    ),
    article
  );
};
//고민삭제
export const deleteConcern = async (
  articleId
) => {
  return await axiosInstance.delete(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(articleId)
  );
};
//고민 좋아요한 것들 가져오기
export const concernLiked = async () => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_CONCERN + "/liked"
  );
};

//고민 스크랩한 것들 가져오기
export const concernScrapped = async () => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_CONCERN + "/scrapped"
  );
};
//고민 좋아요
export const likeConcern = async (articleId) => {
  return await axiosInstance.post(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(
      articleId
    ) + "/like"
  );
};
//고민 스크랩
export const scrapConcern = async (articleId) => {
  return await axiosInstance.post(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(
      articleId
    ) + "/scrap"
  );
};
