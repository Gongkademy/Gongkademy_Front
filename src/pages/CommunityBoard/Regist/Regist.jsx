import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  StyledInput,
} from "./Regist.style";
import RegistNav from "./RegistNav";
import RegistCourse from "./RegistCourse";
import ToastConcern from "./ToastConcern";
import ToastQna from "./ToastQna";
const Regist = () => {
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
export default Regist;
