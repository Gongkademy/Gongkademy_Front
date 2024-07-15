import { CourseMenuBlock, StyledLink } from "./CourseMenu.style";
import { PATH } from "@router/Constants";
import Text from "@components/common/text/Text";
import { useParams } from "react-router-dom";
const CourseMenu = () => {
  const params = useParams();
  const curCourseId = params.courseId;
  return (
    <CourseMenuBlock>
      <StyledLink to={PATH.COURSE_INTRODUCTION(curCourseId)} end>
        <Text typo="titleSm700">강의소개</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_CURRICULUM(curCourseId)} end>
        <Text typo="titleSm700">목차</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_QNA(curCourseId)} end>
        <Text typo="titleSm700">QnA</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_REVIEW(curCourseId)} end>
        <Text typo="titleSm700">수강평</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_NOTICE(curCourseId)} end>
        <Text typo="titleSm700">공지사항</Text>
      </StyledLink>
    </CourseMenuBlock>
  );
};

export default CourseMenu;
