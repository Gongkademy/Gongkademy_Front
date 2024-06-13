import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { color } from "../../../styles/palette";
export const CourseMenuBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

export const StyledLink = styled(NavLink)`
  color: ${color.gray500};

  &.active {
    border-bottom: solid black 2px;
    color: ${color.black};
  }
`;
