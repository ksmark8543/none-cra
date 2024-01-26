import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export interface ItemProps {
  name: string;
}

const Item = (props: ItemProps) => {
  const [isOpen, setOpen] = useState();
  return (
    <div>
      {props.name}
      <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />
    </div>
  );
};

export default Item;
