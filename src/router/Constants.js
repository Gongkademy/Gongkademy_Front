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

  SIGN_UP: "/signup",
};

export const ADMIN_PATH = {
  ROOT: `${ADMIN_PREFIX}`,

  COMMUNITY: `${ADMIN_PREFIX}/community`,
  COMMUNITY_NOTEICE: `${ADMIN_PREFIX}/community/notice`,
  COMMUNITY_QNA: `${ADMIN_PREFIX}/community/qna`,
  COMMUNITY_CONCERN: `${ADMIN_PREFIX}/community/concern`,

  MEMBER: `${ADMIN_PREFIX}/member`,

  LECTURE: `${ADMIN_PREFIX}/lecture`,
  LECTURE_INTRODUCE: `${ADMIN_PREFIX}/lecture/introduce`,
  LECTURE_QNA: `${ADMIN_PREFIX}/lecture/qna`,
  LECTURE_NOTICE: `${ADMIN_PREFIX}/lecture/notice`,
  LECTURE_ORDER: `${ADMIN_PREFIX}/lecture/order`,
  COURSE_REVIEW: `${ADMIN_PREFIX}/lecture/course-review`,
  LECTURE_REGIST: `${ADMIN_PREFIX}/lecture/regist`,
};
