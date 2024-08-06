import { color, typo } from "@styles/style";
import styled from "styled-components";

export const ConcernContianer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 616px);
  grid-template-rows: repeat(3, 124px);
  gap: 16px 12px;
`;

export const ConcernBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  justify-content: space-between;

  width: 616px;
  height: 124px;
  gap: 12px;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Title = styled.h2`
  font: ${typo.bodyLg700};
`;
export const ContentPreview = styled.p`
  font: ${typo.bodyRg400};
  color: ${color.gray700};
`;

export const Date = styled.p`
  font: ${typo.bodySm400};
  color: ${color.gray500};
`;
