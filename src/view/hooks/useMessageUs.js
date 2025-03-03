import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  setMessageLoading,
  setMessage,
  setMessageError,
  setStatusSucceeded,
  setStatusFailed,
} from "../redux/slice/messageUsSlice";
import axiosInstance from "../redux/axios/axios"; 

const useMessages = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosInstance.post("/message/create", formData);
      return response.data; 
    },
    onMutate: () => {
      dispatch(setMessageLoading());
    },
    onSuccess: (data) => {
      dispatch(setMessage(data.data));
      dispatch(setStatusSucceeded());
    },
    onError: (error) => {
      dispatch(setMessageError(error.message));
      dispatch(setStatusFailed());
    },
  });

  return mutation; 
};

export default useMessages;
