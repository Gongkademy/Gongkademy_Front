import LectureHeader from "@components/lecture/lectureHeader/LectureHeader";
import LecturePlayer from "@components/lecture/lecturePlayer/LecturePlayer";
import LectureFooter from "@components/lecture/lectureFooter/LectureFooter";
import { lectures } from "@dummy/lecture/lectures";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { COURSE_ID, LECTURE_ID, LECUTRE_ORDER, LECUTRE_URL } from "./constants";
import { Flex } from "../../../components/common/flex/Flex";
import LectureSidebar from "../../../components/lecture/lectureSideBar/LectureSidebar";
import { PageBlock } from "./LecturePage.style";
import useLectureStore from "@stores/course/lectureStore";
import { getPlayerLatestLecture } from "@apis/course/playerApi";
import { HTTP_STATUS_CODE } from "@apis/apiConstants";
import { getLecture } from "@apis/course/courseApi";

const LecturePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lecture, setLecture] = useState("");
  const [startPoint, setStartPoint] = useState(0);
  const fetchLecture = async () => {
    try {
      const response = await getLecture({
        courseId: searchParams.get(COURSE_ID),
        lectureOrder: searchParams.get(LECUTRE_ORDER),
      });
      setLecture(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchLectureRecord = async () => {
    try {
      const resposne = await getPlayerLatestLecture(
        searchParams.get(LECTURE_ID)
      );
      console.log(resposne);
    } catch (error) {
      if (error.response.status === HTTP_STATUS_CODE.BAD_REQUEST) {
        if (error.response.data.message === "수강강의가 존재하지 않습니다") {
          setStartPoint(0);
        }
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLecture();
    // fetchLectureRecord();
  }, [searchParams.get(LECUTRE_ORDER)]);

  return (
    <PageBlock>
      <Flex direction="column" width="100%">
        <LectureHeader title={lecture.title} />
        <LecturePlayer url={lecture.link} />
        <LectureFooter lecture={lecture} />
      </Flex>
      {/* <LectureSidebar lecture={curLecture} /> */}
    </PageBlock>
  );
};

export default LecturePage;
