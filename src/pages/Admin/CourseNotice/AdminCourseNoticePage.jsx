import {
  deleteCourseNotice,
  updateCourseInfo,
} from "@apis/course/adminCourseApi";
import CourseEditor from "@components/admin/course/CourseEditor";
import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import Input from "@components/common/input/Input";
import {
  modifyCourseNotice,
  registCourseNotice,
  useCourseIntroQuery,
  useCourseNoticeQuery,
} from "@queries/useCourseDetailQuery";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";

const AdminCourseNoticePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const params = useParams();
  const { data, isSuccess, error } = useCourseNoticeQuery(params.courseId, 0);
  // const deleteNotice = deleteCourseNotice();
  // const modifyNotice = modifyCourseNotice();
  // const registNotice = registCourseNotice();

  const getCourseNotice = () => {
    if (isSuccess) {
      console.log(data);
      setContent(data.data.content);
    }
  };
  return (
    <Flex direction="column" gap="80px">
      <Flex gap="8px">
        {/* <Button onClick={registCourseNotice} fill>
          수정하기
        </Button> */}
        <Button onClick={getCourseNotice} outline>
          불러오기
        </Button>
      </Flex>

      <Flex>
        <Input
          placeholder="제목을 입력해주세요"
          label={"제목"}
          onChange={setTitle}
        />
      </Flex>
      <Flex>
        <p>내용</p>
        <CourseEditor
          value={content}
          onChange={setContent}
          width={"800px"}
          height={"100px"}
        />
      </Flex>
    </Flex>
  );
};
export default AdminCourseNoticePage;
