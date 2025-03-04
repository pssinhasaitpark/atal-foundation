import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setOurNewsLoading,
  setOurNewsData,
  setOurNewsError,
} from "../redux/slice/ourNewsSlice";
import axiosInstance from "../redux/axios/axios";

const fetchOurNewsData = async () => {
  try {
    const response = await axiosInstance.get("/news");
    return response.data.allNews;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const useOurNews = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["ourNewsData"],
    queryFn: fetchOurNewsData,

    onSuccess: (data) => {
      dispatch(setOurNewsData(data));
    },
    onError: (error) => {
      dispatch(setOurNewsError(error.message));
    },
    onSettled: () => {
      dispatch(setOurNewsLoading(false));
    },
  });
  if (isLoading && !isError) {
    dispatch(setOurNewsLoading());
  }

  return { data, isLoading, isError, error };
};

export default useOurNews;
