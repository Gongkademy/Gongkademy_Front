import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";
export const getNoticeList = async () => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_NOTICE +
      "/top_latest/login"
  );
};
export const getNoticeDetail = async (
  articleId
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_NOTICE_ARTICLE(
      articleId
    ) + "/login"
  );
};

//비로그인 유저
export const getNoticeListNonLogin = async () => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_NOTICE + "/top_latest"
  );
};
export const getNoticeDetailNonLogin = async (
  articleId
) => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_NOTICE_ARTICLE(articleId)
  );
};

export const likeNotice = async (articleId) => {
  return await axiosInstance.post(
    END_POINT.COMMUNITY_NOTICE_ARTICLE(
      articleId
    ) + "/like"
  );
};
export const scrapNotice = async (articleId) => {
  return await axiosInstance.post(
    END_POINT.COMMUNITY_NOTICE_ARTICLE(
      articleId
    ) + "/scrap"
  );
};
export const noticeLiked = async () => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_NOTICE + "/liked"
  );
};
export const noticeScrapped = async () => {
  return await axiosInstance.get(
    END_POINT.COMMUNITY_NOTICE + "/scrapped"
  );
};
