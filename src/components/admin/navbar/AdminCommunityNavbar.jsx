import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { StyledNav, StyledDiv } from "./AdminCommunityNavbar.Style";
import { ADMIN_PATH } from "../../../router/Constants";
const AdminCommunityNavbar = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <StyledNav>
          <Link to={ADMIN_PATH.COMMUNITY_NOTEICE}>
            <StyledDiv
              active={location.pathname.includes("notice") ? "true" : undefined}
            >
              공지사항
            </StyledDiv>
          </Link>
          <Link to={ADMIN_PATH.COMMUNITY_QNA}>
            <StyledDiv
              active={location.pathname.includes("qna") ? "true" : undefined}
            >
              QnA
            </StyledDiv>
          </Link>
          <Link to={ADMIN_PATH.COMMUNITY_CONCERN}>
            <StyledDiv
              active={
                location.pathname.includes("concern") ? "true" : undefined
              }
            >
              고민
            </StyledDiv>
          </Link>
        </StyledNav>
      </div>
      <Outlet />
    </div>
  );
};
export default AdminCommunityNavbar;
