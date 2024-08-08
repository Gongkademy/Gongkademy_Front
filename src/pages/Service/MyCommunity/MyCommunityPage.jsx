import { useState, useEffect, useReducer } from "react";
import {
  SelectedPostBtn,
  DropDownButton,
  DropDownLi,
  DropDownFlex,
  PostGrid,
  TopBtnBox,
} from "./MyCommunityPage.style";
import { Flex } from "@components/common/flex/Flex";
import MyPostCard from "./MyPostCard";
import MyCommunityPagination from "./MyCommunityPagination";
import axios from "axios";

const MyCommunityPage = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownQnA, setDropDownQnA] = useState(true);

  const [postType, setPostType] = useState("myPost");

  const [myQnAArrPage, setMyQnAArrPage] = useState([]);
  const [myQnAArr, setMyQnAArr] = useState([]);

  //myQnA API get
  const fetchMyQnAData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/community/question/myboard",
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      setMyQnAArrPage(response.data);

      setMyQnAArr(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchMyQnAData();
    };

    fetchData();
  }, []);

  return (
    <>
      <TopBtnBox>
        <Flex gap="16px">
          <SelectedPostBtn
            onClick={() => {
              setPostType("myPost");
            }}
            selected={postType === "myPost"}
          >
            내가 쓴 게시글
          </SelectedPostBtn>
          <SelectedPostBtn
            onClick={() => {
              setPostType("likePost");
            }}
            selected={postType === "likePost"}
          >
            좋아요 누른 게시글
          </SelectedPostBtn>
          <SelectedPostBtn
            onClick={() => {
              setPostType("scrapPost");
            }}
            selected={postType === "scrapPost"}
          >
            스크랩한 게시글
          </SelectedPostBtn>
        </Flex>

        {/* 드롭다운 */}
        <DropDownButton
          onClick={() => {
            setDropDown(!dropDown);
          }}
        >
          <Flex justify="space-evenly" align="center">
            {dropDownQnA ? "Q&A" : "고민"}

            {dropDown ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path stroke="#111113" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
                <path stroke="#000" stroke-opacity=".2" d="M14 11 8 5l-6 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path stroke="#111113" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
                <path stroke="#000" stroke-opacity=".2" d="m2 5 6 6 6-6" />
              </svg>
            )}
          </Flex>
          {dropDown && (
            <DropDownFlex>
              <DropDownLi
                onClick={() => {
                  setDropDownQnA(true);
                }}
              >
                Q&A
              </DropDownLi>
              <DropDownLi
                onClick={() => {
                  setDropDownQnA(false);
                }}
              >
                고민
              </DropDownLi>
            </DropDownFlex>
          )}
        </DropDownButton>
      </TopBtnBox>
      {/* 내 고민글 */}
      {postType === "myPost" && dropDownQnA == true && (
        <PostGrid
          totalPage={myQnAArrPage.totalPage}
          totalCount={myQnAArrPage.totalCount}
        >
          {myQnAArr.map((item) => {
            return (
              <MyPostCard
                key={item.articleId}
                title={item.title}
                content={item.content}
                nickName={item.nickname}
                createTime={item.createTime}
                courseTitle={item.courseTitle}
                commentCount={item.commentCount}
                likeCount={item.likeCount}
                //조회수는 없고 스크랩수는 있음
                // scrapCount={item.scrapCount}
              />
            );
          })}
        </PostGrid>
      )}

      <MyCommunityPagination />
    </>
  );
};

export default MyCommunityPage;
