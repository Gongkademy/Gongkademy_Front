import { CourseCard } from "@components/course/CourseCard";
import { CourseContianer } from "@components/course/CourseCard.style";
import { QuestionMark, Teacher } from "@assets/svg/titles";
import { PageTitle } from "@components/common/page/PageTitle";
import { ConcernCard } from "@components/concern/ConcernCard";
import { CONCERN_LIST } from "@dummy/Concern";
import { ConcernContianer } from "@components/concern/ConcernCard.style";
import { COURSE_LIST } from "@dummy/Course";
import PageLayout from "../../../components/common/page/PageLayout";
const COURSES = COURSE_LIST;
const CONCERNS = CONCERN_LIST;
const HomePage = () => {
  return (
    <>
      <PageLayout>
        <PageTitle>
          <Teacher />
          <h2>이런 강좌는 어떠세요?</h2>
        </PageTitle>
        <CourseContianer>
          {COURSES.map((course) => (
            <CourseCard course={course} key={course.url} />
          ))}
        </CourseContianer>
      </PageLayout>
      <PageTitle>
        <QuestionMark />
        <h2>이런 고민도 있어요</h2>
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
