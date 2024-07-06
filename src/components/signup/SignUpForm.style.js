import styled from "styled-components";
import Text from "@components/common/text/Text";
import { StyledText } from "../common/text/Text.style";

export const SignUpFormBlock = styled.form`
  display: flex;
  width: 608px;
  flex-direction: column;
  gap: 8px;

  margin: 0 auto;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const ErrorMessage = styled(StyledText)`
  position: absolute;
`;
