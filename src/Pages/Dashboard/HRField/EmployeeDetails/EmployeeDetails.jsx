import { useParams } from "react-router";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Loader from "../../../../Shared/Loader/Loader";

const EmployeeDetails = () => {
  const { id } = useParams();
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  console.log(id);
  const axiosSecure = useAxiosSecure();
  const { data: employees = [], isLoading } = useQuery({
    queryKey: ["id", id],
    enabled: !!id,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`single/employee/data/${id}`);
      return data;
    },
  });

  const {data: employee = {}} = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const {data} = await axiosSecure.get(`employee/details/${id}`)
      return data
    }
  })

  if (isLoading) return <Loader />;

  return (
    <div className="">
      <div class="overflow-hidden text-center max-w-2xs bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <figure class="p-6 pb-0">
          <span class="relative inline-flex items-center justify-center w-20 h-20 text-white rounded-full">
            <img
              src={employee.photo}
              alt="user name"
              title="user name"
              width="80"
              height="80"
              class="max-w-full rounded-full"
            />
          </span>
        </figure>

        <div class="p-6">
          <header class="mb-4">
            <h3 class="text-xl font-medium text-slate-700">{employee.name}</h3>
            <p class=" text-slate-400">{employee.designation}</p>
          </header>
        </div>

        <div class="flex justify-end gap-2 p-6 pt-0">
          <button class="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-teal-50 text-teal-500 hover:bg-teal-100 hover:text-teal-600 focus:bg-teal-200 focus:text-teal-700 disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-100 disabled:text-teal-400 disabled:shadow-none">
            <span class="order-2">Send message</span>
            <span class="relative only:-mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
                role="graphics-symbol"
                aria-labelledby="title-21 desc-21"
              >
                <title id="title-21">Icon title</title>
                <desc id="desc-21">
                  A more detailed description of the icon
                </desc>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className=" max-w-xl h-[400px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={employees}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="createdAt"
              tickFormatter={(_, index) => {
                const item = employees[index];
                return `${item.month} ${item.year}`;
              }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="amount"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            >
              {employees.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmployeeDetails;
