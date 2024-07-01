import styled from "styled-components";
import { color, typo } from "@styles/style";
export const StyledInput = styled.input`
  position: relative;
  font: ${typo.bodySm400};

  min-height: 3rem;
  width: 100%;
  flex: 1;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;

  color: ${color.gray600};
  background-color: ${color.gray100};
  outline: none;
  border: none;

  ${({ state }) => {
    if (state === null) {
      return css`
        &:hover {
          outline: solid 0.0625rem ${color.gray700};
        }

        &:focus {
          color: ${color.black};
          outline: solid 0.0625rem ${color.black};
        }

        &:disabled {
          color: ${color.gray300};
        }
      `;
    }
    if (state === "success") {
      return css`
        color: ${color.black};
      `;
    }
    if (state === "error") {
      return css`
        color: ${color.black};
        outline: solid 0.0625rem ${color.pinkRed};
      `;
    }
  }};
`;
