import { color } from "@styles/style";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  z-index: 50;

  background-color: ${color.black};
  height: 4.5rem;
  padding: 0.75rem 3rem;
`;
