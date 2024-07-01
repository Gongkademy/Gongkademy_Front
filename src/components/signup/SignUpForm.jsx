import { SignUpFormBlock } from "./SignUpForm.style";

import Input from "../common/input/Input";
import useForm from "../../hooks/useForm";
import Button from "@components/common/button/Button";
import { color, typo } from "@styles/style";
import Text from "@components/common/text/Text";
import validate from "@utils/validate";
import axios from "axios";
const SignUpForm = () => {
  //message랑 에러를 다뤄야겠다
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { nickname: "" },
    onSubmit: () => {
      console.log("성공");
    },
    validate,
  });

  return (
    <SignUpFormBlock>
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
      <Button fill>가입하기</Button>
    </SignUpFormBlock>
  );
};

export default SignUpForm;
