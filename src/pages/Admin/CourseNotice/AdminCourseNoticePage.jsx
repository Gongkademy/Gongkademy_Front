import CourseEditor from "@components/admin/course/CourseEditor";
import Button from "@components/common/button/Button";
import { Flex } from "@components/common/flex/Flex";
import Input from "@components/common/input/Input";
import Text from "@components/common/text/Text";
import Textbox from "@components/common/textbox/TextBox";
import {
  modifyCourseNotice,
  registCourseNotice,
  removeCourseNotice,
  useCourseNoticeQuery,
} from "@queries/useCourseDetailQuery";
import { typo } from "@styles/style";
import DOMPurify from "dompurify";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const AdminCourseNoticePage = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState([]);
  const [noticeId, setNoticeId] = useState("");
  const params = useParams();
  const [mode, setMode] = useState("read");
  const [notice, setNotice] = useState({});
  const [content, setContent] = useState("");
  const { data, isSuccess, isError, error } = useCourseNoticeQuery(
    params.courseId,
    0
  );
  const removeNotice = removeCourseNotice();
  const modifyNotice = modifyCourseNotice();
  const registNotice = registCourseNotice();

  useEffect(() => {
    if (isSuccess) {
      setContents(data.data.content); // content가 있는 경우 설정, 없는 경우 빈 문자열
      console.log(data.data.content);
    } else if (isError) {
      console.log("error");
    }
    modifyNotice.isSuccess && setMode("read");
  }, [data]);

  const postCourseNotice = () => {
    registNotice.mutate({
      courseId: params.courseId,
      title: title,
      content: content,
    });
  };
  return (
    <Flex direction="column" gap="80px">
      <Flex gap="8px">
        {mode === "read" && (
          <Button onClick={() => setMode("create")} fill>
            작성하기
          </Button>
        )}
        {mode === "create" && (
          <Button onClick={postCourseNotice} fill>
            작성완료
          </Button>
        )}
      </Flex>
      {mode === "read" &&
        contents.map((content) => (
          <Flex direction="column" gap="1rem" align="end">
            <Flex gap="0.25rem">
              <Button
                fill
                onClick={() => {
                  setMode("update");
                  setNotice({
                    title: content.title,
                    content: content.content,
                    id: params.courseId,
                  });
                  setNoticeId(content.id);
                }}
              >
                수정하기
              </Button>
              <Button
                onClick={() => {
                  removeNotice.mutate(content.id);
                }}
                outline
              >
                삭제하기
              </Button>
            </Flex>
            <Text typo={typo.titleRg700}>{content.title}</Text>
            <Textbox width="100%" height="5rem">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(String(content.content)),
                }}
              />
            </Textbox>
          </Flex>
        ))}

      {mode === "create" && (
        <>
          <Flex>
            <Input
              placeholder="제목을 입력해주세요"
              value={title}
              label={"제목"}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Flex>
          <Flex>
            <p>내용</p>
            <CourseEditor
              value={content}
              onChange={setContent}
              width={"800px"}
              height={"100px"}
            />
          </Flex>
        </>
      )}
      {mode === "update" && (
        <>
          <Flex>
            <Flex gap="0.25rem">
              <Button
                fill
                onClick={() => {
                  modifyNotice.mutate({
                    noticeId: noticeId,
                    data: notice,
                  });
                }}
              >
                수정완료
              </Button>
              <Button onClick={() => setMode("read")} outline>
                수정취소
              </Button>
            </Flex>
            <Input
              placeholder="제목을 입력해주세요"
              value={notice.title}
              label={"제목"}
              onChange={(e) =>
                setNotice((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </Flex>
          <Flex>
            <p>내용</p>
            <CourseEditor
              value={notice.content}
              onChange={(content) => {
                setNotice((prev) => ({ ...prev, content: content }));
              }}
              width={"800px"}
              height={"100px"}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};
export default AdminCourseNoticePage;
