export const BASE_URL = import.meta.env.VITE_APP_SERVICE_API_URL;
export const ADMIN_BASE_URL = import.meta.env.VITE_APP_ADMIN_API_URL;

export const END_POINT = {
  MEMBERS: "members",
  MEMBER: (memberId) => `members/${memberId}`,

  LOGIN: "members/login",

  COMMUNITY_NOTICE: "community/notice",
  COMMUNITY_NOTICE_ARTICLE: (articleId) => `community/notice/${articleId}`,

  COMMUNITY_CONCERN: "community/consulting",
  COMMUNITY_CONCERN_ARTICLE: (articleId) => `community/consulting/${articleId}`,

  COMMUNITY_QUESTION: "community/question",
  COMMUNITY_QUESTION_ARTICLE: (articleId) => `community/question/${articleId}`,

  COMMUNITY_REVIEW: "community/comment",
  COMMUNITY_REVIEW_COMMENT: (commentId) => `community/comment/${commentId}`,
};
