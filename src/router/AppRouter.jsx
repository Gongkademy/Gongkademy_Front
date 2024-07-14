import { PATH } from "@router/Constants";

import App from "../App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "@pages/Service/Home/HomePage";
import NotFoundPage from "@pages/NotFound/NotFoundPage";

import CommunityPage from "@pages/Service/Community/CommunityPage";
import CommunityRegistPage from "@pages/Service/CommunityRegist/CommunityRegistPage";
import CommunityDetail from "@pages/Service/CommunityDetail/CommunityDetail";
import CommunityUpdatePage from "@pages/Service/CommunityUpdate/CommunityUpdatePage";

import CourseIntroduction from "@components/courseDetail/courseIntroduction/CourseIntroduction";
import CourseCurriculum from "@components/courseDetail/courseCurriculum/CourseCurriculum";
import CourseQnA from "@components/courseDetail/courseQnA/CourseQnA";
import CourseReview from "@components/courseDetail/courseReview/CourseReview";
import CourseNotice from "@components/courseDetail/courseNotice/CourseNotice";
import CourseDetailPage from "@pages/Service/CourseDetail/CourseDetailPage";

import LecturePage from "@pages/Service/Lecture/LecturePage";
import CoursesPage from "@pages/Service/Courses/CoursesPage";

import SignUpPage from "@pages/Service/Signup/SignUpPage";
import MyPage from "@pages/Service/MyPage/MyPage";
import { ADMIN_PATH } from "./Constants";
import AdminHomePage from "../pages/Admin/Home/AdminHomePage";
import AdminCommunityNoticePage from "../pages/Admin/CommunityNotice/AdminCommunityNoticePage";
import AdminCommunityQnaPage from "../pages/Admin/CommunityQna/AdminCommunityQnaPage";
import AdminCommunityConcernPage from "../pages/Admin/CommunityConcern/AdminCommunityConcernPage";
import AdminMemberPage from "../pages/Admin/Member/AdminMemberPage";
import AdminCommunityNavbar from "../components/admin/navbar/AdminCommunityNavbar";
import AdminApp from "../AdminApp";
import AdminCoursePage from "../pages/Admin/Course/AdminCoursePage";
import AdminCourseIntroducePage from "../pages/Admin/CourseIntro/AdminCourseIntroPage";
import AdminCourseOrderPage from "../pages/Admin/CourseOrder/AdminCourseOrderPage";
import AdminCourseQnaPage from "../pages/Admin/CourseQna/AdminCourseQnaPage";
import AdminCourseReviewPage from "../pages/Admin/CourseReview/AdminCourseReviewPage";
import AdminCourseNoticePage from "../pages/Admin/CourseNotice/AdminCourseNoticePage";
import AdminCourseRegistPage from "../pages/Admin/CourseRegist/AdminCourseRegistPage";
import AdminCourseNavbar from "../components/admin/navbar/AdminCourseNavbar";

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
          element: <CommunityRegistPage />,
        },
        {
          path: PATH.COMMUNITY_UPDATE(`:id`),
          element: <CommunityUpdatePage />,
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

    //관리자
    {
      path: ADMIN_PATH.ROOT,
      element: <AdminApp />,
      children: [
        {
          path: ADMIN_PATH.ROOT,
          element: <AdminHomePage />,
        },
        {
          path: ADMIN_PATH.COMMUNITY,
          element: <AdminCommunityNavbar />,
          children: [
            {
              path: ADMIN_PATH.COMMUNITY_NOTEICE,
              element: <AdminCommunityNoticePage />,
            },
            {
              path: ADMIN_PATH.COMMUNITY_QNA,
              element: <AdminCommunityQnaPage />,
            },
            {
              path: ADMIN_PATH.COMMUNITY_CONCERN,
              element: <AdminCommunityConcernPage />,
            },
          ],
        },
        {
          path: ADMIN_PATH.MEMBER,
          element: <AdminMemberPage />,
        },
        {
          path: ADMIN_PATH.COURSE,
          element: <AdminCoursePage />,
        },
        {
          path: ADMIN_PATH.COURSE,
          element: <AdminCourseNavbar />,
          children: [
            {
              path: ADMIN_PATH.COURSE_INTRODUCE(":courseId"),
              element: <AdminCourseIntroducePage />,
            },
            {
              path: ADMIN_PATH.COURSE_ORDER(":courseId"),
              element: <AdminCourseOrderPage />,
            },
            {
              path: ADMIN_PATH.COURSE_QNA(":courseId"),
              element: <AdminCourseQnaPage />,
            },
            {
              path: ADMIN_PATH.COURSE_REVIEW(":courseId"),
              element: <AdminCourseReviewPage />,
            },
            {
              path: ADMIN_PATH.COURSE_NOTICE(":courseId"),
              element: <AdminCourseNoticePage />,
            },
          ],
        },
        {
          path: ADMIN_PATH.COURSE_REGIST(":courseId"),
          element: <AdminCourseRegistPage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
