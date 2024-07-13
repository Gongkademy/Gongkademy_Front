import { styled } from "styled-components";
import Button from "@components/common/button/Button";
export const PageList = styled.ul`
  list-style: none;
  display: flex;
  //   flex-direction: column
  gap: 0.5rem;
`;
export const ActiveButton = styled(Button)`
  width: 3rem;
  background-color: black;
  color: white;
`;
