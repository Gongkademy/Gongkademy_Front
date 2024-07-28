import styled, { css } from "styled-components";
import { color } from "../../../styles/style";

export const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.typo.bodyRg400};

  //Bold
  ${(props) =>
    props.bold &&
    css`
      ${({ theme }) => theme.typo.bodyRg700};
    `}

  //CTA
  ${(props) =>
    props.cta &&
    css`
      width: 100%;
      height: 3.625rem;
      padding: 1rem 0rem;
      border-radius: 0.5rem;
      ${({ theme }) => theme.typo.bodyLg700};
    `}
  

  //Filled
  ${(props) =>
    props.fill &&
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
  ${(props) =>
    props.outline &&
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
    ${(props) =>
    props.text &&
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
    `}
`;
