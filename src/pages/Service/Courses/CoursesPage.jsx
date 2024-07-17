import { CourseCard } from "@components/course/CourseCard";
import { PageTitle } from "@components/common/page/PageTitle";
import { getAllCourses } from "@apis/course/courseApi";
import { useEffect, useState } from "react";
import { Flex } from "@components/common/flex/Flex";
import PageLayout from "@components/common/page/PageLayout";
import { CourseContianer } from "@components/course/CourseCard.style";
const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await getAllCourses();
      setCourses(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <PageTitle>📚 전체 강의</PageTitle>
      {/* <Flex align="center" gap="1rem"> */}
      <CourseContianer>
        {!courses
          ? "등록된 강의가 없습니다."
          : courses.map((course) => (
              <CourseCard course={course} key={course} />
            ))}
      </CourseContianer>
      {/* </Flex> */}
    </>
  );
};

export default CoursesPage;
