import PageTitle from "@components/common/PageTitle";
import * as M from "./MyPageUpdate.style";
import QUESTION_LIST from "@components/signup/Constants";
import { useEffect, useState } from "react";
import { getMemberInfo } from "@apis/members/membersApi";
// import jsonLocalStorage from "utils/jsonLocalstorage";
import { isAxiosError } from "axios";

const NICKNAME = QUESTION_LIST.nickName;
const EMAIL = QUESTION_LIST.email;
const BIRTHDAY = QUESTION_LIST.birthday;

const MyPageUpdate = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    async function fetchData() {
      const memberId = "asd";
      try {
        const response = await getMemberInfo(memberId);
        console.log(response.data);
        setNickname(response.data.nickname);
        setEmail(response.data.email);
        setBirthday(response.data.birthday);
      } catch (error) {
        if (isAxiosError(error)) {
          //TODO:에러핸들링 해야함
          alert(error);
        }
      }
    }
    fetchData();
    // const memberId = jsonLocalStorage.getItem("memberId");
  }, []);
  return (
    <>
      <PageTitle>내 정보 수정</PageTitle>
      <M.MyPageContainer>
        {/* 닉네임 */}
        <M.InputGroup as="form">
          <label htmlFor="nickname">{NICKNAME.name}</label>
          <div className="inputContainer">
            <input
              id="nickname"
              placeholder={NICKNAME.placeholder}
              value={nickname}
            />
            <Button black>{NICKNAME.btnText}</Button>
          </div>
        </M.InputGroup>
        {/* 이메일 */}
        <M.InputGroup>
          <label htmlFor="email">{EMAIL.name}</label>
          <div className="inputContainer">
            <input
              id="email"
              placeholder={EMAIL.placeholder}
              type="email"
              value={email}
            />
          </div>
        </M.InputGroup>
        {/* 생년월일 */}
        <M.InputGroup>
          <label htmlFor="birthday">{BIRTHDAY.name}</label>
          <input
            id="birthday"
            maxLength={8}
            placeholder={BIRTHDAY.placeholder}
            value={birthday}
          />
        </M.InputGroup>

        <Button fullWidth black>
          수정하기
        </Button>
      </M.MyPageContainer>
    </>
  );
};
export default MyPageUpdate;
