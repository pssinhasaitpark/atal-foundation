import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setSocialMediaLoading,
  setSocialMediaLinks,
  setSocialMediaError,
} from "../redux/slice/socialMediaSlice";
import axiosInstance from "../redux/axios/axios";

const fetchSocialMediaLinks = async () => {
  try {
    const response = await axiosInstance.get("/social-media");
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const useSocialMediaLinks = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["socialMediaLinks"],
    queryFn: fetchSocialMediaLinks,
    onSuccess: (data) => {
      dispatch(setSocialMediaLinks(data));
    },
    onError: (error) => {
      dispatch(setSocialMediaError(error.message));
    },
    onSettled: () => {
      dispatch(setSocialMediaLoading(false));
    },
  });

  if (isLoading) {
    dispatch(setSocialMediaLoading(true));
  }

  return { data, isLoading, isError, error };
};

export default useSocialMediaLinks;
