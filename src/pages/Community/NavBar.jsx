import { Navigate } from "./NavBar.style";
import Button from "@components/common/button/Button";
import { PATH } from "@router/Constants";
import {
  Link,
  useLocation,
} from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  return (
    <Navigate>
      <Link to={PATH.COMMUNITY("Q&A")}>
        {location.pathname.includes("Q&A") ? (
          <Button text bold>
            🙋 Q&A
          </Button>
        ) : (
          <Button text> 🙋 Q&A</Button>
        )}
      </Link>
      <Link to={PATH.COMMUNITY("concern")}>
        {location.pathname.includes("concern") ? (
          <Button text bold>
            🤔 고민
          </Button>
        ) : (
          <Button text> 🤔 고민</Button>
        )}
      </Link>
    </Navigate>
  );
};
export default NavBar;
