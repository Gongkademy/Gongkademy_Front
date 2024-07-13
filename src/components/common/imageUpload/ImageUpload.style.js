import styled from "styled-components";
import { color } from "../../../styles/style";

export const Thumnail = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const ImageLabel = styled.label`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${color.gray600};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${color.gray100};

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
