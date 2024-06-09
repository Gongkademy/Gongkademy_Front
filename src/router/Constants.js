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

  LECTURE_PLAYER: (lectureId) => `/lecture/${lectureId}`, //TODO: queryString 방식으로 변경 예정

  COMMUNITY: (communityType) => `/community/${communityType}`,
  //TODO: 상수명이 마음에 안들어
  COMMUNITY_BOARD: (communityType, boardId) => `/${communityType}/${boardId}`,

  MY_PAGE: "/mypage",

  SIGN_UP: "member/signup",
};
