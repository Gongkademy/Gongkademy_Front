import { getMemberInfo } from "@apis/members/membersApi";
import { PATH } from "@router/Constants";
import { useLoginStore } from "@stores/member/loginStore";
import { useMemberStore } from "@stores/member/memberStore";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleRedirectPage = () => {
  const navigate = useNavigate();
  const setIsLogin = useLoginStore((state) => state.setIsLogin);
  const setMember = useMemberStore((state) => state.setMember);

  useEffect(() => {
    setIsLogin(true);
    getMemberInfo().then((response) => setMember(response.data.id));

    // TODO: 직전페이지로 리다이렉트
    navigate(PATH.ROOT);
  }, []);
  return <div>Redirect</div>;
};

export default GoogleRedirectPage;
