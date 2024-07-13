import Button from "../../../components/common/button/Button";
import ImageUpload from "../../../components/common/imageUpload/ImageUpload";
import Input from "../../../components/common/input/Input";
import PageLayout from "../../../components/common/page/PageLayout";
import Text from "../../../components/common/text/Text";
import { typo } from "../../../styles/style";

const AdminLectureRegistPage = () => {
  return (
    <PageLayout>
      <Button fill>등록하기</Button>
      <Input placeholder={"강좌 제목을 입력해주세요"} />
      <Text typo={typo.titleRg700}>대표이미지</Text>
      <ImageUpload width={"450px"} height={"300px"} />
    </PageLayout>
  );
};
export default AdminLectureRegistPage;
