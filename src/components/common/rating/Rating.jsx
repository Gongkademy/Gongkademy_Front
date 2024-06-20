import React, { useMemo } from "react";
import { color } from "@styles/style";
import { StarIcon } from "@/assets/svg/icons";
import { RatingBlock } from "./Rating.style";
const Rating = ({ count, value, onChange }) => {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => (
        <div key={i} onClick={() => onChange(i + 1)}>
          <StarIcon
            width={"1.5rem"}
            fill={i < value ? color.yellow : color.gray200}
          />
        </div>
      )),
    [count, value]
  );

  return <RatingBlock>{stars}</RatingBlock>;
};

export default Rating;
