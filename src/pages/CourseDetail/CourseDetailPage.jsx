import { Outlet } from "react-router-dom";
import PageLayout from "../../components/common/page/PageLayout";
import CourseDetailTop from "../../components/courseDetail/courseDetailTop/CourseDetailTop";
import CourseMenu from "@components/courseDetail/courseMenu/CourseMenu";

import { Flex } from "@components/common/flex/Flex";
const CourseDetailPage = () => {
  return (
    <PageLayout>
      <Flex direction="column" gap="3rem">
        <CourseDetailTop />
        <CourseMenu />
        <Outlet />
      </Flex>
    </PageLayout>
  );
};

export default CourseDetailPage;
