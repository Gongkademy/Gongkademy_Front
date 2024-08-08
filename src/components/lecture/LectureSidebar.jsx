import { useSearchParams } from "react-router-dom";
import { LectureSidebarBlock } from "./LectureSidebar.style";
import { useEffect } from "react";
import { useLectureListQuery } from "@apis/course/courseApi";
import { COURSE_ID } from "@pages/Service/Lecture/constants";

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

      {isSuccess && lectureList.data.map((lecture) => <p>{lecture.title}</p>)}
    </LectureSidebarBlock>
  );
};

export default LectureSidebar;
