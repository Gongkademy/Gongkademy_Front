import { CheckIcon } from "@assets/svg/icons";
import Text from "@components/common/text/Text";
import { Flex } from "../../common/flex/Flex";
import { PATH } from "../../../router/Constants";
import { COURSE_ID, LECTURE_ID } from "@pages/Service/Lecture/constants";
import { CurriculumItemBlock } from "./CurriculumItem.style";
import { color } from "../../../styles/style";
import Button from "../../common/button/Button";
import { deleteLecture } from "../../../apis/course/adminCourseApi";
import { HTTP_STATUS_CODE } from "../../../apis/apiConstants";

const CurriculumItem = ({ lecture, type }) => {
  const lectureQueryString = `?${LECTURE_ID}=${1}&${COURSE_ID}=${1}`;
  console.log(lecture);
  const handleDeleteBtnClick = async () => {
    const isConfirm = confirm("목차를 삭제하시겠습니까?");
    if (isConfirm) {
      try {
        const response = await deleteLecture(lecture.lectureId);
        if (response.status === HTTP_STATUS_CODE.NO_CONTENT) {
          alert("삭제를 완료했습니다.");
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <CurriculumItemBlock
      as={type === "admin" && "div"}
      to={PATH.LECTURE + lectureQueryString}
    >
      <Flex gap="0.75rem" align="center">
        {type === "user" && (
          <CheckIcon
            width="1rem"
            stroke={lecture.isCompleted ? color.green : color.gray400}
          />
        )}
        <Text typo="bodyRg700">
          {lecture.lectureOrder} .&nbsp; {lecture.title}
        </Text>
      </Flex>

      <Flex align="center" gap="1rem">
        {type === "admin" && (
          <>
            <Button fill>수정하기</Button>
            <Button outline onClick={handleDeleteBtnClick}>
              삭제하기
            </Button>
          </>
        )}
        <Text type="captionRg400" color={color.gray400}>
          {Math.floor(lecture.time / 60) + "분"}
        </Text>
      </Flex>
    </CurriculumItemBlock>
  );
};

export default CurriculumItem;
