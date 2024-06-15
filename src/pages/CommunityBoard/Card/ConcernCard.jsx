import {
  CardContainer,
  Title,
  TitleContainer,
  ContentContainer,
  Content,
  Pointer,
} from "./ConcernCard.style";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "@/assets/svg/icons";
import { PATH } from "@router/Constants";
const ConcernCard = ({ concern }) => {
  const navigate = useNavigate();
  const handleClickConcernCard = () => {
    navigate(
      PATH.COMMUNITY_DETAIL("concern", concern.id)
    );
  };

  return (
    <CardContainer>
      <TitleContainer>
        <Title>{concern.title}</Title>
        <Pointer>
          <ArrowRight
            width="16"
            height="16"
            onClick={handleClickConcernCard}
          />
        </Pointer>
      </TitleContainer>
      <Content>{concern.bodyPreview}</Content>
      <ContentContainer>
        <Content>{concern.date}</Content>
      </ContentContainer>
    </CardContainer>
  );
};
export default ConcernCard;
