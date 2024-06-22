import SearchBar from "@components/common/searchbar/SearchBar";
import NavBar from "@components/community/NavBar/NavBar";

import {
  Container,
  ContentContainer,
  StyledButton,
} from "./CommunityPage.style";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { PATH } from "@router/Constants";
import CommunityBoardPage from "@components/community/communityBoard/CommunityBoardPage";
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
          <StyledButton fill bold>
            ✍️{" "}
            {type === "Q&A"
              ? "질문하기"
              : "고민 나누기"}
          </StyledButton>
        </Link>
      </ContentContainer>
    </Container>
  );
};

export default CommunityPage;
