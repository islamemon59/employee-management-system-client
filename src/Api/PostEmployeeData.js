import axios from "axios";

export const postEmployeeData = async (employeeData, token) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_URL}employee-data`,
      employeeData,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Error posting employee data:", error);
    throw error;
  }
};
