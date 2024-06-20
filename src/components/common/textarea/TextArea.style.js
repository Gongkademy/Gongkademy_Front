import styled from "styled-components";
import { color, typo } from "../../../styles/style";
export const TextAreaBlock = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  outline: none;
  border-radius: 0.75rem;
  color: ${color.black};
  font: ${typo.bodySm400};

  &::placeholder {
    color: ${color.gray700};
  }
`;
