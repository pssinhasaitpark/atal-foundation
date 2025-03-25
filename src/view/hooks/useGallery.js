import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setGalleryLoading,
  setGalleryData,
  setGalleryError,
} from "../redux/slice/gallerySlice";
import axiosInstance from "../redux/axios/axios";

const fetchGalleryData = async () => {
  try {
    const response = await axiosInstance.get('/gallery');
    return response.data.galleries[0] || null;
  } catch (error) {
    console.error("API call failed:", error);
    throw error; 
  }
};

const useGallery = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["GalleryData"],
    queryFn: fetchGalleryData,
    onSuccess: (data) => {
      dispatch(setGalleryData(data));
    },
    onError: (error) => {
      dispatch(setGalleryError(error.message));
    },
    onSettled: () => {
      dispatch(setGalleryLoading(false));
    },
  });

  if (isLoading && !isError) {
    dispatch(setGalleryLoading());
  }

  return { data, isLoading, isError, error };
};

export default useGallery;
