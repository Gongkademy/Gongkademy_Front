import styled from "styled-components";
import { typo } from "@styles/style";
const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  font: ${typo.titleRg700};
`;

export const PageTitle = ({ children }) => {
  return <TitleBlock>{children}</TitleBlock>;
};
