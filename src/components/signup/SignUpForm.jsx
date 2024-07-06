import { SignUpFormBlock } from "./SignUpForm.style";

import Input from "../common/input/Input";
import useForm from "../../hooks/useForm";
import Button from "@components/common/button/Button";
import { color, typo } from "@styles/style";
import Text from "@components/common/text/Text";
import validate from "@utils/validate";
import Checkbox from "../common/checkbox/Checkbox";
import { useState } from "react";
const SignUpForm = () => {
  //message랑 에러를 다뤄야겠다
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { nickname: "" },
    onSubmit: () => {
      console.log("성공");
    },
    validate,
  });

  const [isCheckService, setIsCheckService] = useState(false);
  const [isCheckPersonal, setIsCheckPersonal] = useState(false);
  const [isCheckMarketing, setIsCheckMarketing] = useState(false);

  return (
    <SignUpFormBlock onSubmit={handleSubmit}>
      {/* 닉네임 */}
      <Input
        label="닉네임"
        name="nickname"
        placeholder="닉네임은 1년에 1번 수정할 수 있어요."
        type="text"
        onChange={handleChange}
      />

      <Text color={color.pinkRed} typo={typo.captionRg400}>
        {errors.nickname}
      </Text>

      {/* <Checkbox>이용약관 동의 (필수)</Checkbox> */}
      <Checkbox checked={isCheckService} onChange={setIsCheckService}>
        <Text typo="bodySm400">이용약관 동의 (필수)</Text>
      </Checkbox>
      <Checkbox checked={isCheckPersonal} onChange={setIsCheckPersonal}>
        <Text typo="bodySm400">개인정보 처리 방침 (필수)</Text>
      </Checkbox>
      <Checkbox checked={isCheckMarketing} onChange={setIsCheckMarketing}>
        <Text typo="bodySm400">광고성 정보 수신 동의 (선택)</Text>
      </Checkbox>

      <Button fill disabled={!(isCheckService && isCheckPersonal)}>
        가입하기
      </Button>
    </SignUpFormBlock>
  );
};

export default SignUpForm;
