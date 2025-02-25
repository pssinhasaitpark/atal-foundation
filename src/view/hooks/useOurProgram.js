import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setOurProgramLoading,
  setOurProgramData,
  setOurProgramError,
} from "../redux/slice/ourProgramSlice";
import axiosInstance from "../redux/axios/axios";
const fetchOurProgramData = async () => {
  const response = await axiosInstance.get("/our-program");
  return response.data;
};

const useOurProgram = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery(
    "ourProgramData",
    fetchOurProgramData,
    {
      onSuccess: (data) => {
        dispatch(setOurProgramData(data));
      },
      onError: (error) => {
        dispatch(setOurProgramError(error.message));
      },
      onSettled: () => {
        dispatch(setOurProgramLoading(false));
      },
    }
  );
  if (isLoading && !isError) {
    dispatch(setOurProgramLoading());
  }

  return { data, isLoading, isError, error };
};

export default useOurProgram;
