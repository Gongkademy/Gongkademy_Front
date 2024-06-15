import React, { useContext } from "react";
import { CancelIconBox, ModalBackground, ModalBlock } from "./Modal.style";
import { isAxiosError } from "axios";
import { Link } from "react-router-dom";
import { Logo } from "@components/common/logo/Logo";
import { Flex } from "./LoginModal.style";
import { useInput } from "@hooks/useInput";
import { login } from "@apis/members/membersApi";
import Button from "@components/common/button/Button";
import { InputGroup } from "@components/common/input/InputGroup";
import LOGIN_CONSTATNT from "./Constant";
import { PwdInputGroup } from "@components/common/input/PwdInputGroup";
import jsonLocalStorage from "@utils/jsonLocalStorage";
import { useLocation } from "react-router-dom";
import { LoginContext } from "@contexts/LoginContext";
import { CancelIcon } from "@assets/svg/icons";
import { PATH } from "@router/Constants";
const EMAIL = LOGIN_CONSTATNT.email;
const PWD = LOGIN_CONSTATNT.password;

export const LoginModal = ({ setIsModalOpen }) => {
  //이렇게 하면 모달이 뜨기전 위치가 기억되네.
  const location = useLocation();
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const { actions } = useContext(LoginContext);

  const handleLoginBtnClick = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      //TODO: 로그인 실패 상태코드 작성해야함
      if (response.status === 200) {
        jsonLocalStorage.setItem("accessToken", response.data.accessToken);
        jsonLocalStorage.setItem("refreshToken", response.data.refreshToken);
        actions.setIsLogin(true);
        setIsModalOpen(false);
      }
      console.log(response);
    } catch (error) {
      if (isAxiosError(error)) {
        //TODO: ERROR 핸들링 생각해야함.
        alert(error);
      }
    }
  };
  const handleSignupBtnClick = (e) => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ModalBackground
        onClick={() => {
          setIsModalOpen(false);
        }}
      />
      <ModalBlock>
        <CancelIconBox
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <CancelIcon />
        </CancelIconBox>

        <Logo isLink={false} />

        {/* TODO: autoComplete 적용하기 */}
        <Flex gap={"8px"}>
          <InputGroup
            state={"default"}
            field={EMAIL}
            onChange={handleEmailChange}
          />
          <PwdInputGroup
            state={"default"}
            field={PWD}
            onChange={handlePasswordChange}
          />
        </Flex>

        <Button type="cta" shape="filledBold" onClick={handleLoginBtnClick}>
          로그인
        </Button>

        <Link to="/member/find-password">
          <span>비밀번호 찾기</span>
        </Link>

        <Link to={PATH.SIGN_UP}>
          <Button
            type="normal"
            shape="outlinedRg"
            onClick={handleSignupBtnClick}
          >
            회원가입
          </Button>
        </Link>
      </ModalBlock>
    </>
  );
};
