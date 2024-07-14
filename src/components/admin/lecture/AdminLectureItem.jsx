import { Link } from "react-router-dom";
import { ADMIN_PATH, PATH } from "../../../router/Constants";
import { typo } from "../../../styles/style";
import Checkbox from "../../common/checkbox/Checkbox";
import { Flex } from "../../common/flex/Flex";
import Text from "../../common/text/Text";
import { useState } from "react";
import { updateCourseStatus } from "../../../apis/course/adminCourseApi";

const OPEN = "OPEN";
const WAIT = "WAIT";
const AdminLectureItem = ({ course }) => {
  const [isOpen, setIsOpen] = useState(course.status === OPEN);
  const handleCheckboxChange = async (event) => {
    const isConfirm = confirm(
      isOpen ? "강좌를 닫겠습니까?" : "강좌를 오픈 하시겠습니까?"
    );
    if (isConfirm) {
      try {
        const response = await updateCourseStatus(course.id);
        console.log(response);
        setIsOpen(response.data.status === OPEN);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Flex align="center" justify="space-between" width="100%">
      <Link to={ADMIN_PATH.COURSE_INTRODUCE(course.id)}>
        <Text typo={typo.titleRg700}>{course.title}</Text>
      </Link>

      <Checkbox checked={isOpen} onChange={handleCheckboxChange}>
        {isOpen ? "오픈" : "대기중"}
      </Checkbox>
    </Flex>
  );
};

export default AdminLectureItem;
