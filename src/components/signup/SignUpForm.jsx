import {
  ErrorMessage,
  InputContainer,
  SignUpFormBlock,
} from "./SignUpForm.style";
import Text from "@components/common/text/Text";
import Input from "../common/input/Input";
import useForm from "../../hooks/useForm";
import Button from "@components/common/button/Button";
import { color, typo } from "@styles/style";
import validate from "@utils/validate";
import Checkbox from "../common/checkbox/Checkbox";
import { join } from "../../apis/members/membersApi";
import { Flex } from "../common/flex/Flex";
import { MAX_NICKNAME_LENGTH, MIN_NICKNAME_LENGTH } from "./Constants";
const SignUpForm = () => {
  //message랑 에러를 다뤄야겠다
  const { values, messages, states, submitting, handleChange, handleSubmit } =
    useForm({
      initialValues: {
        nickname: "",
        birthday: 0,
        agreeService: false,
        agreePrivacy: false,
        agreeMarketing: false,
      },
      onSubmit: join,
      validate,
    });

  return (
    <SignUpFormBlock onSubmit={handleSubmit}>
      {/* 닉네임 */}
      <Flex direction="column" gap="2rem">
        <InputContainer>
          <Input
            label="닉네임"
            name="nickname"
            placeholder={`닉네임은 ${MIN_NICKNAME_LENGTH}이상 ${MAX_NICKNAME_LENGTH}이하로 입력해주세요`}
            type="text"
            onChange={handleChange}
          />
          <ErrorMessage
            color={states.nickname === "success" ? color.green : color.pinkRed}
            typo={typo.captionRg400}
          >
            {messages.nickname}
          </ErrorMessage>
        </InputContainer>

        {/* 생년월일 */}
        <InputContainer>
          <Input
            label="생년월일"
            name="birthday"
            placeholder="생년월일 8자리를 알려주세요."
            type="number"
            onChange={handleChange}
          />
          <ErrorMessage
            color={states.birthday === "success" ? color.green : color.pinkRed}
            typo={typo.captionRg400}
          >
            {messages.birthday}
          </ErrorMessage>
        </InputContainer>

        {/* 체크박스 */}
        <Flex direction="column" gap="1rem">
          <Text typo={typo.bodySm700}>이용약관 동의</Text>
          <Flex direction="column" gap="2rem">
            <Checkbox
              checked={values.agreeService}
              onChange={handleChange}
              name="agreeService"
            >
              <Text typo={typo.bodySm400}>이용약관 동의 (필수)</Text>
            </Checkbox>

            <Checkbox
              checked={values.agreePrivacy}
              onChange={handleChange}
              name="agreePrivacy"
            >
              <Text typo={typo.bodySm400}>개인정보 처리 방침 (필수)</Text>
            </Checkbox>

            <Checkbox
              checked={values.agreeMarketing}
              onChange={handleChange}
              name="agreeMarketing"
            >
              <Text typo={typo.bodySm400}>광고성 정보 수신 동의 (선택)</Text>
            </Checkbox>
          </Flex>
        </Flex>
      </Flex>
      <Button
        fill
        bold
        disabled={
          !(
            values.agreeService &&
            values.agreePrivacy &&
            states.nickname === "success" &&
            states.birthday === "success"
          )
        }
      >
        가입하기
      </Button>
    </SignUpFormBlock>
  );
};

export default SignUpForm;
