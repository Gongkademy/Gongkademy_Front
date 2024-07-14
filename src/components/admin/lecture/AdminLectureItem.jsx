import { typo } from "../../../styles/style";
import Checkbox from "../../common/checkbox/Checkbox";
import { Flex } from "../../common/flex/Flex";
import Text from "../../common/text/Text";
import { useState } from "react";

const AdminLectureItem = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex align="center" justify="space-between" width="100%">
      <Text typo={typo.titleRg700}>{children}</Text>
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
