const validate = ({ nickname, university, major, minor }) => {
  const errors = {};
  if (!nickname) {
    errors.nickname = "";
  } else if (nickname.length < 2) {
    errors.nickname = "2자 이상으로 입력해주세요.";
  } else if (nickname.length > 16) {
    errors.nickname = "16자 이하로 입력해주세요.";
  }

  return errors;

  if (!password) {
    errors.password = "비밀번호가 입력되지 않았습니다.";
  } else if (password.length < 8) {
    errors.password = "8자 이상의 패스워드를 사용해야 합니다.";
  }
};

export default validate;
