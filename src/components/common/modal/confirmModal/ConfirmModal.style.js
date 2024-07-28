import { color, typo } from "@styles/style";
import styled from "styled-components";
export const ModalTitle = styled.p`
  font: ${typo.titleSm700};
  color: ${color.black};
`;

export const ModalCautionMessage = styled.p`
  font: ${typo.bodyRg700};
  color: ${color.pinkRed};
`;

export const ModalMessage = styled.p`
  font: ${typo.bodyRg400};
  color: ${color.black};
`;

export const Dim = styled.div`
  background-color: ${color.black};
  width: 100vh;
  height: 100vh;
  opacity: 0.25;
  position: absolute;
  top: 0;
  left: 0;
`;
export const customModalStyles = {
  overlay: {
    color: "black",
    backgroundColor: "rgba(0.17, 0.17, 0.17, 0.25)",
  },
  content: {
    border: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "fit-content",
    alignItems: "center",
    gap: "1rem",
    width: "fit-content",
    padding: "1.5rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1rem",
    backgroundColor: "white",
  },
};
