import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setEventsLoading,
  setEventsData,
  setEventsError,
} from "../redux/slice/eventsSlice";
import axiosInstance from "../redux/axios/axios";

const fetchEventsData = async () => {
  const response = await axiosInstance.get("/event");
  return response.data;
};

const useEvents = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery(
    "eventsData",
    fetchEventsData,
    {
      onSuccess: (data) => {
        dispatch(setEventsData(data));
      },
      onError: (error) => {
        dispatch(setEventsError(error.message));
      },
      onSettled: () => {
        dispatch(setEventsLoading(false));
      },
    }
  );

  if (isLoading && !isError) {
    dispatch(setEventsLoading());
  }

  return { data, isLoading, isError, error };
};

export default useEvents;
