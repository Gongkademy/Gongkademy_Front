import { color, typo } from "@styles/style";
import styled from "styled-components";

export const MyCourseCardImage = styled.div`
  width: 296px;
  height: 224px;
  border-radius: 16px;
  background-color: ${color.gray200};
`;

export const TotalCourseProcess = styled.div`
  width: 296px;
  height: 8px;
  border-radius: 8px;
  background-color: ${color.gray100};
`;

export const MyCourseName = styled.p`
  font: ${typo.bodyLg700};
  color: ${color.black};
`;

export const MyCourseProcess = styled.div`
  width: 100px;
  /* 수강률에 따라 width에 변화값을 줄 것 */
  height: 8px;
  border-radius: 8px;
  background-color: ${color.black};
`;

export const MyCourseContainer = styled.div`
  width: 296px;
  height: 312px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MyCourseProcessContainer = styled.div`
  width: 296px;
  height: 38px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    color: ${color.gray700};
    font: ${typo.bodySm400};
  }
`;
