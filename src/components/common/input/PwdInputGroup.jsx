import {
  Icon,
  InputGroupContainer,
  StyledInput,
} from "@components/common/input/InputGroup.style";
import { InvisibleIcon, VisibleIcon } from "@assets/svg/icons";
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
        {isPwdVisible ? <VisibleIcon /> : <InvisibleIcon />}
      </Icon>
      {auth === "signup" && <ValidMessage field={field} state={state} />}
    </InputGroupContainer>
  );
};
