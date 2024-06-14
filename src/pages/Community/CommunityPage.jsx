import SearchBar from "@components/common/searchbar/SearchBar";
import NavBar from "@pages/Community/NavBar";
import Button from "@components/common/button/Button";
import { Container, ContentContainer } from "./CommunityPage.style";
import { Link, useLocation } from "react-router-dom";
import { PATH } from "@router/Constants";
import CommunityBoardPage from "../CommunityBoard/CommunityBoardPage";
const CommunityPage = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <SearchBar />
        <CommunityBoardPage />
        <Link
          to={PATH.COMMUNITY_REGIST(type)}
          state={{
            type: type,
          }}
        >
          <Button
            fill
            bold
            style={{
              width: "45%",
              justifyContent: "center",
              position: "fixed",
              bottom: "3rem",
              left: "31.7%",
              zIndex: 1000, // 다른 요소들 위에 렌더링되도록 설정
            }}
          >
            ✍️ {type === "Q&A" ? "질문하기" : "고민 나누기"}
          </Button>
        </Link>
      </ContentContainer>
    </Container>
  );
};

export default CommunityPage;
