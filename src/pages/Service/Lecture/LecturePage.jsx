import LectureHeader from "@components/lecture/lectureHeader/LectureHeader";
import LecturePlayer from "@components/lecture/lecturePlayer/LecturePlayer";
import LectureFooter from "@components/lecture/lectureFooter/LectureFooter";
import { lectures } from "@dummy/lecture/lectures";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { COURSE_ID, LECTURE_ID, LECUTRE_URL } from "./constants";
import { Flex } from "../../../components/common/flex/Flex";
import LectureSidebar from "../../../components/lecture/lectureSideBar/LectureSidebar";
import { PageBlock } from "./LecturePage.style";
import useLectureStore from "@stores/course/lectureStore";
import { getPlayerLatestLecture } from "@apis/course/playerApi";
import { HTTP_STATUS_CODE } from "@apis/apiConstants";

const LecturePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lecture, setLecture] = useState();
  const [startPoint, setStartPoint] = useState(0);
  const curLecture = useLectureStore((state) => state.curLecture);
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
    fetchLectureRecord();
  }, []);

  return (
    <PageBlock>
      <Flex direction="column" width="100%">
        <LectureHeader title={curLecture.title} />
        <LecturePlayer url={curLecture.link} />
        {/* <LectureFooter lecture={curLecture} /> */}
      </Flex>
      {/* <LectureSidebar lecture={curLecture} /> */}
    </PageBlock>
  );
};

export default LecturePage;
