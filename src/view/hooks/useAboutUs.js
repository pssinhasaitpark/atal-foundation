import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setAboutUsLoading,
  setAboutUsData,
  setAboutUsError,
} from "../redux/slice/aboutUsSlice";
import axiosInstance from "../redux/axios/axios";

const fetchAboutUsData = async () => {
  try {
    const response = await axiosInstance.get('/about');
    return response.data[0];
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const useAboutUs = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["aboutUsData"],
    queryFn: fetchAboutUsData,
    onSuccess: (data) => {
      dispatch(setAboutUsData(data));
    },
    onError: (error) => {
      dispatch(setAboutUsError(error.message));
    },
    onSettled: () => {
      dispatch(setAboutUsLoading(false));
    },
  });

  if (isLoading && !isError) {
    dispatch(setAboutUsLoading());
  }

  return { data, isLoading, isError, error };
};

export default useAboutUs;
