import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";
export const getNoticeList = axiosInstance.get(
  END_POINT.COMMUNITY_NOTICE + "/top_latest"
);
export const getNoticeDetail = (articleId) => {
  axiosInstance.get(
    END_POINT.COMMUNITY_NOTICE_ARTICLE(articleId)
  );
};
export const likeNotice = (articleId) => {
  axiosInstance.post(
    END_POINT.COMMUNITY_NOTICE_ARTICLE(
      articleId
    ) + "/like"
  );
};
export const scrapNotice = (articleId) => {
  axiosInstance.post(
    END_POINT.COMMUNITY_NOTICE_ARTICLE(
      articleId
    ) + "/scrap"
  );
};
export const noticeLiked = axiosInstance.get(
  END_POINT.COMMUNITY_NOTICE + "/liked"
);
export const noticeScrapped = axiosInstance.get(
  END_POINT.COMMUNITY_NOTICE + "/scrapped"
);
