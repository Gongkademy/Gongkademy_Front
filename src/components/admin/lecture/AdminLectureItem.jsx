import { Link } from "react-router-dom";
import { ADMIN_PATH, PATH } from "../../../router/Constants";
import { typo } from "../../../styles/style";
import Checkbox from "../../common/checkbox/Checkbox";
import { Flex } from "../../common/flex/Flex";
import Text from "../../common/text/Text";
import { useState } from "react";

const OPEN = "OPEN";
const WAIT = "WAIT";
const AdminLectureItem = ({ course }) => {
  console.log(course);
  const [isOpen, setIsOpen] = useState(course.staus === OPEN);

  return (
    <Flex align="center" justify="space-between" width="100%">
      <Link to={ADMIN_PATH.COURSE_INTRODUCE(course.id)}>
        <Text typo={typo.titleRg700}>{course.title}</Text>
      </Link>

      <Checkbox
        checked={isOpen}
        onChange={(event) => {
          setIsOpen(event.target.checked);
        }}
      >
        {isOpen ? "오픈" : "대기중"}
      </Checkbox>
    </Flex>
  );
};

export default AdminLectureItem;
