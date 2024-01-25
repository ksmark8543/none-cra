import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface MenuGroupProps {
  icon?: React.ReactNode;
  name: string;
  initialOpen?: boolean;
  isSelected?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: Function;
}

const MenuGroup = ({
  icon,
  name,
  initialOpen = false,
  isSelected = false,
  className = "",
  children,
  onClick,
}: MenuGroupProps) => {
  const [isOpen, setOpen] = useState(initialOpen);
  const toggle = () => {
    setOpen(() => !isOpen);
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <div>
      <div
        className={`flex px-3 font-bold items-center py-3 cursor-pointer bg-slate-600 sticky z-10 top-0           
           ${isSelected ? " shadow-sm text-slate-50 " : " text-slate-300 "}
           ${className}
          `}
        onClick={toggle}
      >
        {icon}
        <div className="flex-grow ml-2">{name}</div>
        {initialOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </div>
      <div>{isOpen ? children : null}</div>
    </div>
  );
};
export default MenuGroup;
