import { color, typo } from "@styles/style";
import styled from "styled-components";

export const CourseContianer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 296px);
  grid-template-rows: repeat(2, 296px);
  gap: 24px 16px;
`;

export const CourseBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;

export const Thumbnail = styled.div`
  width: 296px;
  height: 224px;
  border-radius: 8px;

  img {
    width: inherit;
    height: inherit;
    border-radius: inherit;
  }
`;
export const SubjectContainer = styled.div`
  padding: 8px 0px;
  height: 64px;
`;

export const SubjectTitle = styled.p`
  font: ${typo.bodyLg700};
`;
export const SubjectDesc = styled.p`
  font: ${typo.bodySm400};
  color: ${color.gray700};
`;
