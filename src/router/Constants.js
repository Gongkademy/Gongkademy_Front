const ADMIN_PREFIX = import.meta.env.VITE_ADMIN_URL;

export const PATH = {
  ROOT: "/",
  COURSES: "/courses",

  //강좌는 Course, 강의 1개는 lecture
  COURSES: "/courses",
  COURSE_DETAIL: (courseId) => `/course/${courseId}`,
  COURSE_INTRODUCTION: (courseId) => `/course/${courseId}`,
  COURSE_CURRICULUM: (courseId) => `/course/${courseId}/curriculum`,
  COURSE_QNA: (courseId) => `/course/${courseId}/qna`,
  COURSE_REVIEW: (courseId) => `/course/${courseId}/review`,
  COURSE_NOTICE: (courseId) => `/course/${courseId}/notice`,

  LECTURE: `/course`,

  COMMUNITY: (communityType) => `/community/${communityType}`,
  //TODO: 상수명이 마음에 안들어
  // COMMUNITY_BOARD: (communityType, boardId) =>
  //   `/${communityType}/${boardId}`,
  COMMUNITY_REGIST: (communityType) => `/community/regist/` + communityType,
  COMMUNITY_DETAIL: (communityType, id) => `/community/${communityType}/${id}`,
  COMMUNITY_UPDATE: (id) => `/community/update/id`,
  MY_PAGE: "/mypage",

  GOOGLE_REDIRECT: "/auth/google/val",
  SIGN_UP: "/signup",
};

export const ADMIN_PATH = {
  ROOT: `${ADMIN_PREFIX}`,

  COMMUNITY: `${ADMIN_PREFIX}/community`,
  COMMUNITY_NOTEICE: `${ADMIN_PREFIX}/community/notice`,
  COMMUNITY_QNA: `${ADMIN_PREFIX}/community/qna`,
  COMMUNITY_CONCERN: `${ADMIN_PREFIX}/community/concern`,

  MEMBER: `${ADMIN_PREFIX}/member`,

  COURSE: `${ADMIN_PREFIX}/course`,
  COURSE_INTRODUCE: (courseId) =>
    `${ADMIN_PREFIX}/course/introduce/${courseId}`,
  COURSE_QNA: (courseId) => `${ADMIN_PREFIX}/course/qna/${courseId}`,
  COURSE_NOTICE: (courseId) => `${ADMIN_PREFIX}/course/notice/${courseId}`,
  COURSE_ORDER: (courseId) => `${ADMIN_PREFIX}/course/order/${courseId}`,
  COURSE_REVIEW: (courseId) => `${ADMIN_PREFIX}/course/review/${courseId}`,
  COURSE_REGIST: `${ADMIN_PREFIX}/course/regist`,
};
