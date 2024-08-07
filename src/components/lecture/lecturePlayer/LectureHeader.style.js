import { color } from "@styles/style";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background-color: ${color.black};
  height: 4.5rem;
  padding: 0.75rem 3rem;
`;
