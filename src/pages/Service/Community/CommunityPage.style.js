import { styled } from "styled-components";
import Button from "@components/common/button/Button";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 3rem;
  justify-content: center;
`;
export const ContentContainer = styled.div`
  // flex: 1;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledButton = styled(Button)`
  width: 38rem;
  justify-content: center;
  position: fixed;
  bottom: 3rem;
  // left: 50%;
  // transform: translateX(-50%);
  z-index: 1000;
`;
