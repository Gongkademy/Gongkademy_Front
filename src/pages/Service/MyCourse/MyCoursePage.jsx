import MyCourseCard from "./MyCourseCard";
import { MyCourseGrid } from "./MyCoursePage.style";

const MyCoursePage = () => {
  const courseArr = [
    { title: "강의1" },
    { title: "강의2" },
    { title: "강의3" },
    { title: "강의4" },
    { title: "강의5" },
  ];

  return (
    <MyCourseGrid>
      {courseArr.map((course) => {
        return <MyCourseCard courseName={course.title} />;
      })}
    </MyCourseGrid>
  );
};

export default MyCoursePage;
