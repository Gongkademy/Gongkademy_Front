import styled from "styled-components";
import { color, typo } from "@styles/style";

export const StyledText = styled.p`
  font: ${(props) => props.typo};
  color: ${(props) => props.color};
`;
