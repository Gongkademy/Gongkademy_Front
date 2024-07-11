import LectureHeader from "@components/lecture/lectureHeader/LectureHeader";
import LecturePlayer from "@components/lecture/lecturePlayer/LecturePlayer";
import LectureFooter from "@components/lecture/lectureFooter/LectureFooter";
import { lectures } from "@dummy/lecture/lectures";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { COURSE_ID, LECTURE_ID } from "./constants";
import { Flex } from "../../../components/common/flex/Flex";
import LectureSidebar from "../../../components/lecture/lectureSideBar/LectureSidebar";
import { PageBlock } from "./LecturePage.style";

const LecturePage = () => {
  const [searchParams] = useSearchParams();
  const [lecture, setLecture] = useState();
  const curLecture = lectures.find((lecture) => {
    return (
      lecture.cid === parseInt(searchParams.get(COURSE_ID), 10) &&
      lecture.lid === parseInt(searchParams.get(LECTURE_ID), 10)
    );
  });

  //TODO: 실행이 안되는 버그 있음. API때 다시 해보자.
  useEffect(() => {
    console.log(curLecture);
    setLecture(curLecture);
  }, []);

  return (
    <PageBlock>
      <Flex direction="column" width="100%">
        <LectureHeader lecture={curLecture} />
        <LecturePlayer lecture={curLecture} />
        <LectureFooter lecture={curLecture} />
      </Flex>
      <LectureSidebar lecture={curLecture} />
    </PageBlock>
  );
};

export default LecturePage;
