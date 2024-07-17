import { CourseCard } from "@components/course/CourseCard";
import { PageTitle } from "@components/common/page/PageTitle";
import COURSE_LIST from "../../../dummy/Course";
import { getAllCourses } from "@apis/course/courseApi";
import { useEffect, useState } from "react";
const CoursesPage = () => {
  const COURSES = COURSE_LIST;
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
    <div>
      <PageTitle>📚 전체 강의</PageTitle>
      {/* <div className="px-6 mt-4 grid justify-center grid-cols-co gap-y-6 gap-x-4"> */}
      <div>
        {courses.map((course) => (
          <CourseCard course={course} key={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
