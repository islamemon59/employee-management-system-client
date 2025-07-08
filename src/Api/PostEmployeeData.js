import axios from "axios";

export const postEmployeeData = async (employeeData) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_URL}employee-data`,
      employeeData
    );
    return data;
  } catch (error) {
    console.error("Error posting employee data:", error);
    throw error;
  }
};
