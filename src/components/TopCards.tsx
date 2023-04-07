import { StatCard } from "./utils/StatCard";
import { StatCardEnd } from "./utils/StatCardEnd";

export const TopCards = () => {
  return (
    <div className=" grid lg:grid-cols-6 gap-4 p-4 ">
      <StatCard title="Sales Today" amount="5,630" percent="+12" />
      <StatCard title="YTD Revenue" amount="984,540" percent="-17" />
      <StatCardEnd title="Customers Today" amount="81" percent="+21" />
    </div>
  );
};
