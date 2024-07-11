import styled from "styled-components";
import { color } from "../../styles/style";

export const MyPageContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 608px;
  margin: 0 auto;
  line-height: 22px;
`;
export const InputGroup = styled.div`
  width: 100%;
  line-height: 22px;
  height: 102px;
  font-size: 14px;

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  span {
    margin: 2px 0px;
    line-height: 20px;
    font-size: 14px;
  }

  input {
    width: 100%;
    height: 48px;
    flex: 1;
    border: none;
    border-radius: 8px;
    padding: 16px 12px;
    background: ${color.inputGray};
  }

  .inputContainer {
    width: 100%;
    display: flex;
    margin-top: 8px;
    gap: 8px;
  }

  .imgWrapper {
    position: absolute;
    margin-left: 570px;
    margin-top: -35px;
  }
`;
