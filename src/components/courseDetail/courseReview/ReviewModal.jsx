import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import {
  ModalTitle,
  customModalStyles,
} from "@components/common/modal/confirmModal/ConfirmModal.style";
import Modal from "react-modal";

const ReviewModal = ({ title, confirm, close, isOpen, children }) => {
  return (
    <>
      <Modal isOpen={isOpen} closeTimeoutMS={150} style={customModalStyles}>
        <ModalTitle>{title}</ModalTitle>
        {children}
        <Flex width="100%" gap="1rem">
          <Button outline width={"100%"} onClick={close.onClick}>
            {close.text}
          </Button>
          <Button fill width={"100%"} onClick={confirm.onClick}>
            {confirm.text}
          </Button>
        </Flex>
      </Modal>
    </>
  );
};

export default ReviewModal;
