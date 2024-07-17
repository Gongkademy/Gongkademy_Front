import { Flex } from "../../common/flex/Flex";
import Text from "@components/common/text/Text";
import Button from "../../common/button/Button";
import { color, typo } from "../../../styles/style";
import { BookIcon, BookMarkIcon, StarIcon } from "@assets/svg/icons";
const CourseSummary = ({ course }) => {
  const courseHour = Math.floor(course.totalCourseTime / 3600);
  const courseMinute = Math.floor(course.totalCourseTime / 60);
  return (
    <Flex direction="column" padding="1rem 0" justify="space-between">
      <Text typo={typo.titleSm700}>{course.title}</Text>

      <Flex direction="column" gap="0.5rem">
        <Flex align="center" gap="0.25rem">
          <StarIcon width="16" fill={color.yellow} />
          <Text typo={typo.bodySm400}>{course.avgRating}</Text>
        </Flex>

        <Flex gap="0.5rem">
          <Text typo={typo.bodySm400}>수강평</Text>
          <Text typo={typo.bodySm700}>{course.reviewCount}개</Text>
          <Text typo={typo.bodySm400}>수강생</Text>
          <Text typo={typo.bodySm700}>{course.registCount}명</Text>
        </Flex>

        <Flex gap="0.5rem">
          <Text typo={typo.bodySm400}>강의</Text>
          <Text typo={typo.bodySm700}>{Number(course.lectureCount)}개</Text>
          <Text typo={typo.bodySm700}>
            (
            {!courseHour
              ? courseMinute + "분"
              : courseHour + "시간 " + courseMinute + "분"}
            )
          </Text>
        </Flex>
      </Flex>

      <Flex gap="1rem">
        <Button outline>
          <BookIcon width="16" />
          강의자료
        </Button>
        <Button outline>
          <BookMarkIcon width="16" />
          저장하기
        </Button>
      </Flex>
      <Button fill cta>
        수강하기
      </Button>
    </Flex>
  );
};

export default CourseSummary;
