import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setAboutUsLoading,
  setAboutUsData,
  setAboutUsError,
} from "../redux/slice/aboutUsSlice";
import axiosInstance from "../redux/axios/axios";

const fetchAboutUsData = async () => {
  const response = await axiosInstance.get("/about");
  return response.data;
};

const useAboutUs = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery(
    "aboutUsData",
    fetchAboutUsData,
    {
      onSuccess: (data) => {
        dispatch(setAboutUsData(data));
      },
      onError: (error) => {
        dispatch(setAboutUsError(error.message));
      },
      onSettled: () => {
        dispatch(setAboutUsLoading(false));
      },
    }
  );

  if (isLoading && !isError) {
    dispatch(setAboutUsLoading());
  }

  return { data, isLoading, isError, error };
};

export default useAboutUs;
