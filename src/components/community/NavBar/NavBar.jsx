import { Navigate } from "./NavBar.style";
import Button from "@components/common/button/Button";
import { PATH } from "@router/Constants";
import useCommonStore from "@stores/common/CommonStore";
import {
  Link,
  useLocation,
} from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  const { setKeyword, setCriteria } =
    useCommonStore();
  const handleClickType = () => {
    setKeyword("");
    setCriteria("");
  };
  return (
    <Navigate>
      <Link
        to={
          PATH.COMMUNITY("Q&A") +
          "?keyword=&criteria=date&pageNo=1"
        }
      >
        {location.pathname.includes("Q&A") ? (
          <Button text bold>
            🙋 Q&A
          </Button>
        ) : (
          <Button text onClick={handleClickType}>
            {" "}
            🙋 Q&A
          </Button>
        )}
      </Link>
      <Link
        to={
          PATH.COMMUNITY("concern") +
          "?keyword=&criteria=date&pageNo=1"
        }
      >
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
