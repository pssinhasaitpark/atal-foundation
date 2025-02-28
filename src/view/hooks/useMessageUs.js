import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  setMessageLoading,
  setMessage,
  setMessageError,
  setStatusSucceeded,
  setStatusFailed,
} from "../redux/slice/messageUsSlice";
import axiosInstance from "../redux/axios/axios";  // Ensure this is the correct axios instance
import { toast } from "react-toastify";

const useMessages = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosInstance.post("/message/create", formData);
      return response.data;  // Return the response data
    },
    onMutate: () => {
      dispatch(setMessageLoading());
    },
    onSuccess: (data) => {
      dispatch(setMessage(data.data));
      dispatch(setStatusSucceeded());
      toast.success("Your Message information has been submitted successfully!");
    },
    onError: (error) => {
      dispatch(setMessageError(error.message));
      dispatch(setStatusFailed());
      toast.error("There was an error submitting your Message information.");
    },
  });

  return mutation;  // Returning the mutation to be used in the component
};

export default useMessages;
