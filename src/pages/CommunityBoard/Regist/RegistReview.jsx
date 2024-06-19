import { ReviewContainer } from "@pages/CommunityDetail/CommunityReview.style";
import ToastConcern from "./ToastConcern";
import { StyledInput } from "./Regist.style";
import Button from "@components/common/button/Button";
import { StyledSearchBar } from "@components/common/searchbar/Searchbar.style";
import { ContainerRow } from "./../../CommunityDetail/CommunityDetail.style";
const RegistReview = () => {
  return (
    <ContainerRow>
      <StyledSearchBar placeholder="댓글을 입력해주세요." />
      <Button fill>등록</Button>
    </ContainerRow>
  );
};
export default RegistReview;
