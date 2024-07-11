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
import AdminLectureIntroducePage from "../pages/Admin/LectureIntro/AdminLectureIntroPage";
import AdminLectureOrderPage from "../pages/Admin/LectureOrder/AdminLectureOrderPage";
import AdminLectureQnaPage from "../pages/Admin/LectureQna/AdminLectureQnaPage";
import AdminLectureCourseReviewPage from "../pages/Admin/LectureCourseReview/AdminLectureCourseReviewPage";
import AdminLectureNoticePage from "../pages/Admin/LectureNotice/AdminLectureNoticePage";
import AdminLectureRegistPage from "../pages/Admin/LectureRegist/AdminLectureRegistPage";
import AdminLectureNavbar from "../components/admin/navbar/AdminLectureNavbar";
import AdminCommunityNavbar from "../components/admin/navbar/AdminCommunityNavbar";
import AdminApp from "../AdminApp";

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
          path: ADMIN_PATH.LECTURE,
          element: <AdminLectureNavbar />,
          children: [
            {
              path: ADMIN_PATH.LECTURE_INTRODUCE,
              element: <AdminLectureIntroducePage />,
            },
            {
              path: ADMIN_PATH.LECTURE_ORDER,
              element: <AdminLectureOrderPage />,
            },
            {
              path: ADMIN_PATH.LECTURE_QNA,
              element: <AdminLectureQnaPage />,
            },
            {
              path: ADMIN_PATH.COURSE_REVIEW,
              element: <AdminLectureCourseReviewPage />,
            },
            {
              path: ADMIN_PATH.LECTURE_NOTICE,
              element: <AdminLectureNoticePage />,
            },
          ],
        },
        {
          path: ADMIN_PATH.LECTURE_REGIST,
          element: <AdminLectureRegistPage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
