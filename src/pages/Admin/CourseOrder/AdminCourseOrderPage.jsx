import { useParams } from "react-router-dom";
import { createLecture } from "../../../apis/course/adminCourseApi";
import Button from "../../../components/common/button/Button";
import { Flex } from "../../../components/common/flex/Flex";
import CurriculumItem from "../../../components/courseDetail/courseCurriculum/CurriculumItem";
import Input from "../../../components/common/input/Input";
import useForm from "../../../hooks/useForm";
import { HTTP_STATUS_CODE } from "../../../apis/apiConstants";
import { useEffect, useState } from "react";
import { getAllCourseContents } from "../../../apis/course/courseApi";

const AdminCourseOrderPage = () => {
  const params = useParams();
  const [lectures, setLectures] = useState([]);
  const { handleChange, handleSubmit, response } = useForm({
    initialValues: {
      lectureOrder: "",
      time: "",
      link: "",
      title: "",
      courseId: params.courseId,
    },
    onSubmit: createLecture,
  });

  const handleFormSubmit = async (event) => {
    await handleSubmit(event);
    if (response.status === HTTP_STATUS_CODE.CREATED) {
      alert("강의 등록에 성공했습니다");
    }
    console.log(response);
  };

  const fetchLecture = async () => {
    try {
      const response = await getAllCourseContents(params.courseId);
      setLectures(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLecture();
  }, []);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Button fill>목차 추가하기</Button>
        <Input
          name={"title"}
          placeholder={"강의 제목을 입력해주세요"}
          onChange={handleChange}
        />
        <Input
          name={"time"}
          placeholder={"강의시간을 입력해주세요"}
          onChange={handleChange}
        />
        <Input
          name={"link"}
          placeholder={"url을 입력해주세요"}
          onChange={handleChange}
        />
        <Input
          name={"lectureOrder"}
          placeholder={"몇번째 강의인가요?"}
          onChange={handleChange}
        />
      </form>
      {lectures.map((lecture) => (
        <CurriculumItem lecture={lecture} type="admin" />
      ))}
    </>
  );
};
export default AdminCourseOrderPage;
