import SearchBar from "@components/common/searchbar/SearchBar";
import NavBar from "@components/community/NavBar/NavBar";

import {
  Container,
  ContentContainer,
  StyledButton,
} from "./CommunityPage.style";
import { useLocation } from "react-router-dom";
import CommunityBoardPage from "@components/community/communityBoard/CommunityBoardPage";
const CommunityPage = () => {
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <SearchBar />
        <CommunityBoardPage type={type} />
      </ContentContainer>
    </Container>
  );
};

export default CommunityPage;
