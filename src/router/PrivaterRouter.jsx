// import { HTTP_STATUS_CODE } from "@apis/apiConstants";
// import { checkMemberRole } from "@apis/members/membersApi";
// import { PATH } from "@router/Constants";
import { Navigate, Outlet } from "react-router-dom";

// import { useState, useEffect } from "react";
const PrivateRouter = ({ memberRole }) => {
  //   //이미 로그인이 된 유저만 처리
  //   const [isAuthorized, setIsAuthorized] = useState(false);

  //   useEffect(() => {
  //     const fetchMemberRole = async () => {
  //       try {
  //         const response = await checkMemberRole(memberRole);
  //         console.log(response);
  //         if (
  //           response.status === HTTP_STATUS_CODE.OK &&
  //           response.data === "권한 확인에 성공했습니다."
  //         ) {
  //           console.log(1);
  //           setIsAuthorized(true);
  //         }
  //       } catch (error) {
  //         setIsAuthorized(false);
  //       }
  //     };

  //     fetchMemberRole();
  //   }, []);

  // return !isAuthorized ? <Outlet /> : <Navigate to={PATH.ROOT} />;
  return <Outlet />;
};

export default PrivateRouter;
