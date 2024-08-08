import Text from "@components/common/text/Text";
import { Flex } from "../../common/flex/Flex";
import { PATH } from "@router/Constants";
import { COURSE_ID, LECUTRE_ORDER } from "@pages/Service/Lecture/constants";
import { CurriculumItemBlock } from "./CurriculumItem.style";
import { color } from "@styles/style";
import Button from "../../common/button/Button";
import { deleteLecture } from "@apis/course/adminCourseApi";
import { HTTP_STATUS_CODE } from "@apis/apiConstants";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { updateLecture } from "@apis/course/adminCourseApi";
import { CheckIcon, CheckboxIcon } from "@assets/svg/icons";

const CurriculumItem = ({ order, title, time, type, id, url, isCompleted }) => {
  const { courseId } = useParams();
  const lectureQueryString = `?${COURSE_ID}=${courseId}&${LECUTRE_ORDER}=${order}`;
  const [newTitle, setNewTitle] = useState(title);
  const [newTime, setNewTime] = useState(time);
  const [newUrl, setNewUrl] = useState(url);
  const [newOrder, setNewOrder] = useState(order);
  const [isEdit, setIsEdit] = useState(false);

  //

  const handleDeleteBtnClick = async () => {
    const isConfirm = confirm("목차를 삭제하시겠습니까?");
    if (isConfirm) {
      try {
        const response = await deleteLecture(id);
        if (response.status === HTTP_STATUS_CODE.NO_CONTENT) {
          alert("삭제를 완료했습니다.");
          location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUpdateBtnClick = () => {
    setIsEdit(true);
  };

  const handleUpdateLecture = async () => {
    try {
      const response = await updateLecture(id, {
        lectureOrder: order,
        time: time,
        link: url,
        title: title,
        courseId: params.courseId,
      });
      alert("수정에 성공했습니다.");
      setIsEdit(false);
    } catch (error) {
      console.log(error);
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
            stroke={isCompleted ? color.green : color.gray400}
          />
        )}
        <Text typo="bodyRg700">
          {order} .&nbsp; {title}
        </Text>
      </Flex>

      <Flex align="center" gap="1rem">
        {type === "admin" && (
          <>
            <Button fill onClick={handleUpdateBtnClick}>
              수정하기
            </Button>
            <Button outline onClick={handleDeleteBtnClick}>
              삭제하기
            </Button>
          </>
        )}
        <Text type="captionRg400" color={color.gray400}>
          {Math.floor(time / 60) + "분"}
        </Text>
      </Flex>
      {isEdit && (
        <Flex direction="column">
          <button onClick={() => setIsEdit(false)}> X </button>
          <label>
            제목:
            <input
              placeholder="제목"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </label>
          <label>
            강의시간:
            <input
              placeholder="강의시간"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
            />
          </label>
          <label>
            url:
            <input
              placeholder="url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
          </label>
          <label>
            강의순서:
            <input
              placeholder="강의순서"
              value={newOrder}
              onChange={(e) => setNewOrder(e.target.value)}
            />
          </label>
          <button onClick={handleUpdateLecture}>수정완료</button>
        </Flex>
      )}
    </CurriculumItemBlock>
  );
};

export default CurriculumItem;
