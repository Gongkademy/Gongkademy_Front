import { PageTitle } from "@components/common/page/PageTitle";
import { MyPageContainer, Tab } from "./MyPage.style";
import { Link } from "react-router-dom";
import PageLayout from "@components/common/page/PageLayout";

const MyPage = () => {
  return (
    <PageLayout>
      <PageTitle>마이페이지</PageTitle>
      <MyPageContainer>
        <Link to="update">
          <Tab>나의 강좌</Tab>
        </Link>
        <Link to="/">
          <Tab>나의 게시글</Tab>
        </Link>
        <Link to="/">
          <Tab>계정 정보</Tab>
        </Link>
        <Link to="/">
          <Tab>알림</Tab>
        </Link>
      </MyPageContainer>
    </PageLayout>
  );
};

export default MyPage;
