import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import { Container } from "./MeetballSelect.style";
import {
  Options,
  Option,
  StyledSelect,
} from "./Select.style";
import { Link } from "react-router-dom";
const MeetballSelect = ({ path }) => {
  return (
    <Container>
      <Options active={true}>
        <Link to={path}>
          <Option>수정</Option>
        </Link>
        <Option>삭제</Option>
      </Options>
    </Container>
  );
};
export default MeetballSelect;
