import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  width: 38rem;
  gap: 0.5rem;
`;
export const StyledSearchBar = styled.input`
  flex-shrink: 1;
  flex-grow: 1;
  width: 31.5rem;
  min-width: 12.5rem;
  height: 3rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.color.gray100};
  padding: 12px 16px;
  border-radius: 8px;
`;
export const StyledSelect = styled.div`
  width: 6rem;
  width: ${(props) => props.width || "100%"};
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.color.gray100};
  //   padding: 12px 0px;
  border-radius: 8px;
`;
export const Selected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
`;
export const SelectedValue = styled.div`
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  //   text-overflow: ellipsis;
`;
export const Arrow = styled.div`
  //   font-size: 16px;
`;
export const Options = styled.ul`
  list-style-type: none;
  margin-top: 10px;
  width: 100%;
  //   height: 48px;
  border: none;
  outline: none;
  background-color: ${({ theme }) =>
    theme.color.gray100};
  //   padding: 0px 16px;
  border-radius: 8px;
  position: absolute;
  cursor: pointer;
  display: ${(props) =>
    props.active ? "initial" : "none"};
  z-index: 1000;
`;
export const Option = styled.li`
  line-height: 3rem;
  width: 6rem;
  padding: 0px 16px;
  &:hover {
    background-color: ${({ theme }) =>
      theme.color.gray200};
  }
  border-radius: 8px;
`;
