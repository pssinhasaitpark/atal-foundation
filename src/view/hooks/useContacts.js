import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  setContactLoading,
  setContact,
  setContactError,
  setStatusSucceeded,
  setStatusFailed,
} from "../redux/slice/ContactSlice";
import axiosInstance from "../redux/axios/axios";

const useContacts = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosInstance.post("/contact/create", formData);
      return response.data;
    },
    onMutate: () => {
      dispatch(setContactLoading());
    },
    onSuccess: (data) => {
      dispatch(setContact(data.data));
      dispatch(setStatusSucceeded());
    },
    onError: (error) => {
      dispatch(setContactError(error.message));
      dispatch(setStatusFailed());
    },
  });

  return mutation;
};

export default useContacts;
