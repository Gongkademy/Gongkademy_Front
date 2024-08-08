import { useSearchParams } from "react-router-dom";
import { LectureSidebarBlock } from "./LectureSidebar.style";
import { useEffect } from "react";
import { useLectureListQuery } from "@apis/course/courseApi";
import { COURSE_ID } from "@pages/Service/Lecture/constants";
import CurriculumItem from "@components/courseDetail/courseCurriculum/CurriculumItem";

const LectureSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data: lectureList,
    isSuccess,
    isLoading,
  } = useLectureListQuery(searchParams.get(COURSE_ID));

  return (
    <LectureSidebarBlock>
      {isLoading && <p>로딩중</p>}

      {isSuccess &&
        lectureList.data.map((lecture) => (
          <CurriculumItem
            order={lecture.lectureOrder}
            title={lecture.title}
            time={lecture.time}
            type={"user"}
            id={lecture.lectureId}
            url={lecture.link}
          />
        ))}
    </LectureSidebarBlock>
  );
};

export default LectureSidebar;
