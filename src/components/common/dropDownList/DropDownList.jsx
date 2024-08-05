import { cloneElement, useState } from "react";
const DropDownList = ({ label, items, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <label>
      {label}
      {cloneElement(trigger, { onClick: () => setIsOpen((prev) => !prev) })}
      <ul>
        {isOpen && items.map((item, index) => <li key={item}>{item}</li>)}
      </ul>
    </label>
  );
};

export default DropDownList;
