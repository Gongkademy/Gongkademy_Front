import { PATH } from "@router/Constants";

import App from "../App";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

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
import GoogleRedirectPage from "@pages/Service/GoogleRedirect/GoogleRedirectPage";
import MyCoursePage from "@pages/Service/MyCourse/MyCoursePage";
import MyCommunityPage from "@pages/Service/MyCommunity/MyCommunityPage";
import MyNotificationSettingPage from "@pages/Service/MyNotificationSetting/MyNotificationSettingPage";
import MyInfoUpdatePage from "@pages/Service/MyInfoUpdate/MyInfoUpdatePage";
import MemberDeletePage from "@pages/Service/MemberDelete/MemberDeletePage";
import PrivateRouter from "@router/PrivaterRouter";

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
          path: PATH.COMMUNITY_DETAIL(
            `:communityType`,
            `:id`
          ),
          element: <CommunityDetail />,
        },
        {
          path: PATH.COMMUNITY_UPDATE(
            `:communityType`,
            `:id`
          ),
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
              path: PATH.COURSE_INTRODUCTION(
                `:courseId`
              ),
              element: <CourseIntroduction />,
            },
            {
              path: PATH.COURSE_CURRICULUM(
                `:courseId`
              ),
              element: <CourseCurriculum />,
            },
            {
              path: PATH.COURSE_QNA(`:courseId`),
              element: <CourseQnA />,
            },
            {
              path: PATH.COURSE_REVIEW(
                `:courseId`
              ),
              element: <CourseReview />,
            },
            {
              path: PATH.COURSE_NOTICE(
                `:courseId`
              ),
              element: <CourseNotice />,
            },
          ],
        },
        //PrivateRouter 적용
        {
          element: (
            <PrivateRouter memberRole={"USER"} />
          ),
          children: [
            {
              path: PATH.COMMUNITY_REGIST(
                `:communityType`
              ),
              element: <CommunityRegistPage />,
            },
            {
              path: PATH.COMMUNITY_UPDATE(`:id`),
              element: <CommunityUpdatePage />,
            },
            {
              path: PATH.MY_PAGE,
              element: <MyPage />,
            },

            {
              path: PATH.MY_COURSE,
              element: <MyCoursePage />,
            },
            {
              path: PATH.MY_COMMUNITY(":type"),
              element: <MyCommunityPage />,
            },
            {
              path: PATH.MY_INFO_UPDARTE,
              element: <MyInfoUpdatePage />,
            },
            {
              path: PATH.MEMBER_DELETE,
              element: <MemberDeletePage />,
            },

            {
              path: PATH.MY_NOTIFICATION_SETTING,
              element: (
                <MyNotificationSettingPage />
              ),
            },
            {
              path: PATH.LECTURE,
              element: <LecturePage />,
            },
          ],
        },
      ],
    },
    {
      path: PATH.GOOGLE_REDIRECT,
      element: <GoogleRedirectPage />,
    },

    //header, footer없음

    //관리자
    {
      element: <AdminApp />,
      children: [
        {
          element: (
            <PrivateRouter memberRole={"ADMIN"} />
          ),
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
                  element: (
                    <AdminCommunityNoticePage />
                  ),
                },
                {
                  path: ADMIN_PATH.COMMUNITY_QNA,
                  element: (
                    <AdminCommunityQnaPage />
                  ),
                },
                {
                  path: ADMIN_PATH.COMMUNITY_CONCERN,
                  element: (
                    <AdminCommunityConcernPage />
                  ),
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
                  path: ADMIN_PATH.COURSE_INTRODUCE(
                    ":courseId"
                  ),
                  element: (
                    <AdminCourseIntroducePage />
                  ),
                },
                {
                  path: ADMIN_PATH.COURSE_ORDER(
                    ":courseId"
                  ),
                  element: (
                    <AdminCourseOrderPage />
                  ),
                },
                {
                  path: ADMIN_PATH.COURSE_QNA(
                    ":courseId"
                  ),
                  element: <AdminCourseQnaPage />,
                },
                {
                  path: ADMIN_PATH.COURSE_REVIEW(
                    ":courseId"
                  ),
                  element: (
                    <AdminCourseReviewPage />
                  ),
                },
                {
                  path: ADMIN_PATH.COURSE_NOTICE(
                    ":courseId"
                  ),
                  element: (
                    <AdminCourseNoticePage />
                  ),
                },
              ],
            },
            {
              path: ADMIN_PATH.COURSE_REGIST,
              element: <AdminCourseRegistPage />,
            },
          ],
        },
      ],
    },
  ];

  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
