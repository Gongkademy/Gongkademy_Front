import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { COURSE_ID, LECUTRE_ORDER } from "@pages/Service/Lecture/constants";
import { PATH } from "@router/Constants";
import Button from "@components/common/button/Button";
import { HeaderContainer } from "@components/lecture/LectureHeader.style";

const LectureHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const createLectureUrl = (step) => {
    return `?${COURSE_ID}=${searchParams.get(COURSE_ID)}&${LECUTRE_ORDER}=${
      searchParams.get(LECUTRE_ORDER) * 1 + step
    }`;
  };
  return (
    <HeaderContainer>
      <Link to={PATH.LECTURE + createLectureUrl(-1)}>
        <Button outline>이전 강의</Button>
      </Link>

      <Link to={PATH.LECTURE + createLectureUrl(+1)}>
        <Button outline typo="bodyRg400">
          다음 수업
        </Button>
      </Link>
    </HeaderContainer>
  );
};

export default LectureHeader;
