import { Flex } from "@components/common/flex/Flex";
import CourseNoticeCard from "@components/courseDetail/courseNotice/CourseNoticeCard";
import { useCourseNoticeQuery } from "@queries/useCourseDetailQuery";
import { useParams } from "react-router-dom";

const CourseNotice = () => {
  const { courseId } = useParams();
  const { data, isSuccess, isError, error } = useCourseNoticeQuery(courseId, 0);
  console.log(data);

  return (
    <Flex direction="column" padding="1.875rem" width="100%" gap="2rem">
      {isSuccess &&
        data.data.content.map((content) => (
          <CourseNoticeCard content={content} />
        ))}
    </Flex>
  );
};

export default CourseNotice;
