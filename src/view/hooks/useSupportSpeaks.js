import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../redux/axios/axios";
const fetchSupportSpeaksData = async () => {
  try {
    const response = await axiosInstance.get("/support-speaker");
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const useSupportSpeaks = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["supportSpeaksData"],
    queryFn: fetchSupportSpeaksData,
  });
  return { data, isLoading, isError, error };
};

export default useSupportSpeaks;
