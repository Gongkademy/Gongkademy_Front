import { FileIcon } from "@assets/svg/icons";
import { Flex } from "@components/common/flex/Flex";
import Input from "@components/common/input/Input";
import { PageTitle } from "@components/common/page/PageTitle";
import Profile from "@components/common/profile/Profile";
import { useMemberInfoQuery } from "@queries/useMemberQuery";
import { useState } from "react";
import Button from "@components/common/button/Button";
const MyInfoUpdatePage = () => {
  const [newProfileImg, setNewProfileImg] = useState();
  const [mode, setMode] = useState("read");
  const { data, isLoading } = useMemberInfoQuery();
  const [newNickname, setNewNickname] = useState();
  console.log(data);

  const handleUpdateBtnClick = () => {
    setMode("update");
    setNewNickname(data.data.value);
  };

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시할 컴포넌트
  }
  return (
    <>
      <PageTitle>
        <FileIcon width={"24px"} /> 내 정보 수정
      </PageTitle>

      <Flex direction="column" gap="2rem" width="100%" maxWidth="608px">
        <Profile width={"4rem"} height={"4rem"} onChange={setNewProfileImg} />
        <Flex width="100%" align="end" gap="0.25rem">
          <Input
            label={"닉네임"}
            value={mode === "read" ? data.data.nickname : newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
            disabled={mode === "read"}
          />
          <Button onClick={handleUpdateBtnClick} fill>
            {mode === "read" ? "닉네임 수정" : "수정하기"}
          </Button>
          {mode === "update" && (
            <Button onClick={() => setMode("read")} outline>
              수정취소
            </Button>
          )}
        </Flex>
        <Input label={"이메일"} value={data.data.email} disabled />
      </Flex>
    </>
  );
};

export default MyInfoUpdatePage;
