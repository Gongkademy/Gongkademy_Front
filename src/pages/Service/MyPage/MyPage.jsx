import { PageTitle } from "@components/common/page/PageTitle";
import { MyPageContainer, Tab } from "./MyPage.style";
import { Link } from "react-router-dom";
import PageLayout from "@components/common/page/PageLayout";
import { PATH } from "@router/Constants";

const MyPage = () => {
  return (
    <PageLayout>
      <PageTitle>마이페이지</PageTitle>
      <MyPageContainer>
        <Link to={PATH.MY_COURSE}>
          <Tab>나의 강좌</Tab>
        </Link>
        <Link to={PATH.MY_COMMUNITY("post")}>
          <Tab>나의 게시글</Tab>
        </Link>
        <Link to={PATH.MY_INFO_UPDARTE}>
          <Tab>회원정보수정</Tab>
        </Link>
        <Link to={PATH.MY_NOTIFICATION_SETTING}>
          <Tab>알림</Tab>
        </Link>
        <Link to={PATH.MEMBER_DELETE}>
          <Tab>회원탈퇴</Tab>
        </Link>
      </MyPageContainer>
    </PageLayout>
  );
};

export default MyPage;
