import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  setSubscribeLoading,
  setSubscribeEmail,
  setSubscribeError,
  setStatusSucceeded,
  setStatusFailed,
} from "../redux/slice/SubscribersSlice";
import axiosInstance from "../redux/axios/axios";
import { toast } from "react-toastify";

const useSubscribe = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (email) => {
      const response = await axiosInstance.post("/subscribers/create", {
        email,
      });
      return response.data;
    },
    onMutate: () => {
      dispatch(setSubscribeLoading());
    },
    onSuccess: (data) => {
      dispatch(setSubscribeEmail(data.email));
      dispatch(setStatusSucceeded());
      toast.success("You have successfully subscribed to our newsletter!");
    },
    onError: (error) => {
      dispatch(setSubscribeError(error.message));
      dispatch(setStatusFailed());
      toast.error("There was an error subscribing to the newsletter.");
    },
  });

  return mutation;
};

export default useSubscribe;
