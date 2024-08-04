import { color, typo } from "@styles/style";
import styled, { css } from "styled-components";

export const MyCourseGrid = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  flex-wrap: wrap;
`;

export const SelectedCourseTitle = styled.p`
  font: ${typo.titleSm700};
  color: ${color.gray300};

  ${({ selected }) =>
    selected &&
    css`
      font: ${typo.titleSm700};
      color: ${color.black};
      border-bottom: solid ${color.black} 2px;
    `}
`;

export const TitleFlex = styled.div`
  display: flex;
  gap: 52px;
`;
