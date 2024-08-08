import { updateCourseInfo } from "@apis/course/adminCourseApi";
import CourseEditor from "@components/admin/course/CourseEditor";
import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import { useCourseIntroQuery } from "@apis/queries/useCourseDetailQuery";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";

const AdminCourseIntroducePage = () => {
  const [summary, setSummary] = useState("");
  const [preCourse, setPreCourse] = useState("");
  const [content, setContent] = useState("");
  const params = useParams();
  const { data, isSuccess, error } = useCourseIntroQuery(params.courseId);

  const registCourseIntro = async () => {
    try {
      const response = await updateCourseInfo(params.courseId, {
        summary: summary,
        preCourses: preCourse,
        introduction: content,
      });
      console.log(response);
      alert("등록에 성공했습니다.");
    } catch (error) {
      console.log(error);
    }
  };
  const getCourseIntro = async () => {
    console.log(error);
    console.log(data);
    if (isSuccess) {
      setContent(data.data.introduction);
      setSummary(data.data.summary);
      setPreCourse(data.data.preCourses);
    } else {
      console.log(1);
    }
  };
  return (
    <Flex direction="column" gap="80px">
      <Flex gap="8px">
        <Button onClick={registCourseIntro} fill>
          등록버튼
        </Button>
        <Button onClick={getCourseIntro} outline>
          불러오기
        </Button>
      </Flex>

      <Flex>
        <p>강의요약</p>
        <CourseEditor
          value={summary}
          onChange={setSummary}
          width={"800px"}
          height={"100px"}
        />
      </Flex>
      <Flex>
        <p>선수강 강의</p>
        <CourseEditor
          value={preCourse}
          onChange={setPreCourse}
          width={"800px"}
          height={"100px"}
        />
      </Flex>
      <Flex>
        <p>강의소개</p>
        <CourseEditor
          image={true}
          value={content}
          onChange={setContent}
          width={"800px"}
          height={"600px"}
        />
      </Flex>
    </Flex>
  );
};
export default AdminCourseIntroducePage;
