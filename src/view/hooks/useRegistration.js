import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  setRegistrationLoading,
  setRegistration,
  setRegistrationError,
  setStatusSucceeded,
  setStatusFailed,
} from "../redux/slice/registrationSlice";
import axiosInstance from "../redux/axios/axios";

const useRegistrations = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosInstance.post("/register-form", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onMutate: () => {
      dispatch(setRegistrationLoading());
    },
    onSuccess: (data) => {
      dispatch(setRegistration(data.data));
      dispatch(setStatusSucceeded());
    },
    onError: (error) => {
      dispatch(setRegistrationError(error.Registration));
      dispatch(setStatusFailed());
    },
  });

  return mutation;
};

export default useRegistrations;
