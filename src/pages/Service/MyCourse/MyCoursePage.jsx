import { Flex } from "@components/common/flex/Flex";
import MyCourseCard from "./MyCourseCard";
import {
  SelectedCourseTitle,
  MyCourseGrid,
  TitleFlex,
} from "./MyCoursePage.style";
import { useState } from "react";

const MyCoursePage = () => {
  const courseArr = [
    { title: "강의1" },
    { title: "강의2" },
    { title: "강의3" },
    { title: "강의4" },
    { title: "강의5" },
  ];

  const [myProcessingCourseBtn, setMyProcessingCourseBtn] = useState(true);

  console.log(myProcessingCourseBtn);
  return (
    <>
      <Flex width="100%" justify="start">
        <Flex gap="52px">
          <SelectedCourseTitle
            onClick={() => {
              setMyProcessingCourseBtn(true);
            }}
            selected={myProcessingCourseBtn}
          >
            수강 중인 강의
          </SelectedCourseTitle>
          <SelectedCourseTitle
            onClick={() => {
              setMyProcessingCourseBtn(false);
            }}
            selected={!myProcessingCourseBtn}
          >
            수강 완료한 강의
          </SelectedCourseTitle>
        </Flex>
      </Flex>

      <MyCourseGrid>
        {courseArr.map((course) => {
          return <MyCourseCard courseName={course.title} />;
        })}
      </MyCourseGrid>
    </>
  );
};

export default MyCoursePage;
