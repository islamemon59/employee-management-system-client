import axios from "axios";

export const employeesCountData = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_URL}employee/count/data`
    );
    return data;
  } catch (error) {
    console.error("Error posting employee data:", error);
    throw error;
  }
};
