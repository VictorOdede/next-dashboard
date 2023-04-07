import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";

type StatCardProps = {
  amount: string;
  title: string;
  percent: string;
};
export const StatCard = (props: StatCardProps) => {
  var negative: Boolean;
  if (props.percent.charAt(0) == "-") {
    negative = true;
  } else {
    negative = false;
  }
  return (
    <div className=" lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow-md ">
      <div className=" flex flex-col w-full pb-4 ">
        <p className=" text-3xl font-bold">${props.amount}</p>
        <p className="text-gray-500">{props.title}</p>
      </div>
      <div className=" flex justify-center items-center p-2">
        {negative ? (
          <RxTriangleDown size={40} color="red" />
        ) : (
          <RxTriangleUp size={40} color="green" />
        )}

        <p className=" mb-1 font-bold">{props.percent}%</p>
      </div>
    </div>
  );
};
