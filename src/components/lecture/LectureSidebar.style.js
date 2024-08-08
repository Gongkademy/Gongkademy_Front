import { color } from "@styles/style";
import styled from "styled-components";

export const LectureSidebarBlock = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 26.25rem;
  height: 100%;
  overflow-y: auto;
  padding: 3.25rem 1.5rem;
  overscroll-behavior: none;
  gap: 3rem;
`;

export const TotalProcess = styled.div`
  max-width: 376px;
  height: 11px;
  border-radius: 8px;
  background-color: ${color.gray100};
`;

export const MyCourseProcess = styled.div`
  width: ${({ rate }) => rate + "%"};
  height: 11px;
  border-radius: 8px;
  background-color: ${color.black};
`;
