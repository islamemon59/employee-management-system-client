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

  if (isLoading) return <Loader />;

  return (
    <div className="">
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
            {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmployeeDetails;
