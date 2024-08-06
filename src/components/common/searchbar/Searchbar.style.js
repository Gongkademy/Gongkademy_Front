import { color } from "@styles/style";
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
  background-color: ${color.gray100};
  padding: 12px 16px;
  border-radius: 8px;
`;
