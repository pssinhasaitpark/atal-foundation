import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setHomeSlideLoading,
  setHomeSlideData,
  setHomeSlideError,
} from "../redux/slice/homeSlideSlice";
import axiosInstance from "../redux/axios/axios";

const fetchHomeSlideData = async () => {
  try {
    const response = await axiosInstance.get("/homePage");
    return response.data.homePageData;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const useHomeSlide = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["homeSlideData"],
    queryFn: fetchHomeSlideData,

    onSuccess: (data) => {
      dispatch(setHomeSlideData(data));
    },
    onError: (error) => {
      dispatch(setHomeSlideError(error.message));
    },
    onSettled: () => {
      dispatch(setHomeSlideLoading(false));
    },
  });
  if (isLoading && !isError) {
    dispatch(setHomeSlideLoading());
  }

  return { data, isLoading, isError, error };
};

export default useHomeSlide;
