import { FileIcon } from "@assets/svg/icons";
import { Flex } from "@components/common/flex/Flex";
import Input from "@components/common/input/Input";
import { PageTitle } from "@components/common/page/PageTitle";
import Profile from "@components/common/profile/Profile";
import { useMemberInfoQuery } from "@apis/queries/useMemberQuery";
import { useState, useEffect } from "react";
import Button from "@components/common/button/Button";
import { patchMemberInfo } from "@apis/members/membersApi";
import validate from "@utils/validate";
import useForm from "@hooks/useForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const MyInfoUpdatePage = () => {
  const [newProfileImg, setNewProfileImg] = useState();
  const [mode, setMode] = useState("read");
  const { data, isLoading } = useMemberInfoQuery();
  const [initialValues, setInitialValues] = useState({ newNickname: "" });
  const queryClient = useQueryClient();
  const updateMutation = useMutation({
    mutationFn: (data) => patchMemberInfo(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["memberInfo"]);
    },
    onError: (error) => {
      // 요청에 에러가 발생된 경우
      console.log("onError", error);
    },
    onSettled: () => {
      // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
      console.log("onSettled");
    },
  });

  useEffect(() => {
    if (data) {
      setInitialValues({ newNickname: data.data.nickname });
    }
  }, [data]);

  const { values, submitting, handleChange, handleSubmit, response, states } =
    useForm({
      initialValues,
      onSubmit: updateMutation.mutate,
      validate: validate,
    });

  const handleUpdateBtnClick = async () => {
    if (mode === "read") {
      setMode("update");
    } else if (mode === "update") {
      await handleSubmit();
      setMode("read");
    }
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
            name={"newNickname"}
            value={mode === "read" ? data.data.nickname : values.newNickname}
            onChange={handleChange}
            disabled={mode === "read"}
          />
          <Button
            onClick={handleUpdateBtnClick}
            fill
            disabled={states.newNickname === "error" || submitting}
          >
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
