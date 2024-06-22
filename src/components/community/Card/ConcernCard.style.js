import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;
  padding: 12px 16px;
  gap: 0.5rem;
`;
export const Title = styled.div`
  ${({ theme }) => theme.typo.bodyLg700};
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContentContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const Content = styled.div`
  ${({ theme }) => theme.typo.bodySm400};
  color: ${({ theme }) => theme.color.gray500};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Pointer = styled.div`
  cursor: pointer;
`;
