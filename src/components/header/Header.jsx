import { Logo } from "@components/common/logo/Logo";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import {
  HeaderBlock,
  BtnContainer,
  SearchBar,
} from "@components/header/Header.style";
import { useContext, useState } from "react";
import { LoginModal } from "../login/LoginModal";
import Button from "@components/common/button/Button";
import { LoginContext } from "@contexts/LoginContext";
import { PATH } from "@router/Constants";
import { Flex } from "../common/flex/Flex";

const Header = () => {
  const [isModalOpen, setIsModalOpen] =
    useState(false);
  const { state, actions } =
    useContext(LoginContext);
  const navigate = useNavigate();
  const handleLoginBtnClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const handleLogoutClick = (e) => {
    e.preventDefault();
    actions.setIsLogin(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
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
              PATH.COMMUNITY("concern") +
              "?keyword=&criteria=최신순&pageNo=1"
            }
          >
            <Button text>커뮤니티</Button>
          </Link>
        </Flex>

        <SearchBar placeholder="어떤 걸 배워볼까요?" />

        <Flex aling="center" gap="0.5rem">
          {state.isLogin ? (
            <>
              <Link to={PATH.MY_PAGE}>
                <Button fill>마이페이지</Button>
              </Link>
              <Button
                text
                onClick={handleLogoutClick}
              >
                로그아웃
              </Button>
            </>
          ) : (
            <>
              {" "}
              <Button
                outline
                onClick={handleLoginBtnClick}
              >
                로그인
              </Button>
              <Link to={PATH.SIGN_UP}>
                <Button fill bold>
                  회원가입
                </Button>
              </Link>
            </>
          )}
        </Flex>
      </HeaderBlock>
      {isModalOpen && (
        <LoginModal
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};
export default Header;
