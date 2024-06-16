import { CheckIcon } from "@assets/svg/icons";
import Text from "@components/common/text/Text";
import { color } from "../../../styles/palette";
import { Flex } from "../../common/flex/Flex";
import { Link } from "react-router-dom";
const CurriculumItem = ({ isCompleted }) => {
  return (
    <Link to="">
      <Flex
        as="li"
        align="center"
        justify="space-between"
        padding="1rem 0"
        style={{ borderBottom: `1px solid ${color.gray400}` }}
      >
        <Flex gap="0.75rem" align="center">
          <CheckIcon
            width="1rem"
            stroke={isCompleted ? color.green : color.gray400}
          />
          <Text typo="bodyRg700">
            {"1"}.{"강의제목"}
          </Text>
        </Flex>

        <Text type="captionRg400" color={color.gray400}>
          {"10 분"}
        </Text>
      </Flex>
    </Link>
  );
};

export default CurriculumItem;
