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
    },
    onError: (error) => {
      dispatch(setSubscribeError(error.message));
      dispatch(setStatusFailed());
    },
  });

  return mutation;
};

export default useSubscribe;
