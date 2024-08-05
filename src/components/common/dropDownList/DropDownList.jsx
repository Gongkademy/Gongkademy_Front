import { cloneElement, useState } from "react";

const DropDownList = ({ label, items, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <label>{label}</label>
      {cloneElement(trigger, { onClick: () => setIsOpen((prev) => !prev) })}
      {isOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={item.onClick}>
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownList;
