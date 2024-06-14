import { Outlet } from "react-router-dom";

import CourseDetailTop from "../../components/courseDetail/courseDetailTop/CourseDetailTop";
import CourseMenu from "@components/courseDetail/courseMenu/CourseMenu";
import ToastUIEditor from "../../components/common/editor/ToastUIEditor";
const CourseDetailPage = () => {
  return (
    <main>
      <CourseDetailTop />
      <CourseMenu />
      <ToastUIEditor />
      <Outlet />
    </main>
  );
};

export default CourseDetailPage;
