import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../redux/axios/axios";
const fetchAudioQuoteData = async () => {
  try {
    const response = await axiosInstance.get("/audio-quote");
    return response.data.data[0];
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const useAudio = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["audioQuote"],
    queryFn: fetchAudioQuoteData,
  });
  return { data, isLoading, isError, error };
};

export default useAudio;
