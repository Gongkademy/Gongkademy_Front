import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import {
  ModalCautionMessage,
  ModalMessage,
  ModalTitle,
  customModalStyles,
} from "@components/common/modal/confirmModal/ConfirmModal.style";
import Modal from "react-modal";

const MemberDeleteConfirmModal = ({
  title,
  cautions,
  messages,
  confirm,
  close,
  isOpen,
}) => {
  return (
    <Modal isOpen={isOpen} closeTimeoutMS={150} style={customModalStyles}>
      <ModalTitle>{title}</ModalTitle>
      <Flex direction="column" gap="0.1rem" align="center">
        {cautions?.map((caution) => (
          <ModalCautionMessage>{caution}</ModalCautionMessage>
        ))}
        {messages?.map((message) => (
          <ModalMessage>{message}</ModalMessage>
        ))}
      </Flex>
      <Flex width="100%" gap="1rem">
        <Button outline width={"100%"} onClick={confirm.onClick}>
          {confirm.text}
        </Button>
        <Button fill width={"100%"} onClick={close.onClick}>
          {close.text}
        </Button>
      </Flex>
    </Modal>
  );
};

export default MemberDeleteConfirmModal;
