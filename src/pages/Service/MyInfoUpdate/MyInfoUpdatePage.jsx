import { FileIcon } from "@assets/svg/icons";
import { Flex } from "@components/common/flex/Flex";
import Input from "@components/common/input/Input";
import { PageTitle } from "@components/common/page/PageTitle";
import Profile from "@components/common/profile/Profile";
import { useMemberInfoQuery } from "@queries/useMemberQuery";
import { useState } from "react";

const MyInfoUpdatePage = () => {
  const [newProfileImg, setNewProfileImg] = useState();
  const { data } = useMemberInfoQuery();
  console.log(data);

  return (
    <>
      <PageTitle>
        <FileIcon width={"24px"} /> 내 정보 수정
      </PageTitle>

      <Flex direction="column" gap="2rem" width="100%" maxWidth="608px">
        <Profile width={"4rem"} height={"4rem"} onChange={setNewProfileImg} />
        <Input label={"닉네임"} value={data.data.nickname} disabled />
        <Input label={"이메일"} value={data.data.email} disabled />
      </Flex>
    </>
  );
};

export default MyInfoUpdatePage;
