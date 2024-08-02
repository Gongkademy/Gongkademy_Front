import { color } from "@styles/style";
import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  border-radius: 0.25rem;
  max-width: 816px;
  border: 1px solid ${color.gray400};
`;
