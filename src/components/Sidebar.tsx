import Image from "next/image";
import Link from "next/link";
import { RxSketchLogo, RxDashboard } from "react-icons/rx";

type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar = (props: SidebarProps) => {
  return (
    <div className=" flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className=" bg-blue-500 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={24} />
            </div>
          </Link>
          <span className="border-b-[1px] w-full border-gray-200 p-2"></span>
          <div className=" bg-gray-100 hover:bg-gray-200 cursor-crosshair my-4 rounded-lg p-3 inline-block ">
            <RxDashboard size={24} />
          </div>
        </div>
      </div>
      <main className="ml-20 w-full">{props.children}</main>
    </div>
  );
};
