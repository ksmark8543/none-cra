import React from "react";
import { MdOutlineMenu } from "react-icons/md";

export interface NavbarProps {
  title?: React.ReactNode;
  userName?: React.ReactNode;
  logout?: React.ReactNode;
  onMenuClick?: React.MouseEventHandler<SVGElement> | undefined;
}

const Navbar = ({ title, userName, logout, onMenuClick }: NavbarProps) => {
  return (
    <section className={`flex justify-between p-5 transition-all`}>
      <div className="flex items-center gap-2">
        <MdOutlineMenu
          className="cursor-pointer"
          size={30}
          onClick={onMenuClick}
        />
        <span>{title}</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
          {userName}
        </div>
        {logout}
      </div>
    </section>
  );
};
export default Navbar;
