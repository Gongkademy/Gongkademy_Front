import { PATH } from "@router/Constants";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthCheckPage = () => {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const mode = searchParam.get("mode");
    if (mode === "signup") {
      navigate(PATH.SIGN_UP);
    } else if (mode === "login") {
      navigate(PATH.ROOT);
    }
  }, []);
  return <div>authCheck</div>;
};

export default AuthCheckPage;
