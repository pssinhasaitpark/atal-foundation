import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../redux/axios/axios";
const fetchBookSectionData = async () => {
  try {
    const response = await axiosInstance.get("/books");
    return response.data.books[0] || null;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const useBookSection = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["bookSection"],
    queryFn: fetchBookSectionData,
  });
  return { data, isLoading, isError, error };
};

export default useBookSection;
