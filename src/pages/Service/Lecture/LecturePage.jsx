import LecturePlayer from "@components/lecture/LecturePlayer";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { COURSE_ID, LECTURE_ID, LECUTRE_ORDER, LECUTRE_URL } from "./constants";
import { Flex } from "@components/common/flex/Flex";
import useLectureStore from "@stores/course/lectureStore";
import { getPlayerLatestLecture } from "@apis/course/playerApi";
import { HTTP_STATUS_CODE } from "@apis/apiConstants";
import { getLecture } from "@apis/course/courseApi";
import LectureHeader from "@components/lecture/LectureHeader";
import Text from "@components/common/text/Text";
import { typo } from "@styles/style";
import LectureCommunityCard from "@components/lecture/LectureCommunityCard";

const LecturePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lecture, setLecture] = useState("");
  const [startPoint, setStartPoint] = useState(0);
  const fetchLecture = async () => {
    let lid = 0;
    try {
      const response = await getLecture({
        courseId: searchParams.get(COURSE_ID),
        lectureOrder: searchParams.get(LECUTRE_ORDER),
      });

      setLecture(response.data);
      console.log(response.data);
      lid = response.data.lectureId;
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await getPlayerLatestLecture(lid);
      setStartPoint(response.data.savePoint);
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
  }, [searchParams.get(LECUTRE_ORDER)]);

  console.log(lecture);
  return (
    <>
      <Flex direction="column" justify="center">
        {/* <LectureSidebar lecture={lecture} /> */}
        <Flex
          direction="column"
          width="100%"
          justify="center"
          align="center"
          gap="3rem"
        >
          <LectureHeader lecture={lecture} />
          <LecturePlayer lecture={lecture} startPoint={startPoint} />
          <Flex
            width="100%"
            direction="column"
            align="start"
            maxWidth="1100px"
            gap="1rem"
          >
            <Text typo={typo.titleSm700}>
              {searchParams.get(LECUTRE_ORDER)} . {lecture.title}
            </Text>
            <Text typo={typo.bodyLg400}>{"질문 33개"}</Text>
            <LectureCommunityCard
              title={"제목"}
              content={"미리보기"}
              commentCnt={33}
            />
            <LectureCommunityCard
              title={"제목"}
              content={"미리보기"}
              commentCnt={33}
            />
            <LectureCommunityCard
              title={"제목"}
              content={"미리보기"}
              commentCnt={33}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default LecturePage;
