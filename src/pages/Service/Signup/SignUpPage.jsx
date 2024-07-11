import SignUpForm from "@components/signup/SignUpForm";
import { PageTitle } from "@components/common/page/PageTitle";
import { Lock } from "@assets/svg/titles";

const SignUpPage = () => {
  return (
    <>
      <PageTitle>
        <Lock width={"1.5rem"} />
        <h2>회원가입</h2>
      </PageTitle>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
