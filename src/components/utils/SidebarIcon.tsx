import Link from "next/link";

type IconProps = {
  children: React.ReactNode;
  link: string;
};

export const SidebarIcon = (props: IconProps) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={props.link}>
        <div className=" bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 rounded-lg p-3 inline-block ">
          {props.children}
        </div>
      </Link>
    </div>
  );
};
