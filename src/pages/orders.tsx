import { faker } from "@faker-js/faker";
import { RxCube, RxDotsVertical } from "react-icons/rx";
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

export const Orders = () => {
  const [data, setData] = useState<OrderData[] | undefined>();

  useEffect(() => {
    let myData = [];
    for (let i = 1; i <= 20; i++) {
      let item = {
        id: i,
        name: {
          first: faker.name.firstName(),
          last: faker.name.lastName(),
        },
        total: faker.finance.amount(50, 500, 2, "$"),
        status: faker.helpers.arrayElement([
          "Processing",
          "Completed",
          "On hold",
        ]),
        method: faker.finance.creditCardIssuer(),
        date: `${faker.datatype.number({ min: 2, max: 59 })}minutes ago`,
      };
      myData.push(item);
    }

    setData(myData);
  }, []);
  return (
    <div className=" bg-gray-100 min-h-screen ">
      <div className=" flex justify-between p-4">
        <h1 className=" text-gray-500 font-bold ">Orders</h1>
      </div>
      <div className="p-4">
        <div className=" w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto shadow-md ">
          <div className=" my-3 p-2 grid md:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer ">
            <span>Order</span>
            <span className=" sm:text-left text-right">Method</span>

            <span className="md:grid hidden">Status</span>
          </div>
          <ul>
            {data?.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg  my-3 p-2 grid md:grid-cols-3 grid-cols-2 justify-between items-center cursor-pointer"
              >
                <div className=" flex items-center">
                  <div className="bg-blue-200 rounded-lg p-3">
                    <RxCube size={20} color="#3B82F6" />
                  </div>
                  <div className=" pl-4">
                    <p className="text-gray-600 pl-4">{order.total}</p>
                    <p className=" text-gray-400 pl-4">{order.name.first}</p>
                  </div>
                </div>

                <p className="text-gray-600 md:grid hidden">
                  {order.method.toUpperCase()}
                </p>

                <div
                  className={
                    order.status == "Completed"
                      ? "bg-green-200 max-w-sm rounded-lg p-1 items-center md:grid hidden"
                      : order.status == "On hold"
                      ? "bg-gray-200 max-w-sm rounded-lg p-1 items-center md:grid hidden"
                      : "bg-yellow-200 max-w-sm rounded-lg p-1 items-center md:grid hidden"
                  }
                >
                  <p className=" text-center text-gray-600">{order.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;
