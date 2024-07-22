import { getMemberInfo } from "@apis/members/membersApi";
import { PATH } from "@router/Constants";
import { useLoginStore } from "@stores/member/loginStore";
import { useMemeberStore } from "@stores/member/memberStore";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleRedirectPage = () => {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  const setIsLogin = useLoginStore((state) => state.setIsLogin);
  const setMember = useMemeberStore((state) => state.setMember);

  useEffect(() => {
    const mode = searchParam.get("mode");
    if (mode === "signup") {
      navigate(PATH.SIGN_UP);
    } else if (mode === "login") {
      setIsLogin(true);
      navigate(PATH.ROOT);
      getMemberInfo().then((response) => setMember(response.data.id));
    }
  }, []);
  return <div>Redirect</div>;
};

export default GoogleRedirectPage;
