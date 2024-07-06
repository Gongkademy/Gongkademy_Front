import styled from "styled-components";
import { color } from "@styles/style";

export const UnCheckedbox = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${color.gray100};
  cursor: pointer;
  border-radius: 4px;
  user-select: none; /* 드래그 금지 */
`;

export const StyledCheckboxInput = styled.input`
  display: none;
`;
