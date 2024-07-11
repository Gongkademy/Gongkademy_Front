import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { StyledNav, StyledDiv } from "./AdminLectureNavbar.Style";
import { ADMIN_PATH } from "../../../router/Constants";
const AdminLectureNavbar = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <StyledNav>
          <Link to={ADMIN_PATH.LECTURE_INTRODUCE}>
            <StyledDiv
              active={
                location.pathname.includes("introduce") ? "true" : undefined
              }
            >
              강의소개
            </StyledDiv>
          </Link>
          <Link to={ADMIN_PATH.LECTURE_ORDER}>
            <StyledDiv
              active={location.pathname.includes("order") ? "true" : undefined}
            >
              목차
            </StyledDiv>
          </Link>
          <Link to={ADMIN_PATH.LECTURE_QNA}>
            <StyledDiv
              active={location.pathname.includes("qna") ? "true" : undefined}
            >
              QnA
            </StyledDiv>
          </Link>
          <Link to={ADMIN_PATH.COURSE_REVIEW}>
            <StyledDiv
              active={
                location.pathname.includes("course-review") ? "true" : undefined
              }
            >
              수강평
            </StyledDiv>
          </Link>
          <Link to={ADMIN_PATH.LECTURE_NOTICE}>
            <StyledDiv
              active={location.pathname.includes("notice") ? "true" : undefined}
            >
              공지사항
            </StyledDiv>
          </Link>
        </StyledNav>
      </div>
      <Outlet />
    </div>
  );
};
export default AdminLectureNavbar;
