import { faker } from "@faker-js/faker";
import { RxClipboard } from "react-icons/rx";
import { useEffect, useState } from "react";

interface OrderData {
  id: number;
  name: {
    first: string;
    last: string;
  };
  total: string;
  status: string;
  method: string;
  date: string;
}

export const RecentOrders = () => {
  const [data, setData] = useState<OrderData[] | undefined>();

  useEffect(() => {
    let myData = [];
    for (let i = 1; i <= 10; i++) {
      let item = {
        id: i,
        name: {
          first: faker.name.firstName(),
          last: faker.name.lastName(),
        },
        total: faker.finance.amount(50, 300, 2, "$"),
        status: faker.helpers.arrayElement([
          "On hold",
          "Processing",
          "Completed",
        ]),
        method: faker.finance.creditCardIssuer(),
        date: `${faker.datatype.number({ min: 2, max: 59 })}minutes ago`,
      };
      myData.push(item);
    }

    setData(myData);
  }, []);

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50-vh] m-auto p-4 border rounded-lg bg-white overflow-scroll shadow-md">
      <h1 className="text-gray-500 font-semibold">Recent Orders</h1>
      <ul>
        {data?.map((order, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg  my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-blue-200 rounded-lg p-3">
              <RxClipboard size={20} color="#3B82F6" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">{order.total}</p>
              <p className="text-gray-400 text-sm">{`${order.name.first} ${order.name.last}`}</p>
              <p></p>
            </div>
            <p className=" lg:flex md:hidden absolute right-6 text-sm text-gray-500">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
