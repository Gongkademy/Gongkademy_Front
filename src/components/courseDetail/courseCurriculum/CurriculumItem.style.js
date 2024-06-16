import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../../styles/palette";

export const CurriculumItemBlock = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 0;
  border-bottom: 1px solid ${color.gray400};

  &:hover {
    //TODO:채워야함
  }
`;
