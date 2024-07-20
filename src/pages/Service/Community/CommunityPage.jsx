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
import useConcernStore from "@stores/Community/ConcernStore";
import useQnaStore from "@stores/Community/QnaStore";
const CommunityPage = () => {
  const { keyword, criteria } = useCommonStore();
  const location = useLocation();
  const [type, setType] = useState(
    location.pathname.split("/")[2]
  );
  const params = new URLSearchParams(
    location.search
  );
  const { qnaList } = useQnaStore();
  const { concernList } = useConcernStore();
  const [pageNo, setPageNo] = useState(
    parseInt(params.get("pageNo"))
  );
  useEffect(() => {
    setType(location.pathname.split("/")[2]);
    setPageNo(parseInt(params.get("pageNo")));
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
        <CommunityBoardPage
          type={type}
          pageNo={pageNo}
        />
        <Pagination
          totalItems={
            type === "Q&A"
              ? qnaList.length
              : concernList.length
          }
          itemCountPerPage={10}
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
