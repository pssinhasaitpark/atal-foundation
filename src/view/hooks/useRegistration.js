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
import { toast } from "react-toastify";

const useRegistrations = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosInstance.post("/register-form", formData);
      return response.data;
    },
    onMutate: () => {
      dispatch(setRegistrationLoading());
    },
    onSuccess: (data) => {
      dispatch(setRegistration(data.data));
      dispatch(setStatusSucceeded());
      toast.success(
        "Your Registration information has been submitted successfully!"
      );
    },
    onError: (error) => {
      dispatch(setRegistrationError(error.Registration));
      dispatch(setStatusFailed());
      toast.error(
        "There was an error submitting your Registration information."
      );
    },
  });

  return mutation;
};

export default useRegistrations;
