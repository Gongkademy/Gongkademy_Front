import { updateCourseInfo } from "@apis/course/adminCourseApi";
import CourseIntroEditor from "@components/admin/course/CourseIntroEditor";
import { Flex } from "@components/common/flex/Flex";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
const AdminCourseIntroducePage = () => {
  const [summary, setSummary] = useState("");
  const [preCourse, setPreCourse] = useState("");
  const [content, setContent] = useState("");
  const params = useParams();
  const editorRef = useRef(null);
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
  return (
    <Flex direction="column" gap="80px">
      <button onClick={registCourseIntro}>등록버튼</button>

      <Flex>
        <p>강의요약</p>
        <CourseIntroEditor
          content={summary}
          onChange={setSummary}
          width={"800px"}
          height={"100px"}
        />
      </Flex>
      <Flex>
        <p>선수강 강의</p>
        <CourseIntroEditor
          content={preCourse}
          onChange={setPreCourse}
          width={"800px"}
          height={"100px"}
        />
      </Flex>
      <Flex>
        <p>강의소개</p>
        <CourseIntroEditor
          image={true}
          content={content}
          onChange={setContent}
          width={"800px"}
          height={"600px"}
        />
      </Flex>
    </Flex>
  );
};
export default AdminCourseIntroducePage;
