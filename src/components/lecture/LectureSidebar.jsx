import { useSearchParams } from "react-router-dom";
import {
  LectureSidebarBlock,
  MyCourseProcess,
  TotalProcess,
} from "./LectureSidebar.style";
import { useEffect, useState } from "react";
import { useLectureListQuery } from "@apis/course/courseApi";
import { COURSE_ID } from "@pages/Service/Lecture/constants";
import LectureCurriculumItem from "@components/lecture/LectureCurriculumItem";
import Text from "@components/common/text/Text";
import { typo } from "@styles/style";
import { Flex } from "@components/common/flex/Flex";

const LectureSidebar = ({ courseTitle }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [completeNum, setCompleteNum] = useState(0);

  const {
    data: lectureList,
    isSuccess,
    isLoading,
  } = useLectureListQuery(searchParams.get(COURSE_ID));

  useEffect(() => {
    let num = 0;
    if (isSuccess) {
      lectureList.data.forEach((lecture) => {
        if (lecture.isCompleted) num++;
      });
    }
    setCompleteNum(num);
  }, [isSuccess]);
  return (
    <LectureSidebarBlock>
      {isLoading && <p>로딩중</p>}

      {isSuccess && (
        <>
          <Text typo={typo.titleSm700}>{courseTitle}</Text>
          <Flex direction="column" gap="1rem">
            <TotalProcess>
              <MyCourseProcess rate={completeNum / lectureList.data.length} />
            </TotalProcess>
            <Text typo={typo.bodyRg400}>
              수강 중 {completeNum}/{lectureList.data.length}
            </Text>
          </Flex>
          <Flex direction="column">
            {lectureList.data.map((lecture) => (
              <LectureCurriculumItem
                order={lecture.lectureOrder}
                title={lecture.title}
                time={lecture.time}
                id={lecture.lectureId}
                isCompleted={lecture.isCompleted}
              />
            ))}
          </Flex>
        </>
      )}
    </LectureSidebarBlock>
  );
};

export default LectureSidebar;
