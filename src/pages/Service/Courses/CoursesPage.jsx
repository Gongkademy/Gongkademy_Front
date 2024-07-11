import { CourseCard } from "@components/course/CourseCard";
import { PageTitle } from "@components/common/page/PageTitle";
import COURSE_LIST from "../../../dummy/Course";
const CoursesPage = () => {
  const COURSES = COURSE_LIST;
  return (
    <div>
      <PageTitle>📚 전체 강의</PageTitle>
      <div className="px-6 mt-4 grid justify-center grid-cols-co gap-y-6 gap-x-4">
        {COURSES.map((course) => (
          <CourseCard course={course} key={course.url} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
