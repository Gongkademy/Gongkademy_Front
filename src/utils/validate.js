import {
  MAX_NICKNAME_LENGTH,
  MIN_NICKNAME_LENGTH,
} from "../components/signup/Constants";

const validate = ({ nickname, birthday }) => {
  const messages = {};
  const states = {};
  if (!nickname) {
    messages.nickname = "";
    states.nickname = "default";
  } else if (nickname.length < MIN_NICKNAME_LENGTH) {
    messages.nickname = `${MIN_NICKNAME_LENGTH}자 이상으로 입력해주세요.`;
    states.nickname = "error";
  } else if (nickname.length > MAX_NICKNAME_LENGTH) {
    messages.nickname = `${MAX_NICKNAME_LENGTH}자 이하로 입력해주세요.`;
    states.nickname = "error";
  } else {
    messages.nickname = "사용가능한 닉네임 입니다.";
    states.nickname = "success";
  }

  if (!birthday) {
    messages.birthday = "";
    states.birthday = "default";
  } else if (!checkBirthday(birthday)) {
    messages.birthday = "유효한 날짜가 아닙니다.";
    states.birthday = "error";
  } else {
    messages.birthday = "유효한 날짜입니다.";
    states.birthday = "success";
  }
  return { messages, states };
};

export default validate;
const checkBirthday = (newDate) => {
  const [year, mon, day] = [
    Number(newDate.substr(0, 4)),
    Number(newDate.substr(4, 2)),
    Number(newDate.substr(6, 2)),
  ];
  if (!(mon >= 1 && mon <= 12)) return false;

  if (!(day >= 1 && day <= 31)) return false;

  if (newDate.length === 8 && year && mon && day) {
    const today = new Date();
    const _birthday = new Date(year, mon - 1, day);
    const minDate = new Date(today.getFullYear() - 110, mon - 1, day);
    return (
      minDate.getTime() <= _birthday.getTime() &&
      _birthday.getTime() <= today.getTime()
    );
  }
  return false;
};
