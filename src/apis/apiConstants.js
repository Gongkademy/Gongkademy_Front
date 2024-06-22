export const BASE_URL = import.meta.env
  .VITE_APP_SERVICE_API_URL;

export const END_POINT = {
  MEMBERS: "members",
  MEMBER: (memberId) => `members/${memberId}`,

  LOGIN: "members/login",

  COMMUNITY_NOTICE: "notice",
  COMMUNITY_NOTICE_ARTICLE: (articleId) =>
    `notice/${articleId}`,

  COMMUNITY_CONCERN: "consulting",
  COMMUNITY_CONCERN_ARTICLE: (articleId) =>
    `consulting/${articleId}`,

  COMMUNITY_QUENTION: "question",
  COMMUNITY_QUESTION_ARTICLE: (articleId) =>
    `question/${articleId}`,

  COMMUNITY_REVIEW: "comment",
  COMMUNITY_REVIEW_COMMENT: (commentId) =>
    `comment/${commentId}`,
};
