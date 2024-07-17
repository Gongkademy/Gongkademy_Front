import { Link, useNavigate } from "react-router-dom";
import {
  SubjectContainer,
  SubjectTitle,
  Thumbnail,
} from "@components/course/CourseCard.style";
import { PATH } from "@router/Constants";

export const CourseCard = ({ course }) => {
  console.log(course);
  return (
    <Link to={PATH.COURSE_DETAIL(course.courseId)}>
      <Thumbnail>
        <img src={course.courseImgAddress} alt="썸네일" />
      </Thumbnail>
      <SubjectContainer>
        <SubjectTitle>{course.title}</SubjectTitle>
      </SubjectContainer>
    </Link>
  );
};
