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
  const type = location.pathname.split("/")[2];
  const params = new URLSearchParams(
    location.search
  );
  const [pageNo, setPageNo] = useState(
    parseInt(params.get("pageNo"))
  );
  const { qnaList, fetchQnaList } = useQnaStore();
  const { concernList, fetchConcernList } =
    useConcernStore();
  useEffect(() => {
    if (type === "Q&A") {
      fetchQnaList(keyword, criteria, pageNo - 1);
    } else {
      fetchConcernList(
        keyword,
        criteria,
        pageNo - 1
      );
    }
  }, [type, pageNo]);
  const boardSearch = (keyword, criteria) => {
    if (type === "Q&A") {
      fetchQnaList(keyword, criteria, 0);
    } else {
      fetchConcernList(keyword, criteria, 0);
    }
  };
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <SearchBar
          link={
            PATH.COMMUNITY(type) +
            `?keyword=${keyword}&criteria=${criteria}&pageNo=1`
          }
          search={boardSearch}
          type={type}
          setPageNo={setPageNo}
        />
        <CommunityBoardPage
          type={type}
          pageNo={pageNo}
          initialBoardList={
            type === "Q&A"
              ? qnaList.data
              : concernList.data
          }
        />
        <Pagination
          totalItems={
            type === "Q&A"
              ? qnaList.totalCount
              : concernList.totalCount
          }
          itemCountPerPage={10}
          pageCount={5}
          currentPage={pageNo}
          setPageNo={setPageNo}
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
