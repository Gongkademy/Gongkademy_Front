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
  ${({ theme }) => theme.typo.bodyLg700};
`;
export const ContentContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const Content = styled.div`
  ${({ theme }) => theme.typo.bodySm400};
  color: ${({ theme }) => theme.color.gray500};
`;
export const Pointer = styled.div`
  cursor: pointer;
`;
