import { PageTitle } from "@components/common/page/PageTitle";
import { MyPageContainer, Tab } from "./MyPage.style";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "@components/common/page/PageLayout";
import { PATH } from "@router/Constants";
import { useState } from "react";
import ConfirmModal from "@components/common/modal/confirmModal/ConfirmModal";
import { deleteMember } from "@apis/members/membersApi";
import { useMutation } from "@tanstack/react-query";
import MemberDeleteConfirmModal from "@components/common/modal/confirmModal/MemberDeleteConfirmModal";

const MyPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const outMemberMutation = useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      console.log("성공");
    },
    onError: (error) => {
      console.log("onError", error);
    },
  });

  const handleConfirmBtnClick = () => {
    outMemberMutation.mutate();
    setIsOpen(false);
    navigate(PATH.ROOT);
  };

  return (
    <PageLayout>
      <PageTitle>마이페이지</PageTitle>
      <MemberDeleteConfirmModal
        isOpen={isOpen}
        title={"정말 탈퇴하실 건가요?"}
        cautions={["그동안 올렸던 질문들과 강좌 수강 기록이 사라져요"]}
        messages={["그래도 회원 탈퇴하시겠어요?"]}
        confirm={{ text: "탈퇴하기", onClick: handleConfirmBtnClick }}
        close={{ text: "닫기", onClick: () => setIsOpen(false) }}
      />
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
        <Tab onClick={() => setIsOpen(true)}>회원탈퇴</Tab>
      </MyPageContainer>
    </PageLayout>
  );
};

export default MyPage;
