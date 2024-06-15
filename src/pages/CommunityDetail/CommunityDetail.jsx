import { useLocation } from "react-router-dom";
import {
  BookMarkIcon,
  Like,
  Meetball,
  Chat,
  ChevronDown,
  ChevronUp,
} from "@/assets/svg/icons";
import {
  DetailBlock,
  Container,
  TitleContainer,
  Title,
  ContainerRow,
  ContainerCol,
  Profile,
  ContentContainer,
  Content,
  QnaImg,
  CourseName,
} from "./CommunityDetail.style";
import Button from "@components/common/button/Button";
const Detail = () => {
  const location = useLocation();

  return (
    <DetailBlock>
      <Container>
        <TitleContainer>
          <Title>제목</Title>
          <ContainerRow>
            <ContainerCol type="icon">
              <BookMarkIcon
                width="16"
                height="16"
              />
              <Content>0</Content>
            </ContainerCol>
            <ContainerCol type="icon">
              <Like width="16" height="16" />
              <Content>0</Content>
            </ContainerCol>
            <ContainerCol type="icon">
              <Meetball width="16" height="16" />
            </ContainerCol>
          </ContainerRow>
        </TitleContainer>
        <ContainerRow type="center">
          <Profile></Profile>
          <Content>mung5079</Content>
        </ContainerRow>
        <Content>2024.06.15 21:35 작성</Content>
        <ContentContainer>
          <Content type="black">
            4:15 {"\n"}
            혹시 T/G*Ip 어떻게 나온건가요? {"\n"}
            어떤영상에서 설명해주셨는지 알려주실수
            있을까요?{"\n"}
            영상 다봤는데 처음 보는거 같아서요
          </Content>
          <ContainerRow type="center">
            <QnaImg></QnaImg>
            <ContainerCol>
              <CourseName>강좌명</CourseName>
              <Content>강의명</Content>
            </ContainerCol>
          </ContainerRow>
          <ContainerRow>
            <Button text>
              <ChevronDown
                width="16"
                height="16"
              />{" "}
              1개 댓글 보기
            </Button>
            <Button text>
              <Chat width="16" height="16" /> 댓글
              작성하기
            </Button>
          </ContainerRow>
        </ContentContainer>
      </Container>
    </DetailBlock>
  );
};
export default Detail;
