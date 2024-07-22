import { Logo } from "@components/common/logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { HeaderBlock, SearchBar } from "@components/header/Header.style";
import { useContext, useState } from "react";
import Button from "@components/common/button/Button";
import { LoginContext } from "@contexts/LoginContext";
import { PATH } from "@router/Constants";
import { Flex } from "../common/flex/Flex";
import { Google } from "@assets/svg/logo";
import axios from "axios";
import { useLoginStore } from "@stores/member/loginStore";

// const GOOGLE_LOGIN_URL = import.meta.env.VITE_GOOGLE_LOGIN_URL;
const GOOGLE_LOGIN_URL = import.meta.env.VITE_GOOGLE_LOGIN_URL;
const Header = () => {
  const { state, actions } = useContext(LoginContext);
  const isLogin = useLoginStore((state) => state.isLogin);
  const navigate = useNavigate();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    actions.setIsLogin(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };
  // TODO: 이 방법으로 시도해보기
  const handleLoginBtnClick = () => {
    axios.get(GOOGLE_LOGIN_URL).then((response) => alert(response));
  };

  return (
    <>
      <HeaderBlock>
        <Logo />
        <Flex>
          <Link to={PATH.COURSES}>
            <Button text>강의</Button>
          </Link>
          <Link
            to={
              PATH.COMMUNITY("concern") + "?keyword=&criteria=최신순&pageNo=1"
            }
          >
            <Button text>커뮤니티</Button>
          </Link>
        </Flex>

        <SearchBar placeholder="어떤 걸 배워볼까요?" />

        <Flex aling="center" gap="0.5rem">
          {isLogin ? (
            <>
              <Link to={PATH.MY_PAGE}>
                <Button fill>마이페이지</Button>
              </Link>
              <Button text onClick={handleLogoutClick}>
                로그아웃
              </Button>
            </>
          ) : (
            <Link to={GOOGLE_LOGIN_URL}>
              {/* <div onClick={handleLoginBtnClick}> */}
              <Button outline>
                <Google width="1rem" />
                Google로 시작하기
              </Button>
              {/* </div> */}
            </Link>
          )}
        </Flex>
      </HeaderBlock>
    </>
  );
};
export default Header;
