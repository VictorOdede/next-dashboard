import Image from "next/image";
import Link from "next/link";
import {
  RxSketchLogo,
  RxDashboard,
  RxPerson,
  RxGear,
  RxTable,
} from "react-icons/rx";
import { SidebarIcon } from "./utils/SidebarIcon";

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
          <SidebarIcon link="/">
            <RxDashboard size={24} />
          </SidebarIcon>
          <SidebarIcon link="/customers">
            <RxPerson size={24} />
          </SidebarIcon>
          <SidebarIcon link="/orders">
            <RxTable size={24} />
          </SidebarIcon>
          <SidebarIcon link="/settings">
            <RxGear size={24} />
          </SidebarIcon>
        </div>
      </div>
      <main className="ml-20 w-full">{props.children}</main>
    </div>
  );
};
