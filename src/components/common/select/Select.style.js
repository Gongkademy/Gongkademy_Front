import { styled } from "styled-components";

export const StyledSelect = styled.div`
  width: ${(props) => props.width || "100%"};
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 0.5rem;
`;
export const Selected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
`;
export const SelectedValue = styled.div`
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
`;

export const Options = styled.ul`
  list-style-type: none;
  margin-top: 0.625rem;
  width: 100%;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 0.5rem;
  position: absolute;
  cursor: pointer;
  display: ${(props) => (props.active ? "initial" : "none")};
  z-index: 1000;
`;
export const Option = styled.li`
  line-height: 48px;
  width: 100%;
  padding: 0rem 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray200};
  }
  border-radius: 0.5rem;
`;
