import React from "react";
interface Props {
  img: string;
  text: string;
}
function DropdownItem({ img, text }: Props) {
  return (
    <li className="dropdownItem">
      <img src={img} />
      <a>{text}</a>
    </li>
  );
}

export default DropdownItem;
