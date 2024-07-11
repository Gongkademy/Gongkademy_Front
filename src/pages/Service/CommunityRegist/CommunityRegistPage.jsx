import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, StyledInput } from "./CommunityRegistPage.style";
import RegistNav from "@components/community/Regist/RegistNav";
import RegistCourse from "@components/community/Regist/RegistCourse";
import ToastConcern from "@components/community/Regist/ToastConcern";
import ToastQna from "@components/community/Regist/ToastQna";
const CommunityRegistPage = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);
  const { type } = location.state || {
    type: "Q&A",
  };
  return (
    <Container>
      <RegistNav type={type} />
      <StyledInput placeholder="핵심 내용을 요약해주세요." />
      <RegistCourse />
      <ToastQna />
    </Container>
  );
};
export default CommunityRegistPage;
