import { PATH } from "@router/Constants";
import App from "../App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "@pages/Home/HomePage";
import NotFoundPage from "@pages/NotFound/NotFoundPage";

import CommunityPage from "@pages/Community/CommunityPage";
import Regist from "@pages/CommunityBoard/Regist/Regist";
import CommunityDetail from "@pages/CommunityDetail/CommunityDetail";

import CourseIntroduction from "@components/courseDetail/courseIntroduction/CourseIntroduction";
import CourseCurriculum from "@components/courseDetail/courseCurriculum/CourseCurriculum";
import CourseQnA from "@components/courseDetail/courseQnA/CourseQnA";
import CourseReview from "@components/courseDetail/courseReview/CourseReview";
import CourseNotice from "@components/courseDetail/courseNotice/CourseNotice";
import CourseDetailPage from "@pages/CourseDetail/CourseDetailPage";

import LecturePage from "@pages/Lecture/LecturePage";
import CoursesPage from "@pages/Courses/CoursesPage";

import SignUpPage from "@pages/Signup/SignUpPage";
import MyPage from "@pages/MyPage/MyPage";

const AppRouter = () => {
  const routes = [
    {
      path: PATH.ROOT,
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: PATH.ROOT,
          element: <HomePage />,
        },

        // 커뮤니티 관련 Route
        {
          path: PATH.COMMUNITY(`:communityType`),
          element: <CommunityPage />,
        },
        {
          path: PATH.COMMUNITY_DETAIL(`:communityType`, `:id`),
          element: <CommunityDetail />,
        },
        {
          path: PATH.COMMUNITY_REGIST(`:communityType`),
          element: <Regist />,
        },

        // 강의 관련 Route
        {
          path: PATH.COURSES,
          element: <CoursesPage />,
        },
        {
          path: PATH.COURSE_DETAIL(`:courseId`),
          element: <CourseDetailPage />,
          children: [
            {
              path: PATH.COURSE_INTRODUCTION(`:courseId`),
              element: <CourseIntroduction />,
            },
            {
              path: PATH.COURSE_CURRICULUM(`:courseId`),
              element: <CourseCurriculum />,
            },
            {
              path: PATH.COURSE_QNA(`:courseId`),
              element: <CourseQnA />,
            },
            {
              path: PATH.COURSE_REVIEW(`:courseId`),
              element: <CourseReview />,
            },
            {
              path: PATH.COURSE_NOTICE(`:courseId`),
              element: <CourseNotice />,
            },
          ],
        },

        //계정 관련 Route
        {
          path: PATH.MY_PAGE,
          element: <MyPage />,
        },
        {
          path: PATH.SIGN_UP,
          element: <SignUpPage />,
        },
      ],
    },

    //header, footer없음
    {
      path: PATH.LECTURE,
      element: <LecturePage />,
    },
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
