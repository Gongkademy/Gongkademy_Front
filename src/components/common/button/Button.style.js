import styled, { css } from "styled-components";
import { color, typo } from "../../../styles/style";

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["bold", "cta", "fill", "outline", "text"].includes(prop),
})`
  width: ${(props) => props.width};
  height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  font: ${typo.bodyRg400};
  //Bold
  ${({ bold }) =>
    !!bold &&
    css`
      font: ${typo.bodyRg700};
    `}
  //CTA
    ${({ cta }) =>
    !!cta &&
    css`
      width: 100%;
      height: 3.625rem;
      padding: 1rem 0rem;
      border-radius: 0.5rem;
      font: ${typo.bodyLg700};
    `}
    //Filled
    ${({ fill }) =>
    !!fill &&
    css`
      color: ${color.white};
      background-color: ${color.black};
      border: none;

      &:hover {
        background-color: ${color.gray800};
      }

      &:active {
        background-color: ${color.gray700};
      }

      &:disabled {
        color: ${color.gray400};
        background-color: ${color.gray200};
      }
    `}
    //Outlined
    ${({ outline }) =>
    !!outline &&
    css`
      color: ${color.black};
      background-color: ${color.white};
      border: 1px solid ${color.black};

      &:hover {
        color: ${color.gray800};
        border: 1px solid ${color.gray800};
      }

      &:active {
        color: ${color.gray700};
        border: 1px solid ${color.gray700};
      }

      &:disabled {
        color: ${color.gray400};
        border: 1px solid ${color.gray200};
      }
    `}
    //Text
    ${({ text }) =>
    !!text &&
    css`
      color: ${color.black};
      background-color: ${color.white};
      border: none;

      &:hover {
        color: ${color.gray800};
      }

      &:active {
        color: ${color.gray700};
      }

      &:disabled {
        color: ${color.gray400};
      }
    `};
`;
