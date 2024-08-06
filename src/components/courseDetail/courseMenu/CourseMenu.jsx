import { CourseMenuBlock, StyledLink } from "./CourseMenu.style";
import { PATH } from "@router/Constants";
import Text from "@components/common/text/Text";
import { useParams } from "react-router-dom";
import { typo } from "@styles/style";
const CourseMenu = () => {
  const { courseId } = useParams();
  return (
    <CourseMenuBlock>
      <StyledLink to={PATH.COURSE_INTRODUCTION(courseId)} end>
        <Text typo={typo.titleSm700}>강의소개</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_CURRICULUM(courseId)} end>
        <Text typo={typo.titleSm700}>목차</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_QNA(courseId)} end>
        <Text typo={typo.titleSm700}>QnA</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_REVIEW(courseId)} end>
        <Text typo={typo.titleSm700}>수강평</Text>
      </StyledLink>
      <StyledLink to={PATH.COURSE_NOTICE(courseId)} end>
        <Text typo={typo.titleSm700}>공지사항</Text>
      </StyledLink>
    </CourseMenuBlock>
  );
};

export default CourseMenu;
