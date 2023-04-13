import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement
);

const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const data = {
  labels,
  datasets: [
    {
      label: "Number of Sales",
      data: labels.map(() => faker.datatype.number({ min: 20, max: 200 })),
      borderWidth: 4,
      borderRadius: 8,
      borderColor: "#3B82F6",
      backgroundColor: "#3B82F6",
      barThickness: 12,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Bar Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        color: "#FFFFFF",
        tickColor: "rgba(0,0,0,0)",
      },
      ticks: {
        color: "#a9a9a9",
      },
    },
    y: {
      grid: {
        color: "#E5E7EB",
        borderColor: "rgba(0,0,0,0)",
        borderDash: [5, 4],
        tickColor: "rgba(0,0,0,0)",
      },
      ticks: {
        color: "#a9a9a9",
      },
    },
  },
};

export const BarChart = () => {
  return (
    <>
      <div className=" md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto bg-white w-full border p-4 rounded-lg shadow-md ">
        <div className=" flex p-4">
          <h1 className=" text-gray-500 font-semibold ">Daily customers</h1>
        </div>
        <Bar data={data} options={options} />
      </div>
    </>
  );
};
