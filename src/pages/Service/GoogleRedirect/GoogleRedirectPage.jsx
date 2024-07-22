import { getMemberInfo } from "@apis/members/membersApi";
import { PATH } from "@router/Constants";
import { useLoginStore } from "@stores/member/loginStore";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleRedirectPage = () => {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  const setIsLogin = useLoginStore((state) => state.setIsLogin);
  useEffect(() => {
    const mode = searchParam.get("mode");
    if (mode === "signup") {
      navigate(PATH.SIGN_UP);
    } else if (mode === "login") {
      getMemberInfo().then((response) => console.log(response));
      setIsLogin(true);
      navigate(PATH.ROOT);
    }
  }, []);
  return <div>Redirect</div>;
};

export default GoogleRedirectPage;
