import { StatCard } from "./utils/StatCard";
import { StatCardEnd } from "./utils/StatCardEnd";
import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
export const TopCards = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  useEffect(() => {
    setFirst(faker.datatype.number({ min: 5000, max: 20000 }).toLocaleString());
    setSecond(
      faker.datatype.number({ min: 500000, max: 2000000 }).toLocaleString()
    );
    setThird(faker.datatype.number({ min: 50, max: 200 }).toLocaleString());
  }, []);

  return (
    <div className=" grid lg:grid-cols-6 gap-4 p-4 ">
      <StatCard title="Sales Today" amount={first} percent="+12" />
      <StatCard title="YTD Revenue" amount={second} percent="-17" />
      <StatCardEnd title="Customers Today" amount={third} percent="+21" />
    </div>
  );
};
