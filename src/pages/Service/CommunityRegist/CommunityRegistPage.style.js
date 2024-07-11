import { styled } from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  gap: 1rem;
`;
export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 38rem;
`;
export const StyledInput = styled.input`
  flex-shrink: 1;
  flex-grow: 1;
  width: 38rem;
  min-width: 12.5rem;
  height: 3rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.color.gray100};
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid rgb(143, 143, 143);
`;
export const CourseContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
