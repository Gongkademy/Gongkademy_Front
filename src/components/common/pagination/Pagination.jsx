import { useState, useEffect } from "react";
import { Flex } from "@components/common/flex/Flex";
import Button from "@components/common/button/Button";
import { Link } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@assets/svg/icons";
import { PATH } from "@router/Constants";
import {
  PageList,
  ActiveButton,
} from "./Pagination.style.js";
const Pagination = ({
  totalItems,
  itemCountPerPage,
  pageCount,
  currentPage,
  type,
  link,
}) => {
  const totalPages = Math.ceil(
    totalItems / itemCountPerPage
  );
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext =
    start + pageCount - 1 >= totalPages;
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
          <Link
            to={link + `&pageNo=${start - 1}`}
          >
            <li>
              <Button text>
                <ChevronLeftIcon
                  width="16"
                  height="16"
                />
              </Button>
            </li>
          </Link>
        )}
        {[...Array(pageCount)].map((a, idx) => (
          <>
            <Link
              to={link + `&pageNo=${start + idx}`}
            >
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
            </Link>
          </>
        ))}
        {!noNext && (
          <Link
            to={
              link +
              `&pageNo=${start + pageCount}`
            }
          >
            <li>
              <Button text>
                <ChevronRightIcon
                  width="16"
                  height="16"
                />
              </Button>
            </li>
          </Link>
        )}
      </PageList>
    </Flex>
  );
};
export default Pagination;
