import { MdCheck } from "react-icons/md";

interface MenuProps {
  name: string;
  isActive?: boolean;
  desc?: React.ReactNode;
  className?: string;
}

export const Menu = ({
  name,
  isActive = false,
  desc,
  className = "",
}: MenuProps) => {
  return (
    <div
      className={`group relative py-3 text-sm font-bold text-gray-300 flex items-center bg-slate-600
          ${isActive ? "text-slate-50 " : ""} 
          hover:text-white hover:bg-slate-500 transition-colors duration-300 ease-in-out 
          ${className}
        `}
    >
      <div className="absolute w-0 h-1 top-0 " style={{ right: "1.25rem" }}>
        <div
          className={`hidden group-hover:block fixed  bg-slate-100 text-slate-900 px-3 py-5 z-20 rounded-md shadow-lg cursor-default border-solid border-slate-600 border 
        transition-opacity duration-75 hover:opacity-100`}
        >
          {desc}
        </div>
      </div>

      {/* {desc && (
        <div
          className={`hidden group-hover:block fixed left-[260px] transform -translate-y-4 bg-slate-100 text-slate-900 px-3 py-5 z-20 rounded-md shadow-lg cursor-default border-solid border-slate-600 border 
        transition-opacity duration-75 hover:opacity-100`}
        >
          {desc}
        </div>
      )} */}

      <div className="pl-3 w-[40px] flex justify-center">
        {isActive ? <MdCheck /> : null}
      </div>
      {name}
    </div>
  );
};

export default Menu;
