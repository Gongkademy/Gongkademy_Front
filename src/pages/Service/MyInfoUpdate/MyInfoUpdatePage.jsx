import { FileIcon } from "@assets/svg/icons";
import { Flex } from "@components/common/flex/Flex";
import Input from "@components/common/input/Input";
import { PageTitle } from "@components/common/page/PageTitle";
import Profile from "@components/common/profile/Profile";
import { useState } from "react";

const MyInfoUpdatePage = () => {
  const [newProfileImg, setNewProfileImg] = useState();

  return (
    <>
      <PageTitle>
        <FileIcon width={"24px"} /> 내 정보 수정
      </PageTitle>

      <Flex direction="column" gap="2rem" width="100%" maxWidth="608px">
        <Profile width={"4rem"} height={"4rem"} onChange={setNewProfileImg} />
        <Input label={"닉네임"} disabled />
        <Input label={"이메일"} disabled />
      </Flex>
    </>
  );
};

export default MyInfoUpdatePage;
