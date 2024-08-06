import { CourseCard } from "@components/course/CourseCard";
import { CourseContianer } from "@components/course/CourseCard.style";
import { QuestionMark, Teacher } from "@assets/svg/titles";
import { PageTitle } from "@components/common/page/PageTitle";
import { ConcernCard } from "@components/concern/ConcernCard";
import { CONCERN_LIST } from "@dummy/Concern";
import { ConcernContianer } from "@components/concern/ConcernCard.style";
import { TeacherIcon } from "@assets/svg/icons";
import { useEffect, useState } from "react";
import { getAllCourses } from "@apis/course/courseApi";
import { useMemberStore } from "@stores/member/memberStore";
const CONCERNS = CONCERN_LIST;
const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const fetchCourses = async () => {
    try {
      const response = await getAllCourses();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <>
      <PageTitle>
        <TeacherIcon width={"2rem"} />
        이런 강좌는 어떠세요?
      </PageTitle>
      <CourseContianer>
        {courses.map((course) => (
          <CourseCard course={course} key={course} />
        ))}
      </CourseContianer>

      <PageTitle>
        <QuestionMark width={"2rem"} />
        이런 고민도 있어요
      </PageTitle>
      <ConcernContianer>
        {CONCERNS.map((concern) => (
          <ConcernCard concern={concern} />
        ))}
      </ConcernContianer>
    </>
  );
};

export default HomePage;
