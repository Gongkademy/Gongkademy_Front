import { useState, useEffect } from "react";
import { Flex } from "@components/common/flex/Flex";
import Button from "@components/common/button/Button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@assets/svg/icons";
import {
  PageList,
  ActiveButton,
} from "./Pagination.style.js";
const Pagination = ({
  totalItems,
  itemCountPerPage,
  pageCount,
  currentPage,
}) => {
  const totalPages = Math.ceil(
    totalItems / itemCountPerPage
  );
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount >= totalPages;
  useEffect(() => {
    if (currentPage === start + pageCount) {
      setStart((prev) => prev + pageCount);
    }
    if (currentPage < start)
      setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <Flex
      justify="center"
      align="center"
      marginTop="30px"
    >
      <PageList>
        {!noPrev && (
          <li>
            <Button text>
              <ChevronLeftIcon
                width="16"
                height="16"
              />
            </Button>
          </li>
        )}
        {[...Array(pageCount)].map((a, idx) => (
          <>
            {start + idx <= totalPages && (
              <li key={idx}>
                {currentPage === start + idx ? (
                  <ActiveButton text>
                    {start + idx}
                  </ActiveButton>
                ) : (
                  <Button text>
                    {start + idx}
                  </Button>
                )}
              </li>
            )}
          </>
        ))}
        {!noNext && (
          <li>
            <Button text>
              <ChevronRightIcon
                width="16"
                height="16"
              />
            </Button>
          </li>
        )}
      </PageList>
    </Flex>
  );
};
export default Pagination;
