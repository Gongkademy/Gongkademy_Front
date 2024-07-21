import { HeaderBlock } from "./LectureHeader.style";

import { Link, useSearchParams } from "react-router-dom";
import { PATH } from "@router/Constants";
import { ArrowLeftIcon } from "@assets/svg/icons";
import { Flex } from "../../common/flex/Flex";
import Text from "../../common/text/Text";
import { typo } from "@styles/style";
import { COURSE_ID } from "@pages/Service/Lecture/constants";
const LectureHeader = ({ title }) => {
  const [searchParams] = useSearchParams();
  return (
    <HeaderBlock>
      <Link to={PATH.COURSE_DETAIL(searchParams.get(COURSE_ID))}>
        <Flex align="center" height="2rem" gap="0.5rem">
          <ArrowLeftIcon width={16} height={16} />
          <Text typo={typo.bodySm700}>강의 상세</Text>
        </Flex>
      </Link>

      <Text typo={typo.bodyLg700}>{title}</Text>
      <Text typo={typo.bodyLg700}>강의자료</Text>
    </HeaderBlock>
  );
};

export default LectureHeader;
