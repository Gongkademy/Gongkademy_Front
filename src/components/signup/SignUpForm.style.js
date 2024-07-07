import styled from "styled-components";
import { StyledText } from "../common/text/Text.style";
import Button from "@components/common/button/Button";

export const SignUpFormBlock = styled.form`
  display: flex;
  width: 38rem;
  height: 100%;
  padding-bottom: 72px;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  margin: 0 auto;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const ErrorMessage = styled(StyledText)`
  position: absolute;
`;
