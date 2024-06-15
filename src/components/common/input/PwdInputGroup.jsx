import {
  Icon,
  InputGroupContainer,
  StyledInput,
} from "@components/common/input/InputGroup.style";
import { Invisible, Visible } from "@assets/svg/icons";
import { useVisible } from "@hooks/useVisible";
import { ValidMessage } from "@components/common/input/ValidMessage";

export const PwdInputGroup = ({ auth, state, field, onChange }) => {
  const [isPwdVisible, handlePwdVisibleClick] = useVisible();

  return (
    <InputGroupContainer state={state}>
      <StyledInput
        id={field}
        state={state}
        onChange={onChange}
        placeholder={field.placeholder}
        type={isPwdVisible ? "text" : "password"}
      />
      <Icon onClick={handlePwdVisibleClick}>
        {isPwdVisible ? <Visible /> : <Invisible />}
      </Icon>
      {auth === "signup" && <ValidMessage field={field} state={state} />}
    </InputGroupContainer>
  );
};
