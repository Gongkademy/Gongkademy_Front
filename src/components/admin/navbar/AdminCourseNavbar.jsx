import { Link, useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { StyledNav, StyledDiv } from "./AdminCourseNavbar.Style";
import { ADMIN_PATH } from "../../../router/Constants";
const AdminCourseNavbar = () => {
  const location = useLocation();
  const params = useParams();
  return (
    <div>
      <div>
        <StyledNav>
          <Link to={ADMIN_PATH.COURSE_INTRODUCE(params.courseId)}>
            <StyledDiv
              active={
                location.pathname.includes("introduce") ? "true" : undefined
              }
            >
              강의소개
            </StyledDiv>
          </Link>
          <Link to={ADMIN_PATH.COURSE_ORDER(params.courseId)}>
            <StyledDiv
              active={location.pathname.includes("order") ? "true" : undefined}
            >
              목차
            </StyledDiv>
          </Link>
          <Link to={ADMIN_PATH.COURSE_QNA(params.courseId)}>
            <StyledDiv
              active={location.pathname.includes("qna") ? "true" : undefined}
            >
              QnA
            </StyledDiv>
          </Link>
          <Link to={ADMIN_PATH.COURSE_REVIEW(params.courseId)}>
            <StyledDiv
              active={location.pathname.includes("review") ? "true" : undefined}
            >
              수강평
            </StyledDiv>
          </Link>
          <Link to={ADMIN_PATH.COURSE_NOTICE(params.courseId)}>
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
export default AdminCourseNavbar;
