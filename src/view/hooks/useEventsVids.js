import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setEventsLoading,
  setEventsData,
  setEventsError,
} from "../redux/slice/eventsImgsSlice";
import axiosInstance from "../redux/axios/axios";

const fetchEventsData = async () => {
  try {
    const response = await axiosInstance.get("/event-videos");    
    return response.data.eventVideos[0] || null;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};
const useEventsVids = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventsVidData"],
    queryFn: fetchEventsData,
    onSuccess: (data) => {
      dispatch(setEventsData(data));
    },
    onError: (error) => {
      dispatch(setEventsError(error.message));
    },
    onSettled: () => {
      dispatch(setEventsLoading(false));
    },
  });

  if (isLoading && !isError) {
    dispatch(setEventsLoading());
  }

  return { data, isLoading, isError, error };
};

export default useEventsVids;
