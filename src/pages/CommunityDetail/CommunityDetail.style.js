import { styled } from "styled-components";
export const DetailBlock = styled.div`
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  width: 38rem;
  flex-direction: column;
  // align-items: center;
  padding-top: 3rem;
  gap: 0.2rem;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div`
  ${({ theme }) => theme.typo.bodyLg700};
`;
export const ContainerRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  align-items: ${({ type }) =>
    type === "center" ? "center" : "flex-start"};
`;
export const ContainerCol = styled.div`
  display: flex;
  flex-direction: column;
  jistify-content: center;
  align-items: center;
  cursor: ${({ type }) =>
    type === "icon" ? "pointer" : "auto"};
`;
export const Profile = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 2px solid black;
`;
export const StyledHr = styled.hr`
  width: 3rem;
  border: 0;
  border-top: 2px solid black;
  // margin: 0.5rem 0;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 3rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
export const Content = styled.pre`
  ${({ type, theme }) =>
    type === "black"
      ? theme.typo.bodyRg400
      : theme.typo.bodySm400};
  color: ${({ type, theme }) =>
    type === "black"
      ? "inherit"
      : theme.color.gray600};
  white-space: pre-wrap;
  word-wrap: break-word;
`;
export const QnaImg = styled.img`
  border: 1px solid black;
  width: 8.5rem;
  height: 4rem;
`;
export const CourseName = styled.p`
  ${({ theme }) => theme.typo.bodyRg700};
`;
