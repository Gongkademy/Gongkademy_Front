import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import { Container } from "./MeetballSelect.style";
import {
  Options,
  Option,
  StyledSelect,
} from "./Select.style";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmModal from "../modal/confirmModal/ConfirmModal";
const MeetballSelect = ({
  path,
  handleClickDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <ConfirmModal
        isOpen={isOpen}
        title="게시글을 삭제하시겠습니까?"
        cautions={[
          "삭제된 글과 댓글은 복구할 수 없어요",
        ]}
        confirm={{
          text: "확인",
          onClick: handleClickDelete,
        }}
        close={{
          text: "취소",
          onClick: () => setIsOpen(false),
        }}
      />
      <Options active={true}>
        <Link to={path}>
          <Option>수정</Option>
        </Link>
        <Option
          onClick={() => {
            setIsOpen(true);
          }}
        >
          삭제
        </Option>
      </Options>
    </Container>
  );
};
export default MeetballSelect;
