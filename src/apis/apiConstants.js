export const BASE_URL = import.meta.env.VITE_APP_SERVICE_API_URL;
export const ADMIN_BASE_URL = import.meta.env.VITE_APP_ADMIN_API_URL;

export const END_POINT = {
  MEMBER: "members",
  MEMBER_DETAIL: (memberId) => `members/${memberId}`,

  LOGIN: "members/login",
  LOGOUT: "members/logout",
  // 강좌,강의
  COURSE: "/course/all",
  COURSE_DETAIL: (courseId) => `/course/${courseId}`,
  COURSE_STATUS: (courseId) => `/course/status/${courseId}`,
  COURSE_NOTICE: "/course/notice",
  COURSE_NOTICE_DETAIL: (courseId) => `/course/notice/${courseId}`,
  COURSE_NO_COMPLETE: "/course/nocomplete",
  COURSE_LIST: (courseId) => `course/list/${courseId}`,
  COURSE_COMPLETE: "/course/complete",
  COURSE_DOWNLOAD: "/course/download",
  COURSE_INFO: (courseId) => `/course/info/${courseId}`,
  COURSE_SCRAP: "/course/scrap",
  COURSE_LIKE: "/course/like",
  COURSE_REGIST: (courseId) => `/course/regist/${courseId}`,

  COURSE_COMMNET: "/course/comment",
  COURSE_COMMNET_DETAIL: (courseId) => `/course/comment/${courseId}`,
  COURSE_COMMNET_CATEG_DETAIL: (category, courseId) =>
    `/course/comment/${category}/${courseId}`,

  COURSE_REVIEW: "/review",
  COURSE_REVIEW_DETAIL: (id) => `/review/${id}`,

  PLAYER: "/player",
  PLAYER_PREV: "/player/prev",
  PLAYER_NEXT: "/player/next",
  PLAYER_LECTURE_DETAIL: (lectureId) => `/player/lecture/${lectureId}`,
  PLAYER_COURSE_DETAIL: (courseId) => `/player/course/${courseId}`,

  COURSE_LECTURE: "/course/lecture",
  LECTURE: "/lecture",
  LECTURE_DETAIL: (lectureId) => `/lecture/${lectureId}`,

  // 커뮤니티
  COMMUNITY_NOTICE: "community/notice",
  COMMUNITY_NOTICE_ARTICLE: (articleId) => `community/notice/${articleId}`,

  COMMUNITY_CONCERN: "community/consulting",
  COMMUNITY_CONCERN_ARTICLE: (articleId) => `community/consulting/${articleId}`,

  COMMUNITY_QUESTION: "community/question",
  COMMUNITY_QUESTION_ARTICLE: (articleId) => `community/question/${articleId}`,

  COMMUNITY_REVIEW: "community/comment",
  COMMUNITY_REVIEW_COMMENT: (commentId) => `community/comment/${commentId}`,
};

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONTENT_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500,
};
