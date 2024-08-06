import { typo, color } from "@styles/style";
import { styled } from "styled-components";

export const NoticeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 38rem;
  height: 3rem;
  padding: 12px 16px;
  align-items: center;
`;
export const NoticeTitle = styled.div`
  font: ${typo.bodyLg700};
`;
export const ContentContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const Content = styled.div`
  font: ${typo.bodySm400};
  color: ${color.gray500};
`;
export const Pointer = styled.div`
  cursor: pointer;
`;
