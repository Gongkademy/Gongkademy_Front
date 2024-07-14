import { useNavigate } from "react-router-dom";
import { HTTP_STATUS_CODE } from "../../../apis/apiConstants";
import { createCourse } from "../../../apis/course/adminCourseApi";
import Button from "../../../components/common/button/Button";
import ImageUpload from "../../../components/common/imageUpload/ImageUpload";
import Input from "../../../components/common/input/Input";
import PageLayout from "../../../components/common/page/PageLayout";
import Text from "../../../components/common/text/Text";
import { typo } from "../../../styles/style";
import { useState } from "react";
import { ADMIN_PATH } from "../../../router/Constants";
const AdminLectureRegistPage = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const navigate = useNavigate();

  const handleEnrollBtnClick = async () => {
    try {
      const response = await createCourse({ title: title, courseImg: image });
      if (response.status === HTTP_STATUS_CODE.CREATED) {
        navigate(ADMIN_PATH.LECTURE);
      }
      alert("강좌가 성공적으로 등록되었습니다.");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <PageLayout>
      <Button fill onClick={handleEnrollBtnClick}>
        등록하기
      </Button>
      <Input
        placeholder={"강좌 제목을 입력해주세요"}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <Text typo={typo.titleRg700}>대표이미지</Text>
      <ImageUpload width={"450px"} height={"300px"} onChange={setImage} />
    </PageLayout>
  );
};
export default AdminLectureRegistPage;
