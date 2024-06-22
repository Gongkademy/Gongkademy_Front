import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";
//고민 리스트
export const getConcernList = axiosInstance.get(
  END_POINT.COMMUNITY_CONCERN
);
//고민 상세보기
export const getConcernDetail = (articleId) => {
  axiosInstance.get(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(articleId)
  );
};
//보류
export const searchConcern = axiosInstance.get(
  END_POINT.COMMUNITY_CONCERN + "/search"
);
//고민 작성
export const writeConcern = (article) =>
  axiosInstance.post(
    END_POINT.COMMUNITY_CONCERN,
    article
  );
//고민수정
export const updateConcern = (
  articleId,
  article
) => {
  axiosInstance.patch(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(
      articleId
    ),
    article
  );
};
//고민삭제
export const deleteConcern = (articleId) => {
  axiosInstance.delete(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(articleId)
  );
};
//고민 좋아요한 것들 가져오기
export const concernLiked = axiosInstance.get(
  END_POINT.COMMUNITY_CONCERN + "/liked"
);

//고민 스크랩한 것들 가져오기
export const concernScrapped = axiosInstance.get(
  END_POINT.COMMUNITY_CONCERN + "/scrapped"
);
//고민 좋아요
export const likeConcern = (articleId) => {
  axiosInstance.post(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(
      articleId
    ) + "/like"
  );
};
//고민 스크랩
export const scrapConcern = (articleId) => {
  axiosInstance.post(
    END_POINT.COMMUNITY_CONCERN_ARTICLE(
      articleId
    ) + "/scrap"
  );
};
