import SearchBar from "@components/common/searchbar/SearchBar";
import NavBar from "@components/community/NavBar/NavBar";
import Pagination from "@components/common/pagination/Pagination";
import {
  Container,
  ContentContainer,
} from "./CommunityPage.style";
import { useLocation } from "react-router-dom";
import CommunityBoardPage from "@components/community/communityBoard/CommunityBoardPage";
import { PATH } from "@router/Constants";
import useCommonStore from "@stores/common/CommonStore";
import { useState, useEffect } from "react";
const CommunityPage = () => {
  const { keyword, criteria } = useCommonStore();
  const location = useLocation();
  const [type, setType] = useState(
    location.pathname.split("/")[2]
  );
  const params = new URLSearchParams(
    location.search
  );
  const pageNo = parseInt(params.get("pageNo"));
  useEffect(() => {
    setType(location.pathname.split("/")[2]);
  }, [location.pathname]);
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <SearchBar
          link={
            PATH.COMMUNITY(type) +
            `?keyword=${keyword}&criteria=${criteria}&pageNo=1`
          }
        />
        <CommunityBoardPage type={type} />
        <Pagination
          totalItems={51}
          itemCountPerPage={5}
          pageCount={5}
          currentPage={pageNo}
          type={type}
          link={
            PATH.COMMUNITY(type) +
            `?keyword=${keyword}&criteria=${criteria}`
          }
        />
      </ContentContainer>
    </Container>
  );
};

export default CommunityPage;
