import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setContactLoading, setContact, setContactError, setStatusSucceeded, setStatusFailed } from '../../redux/slice/ContactSlice/ContactSlice'; 
import axiosInstance from '../../redux/axios/axios';  
import { toast } from 'react-toastify'; 

const useContacts = () => {
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await axiosInstance.post('/contact/create', formData); 
      return response.data;
    },
    onMutate: () => {
      dispatch(setContactLoading());
    },
    onSuccess: (data) => {
      dispatch(setContact(data.data));
      dispatch(setStatusSucceeded()); 
      toast.success("Your contact information has been submitted successfully!"); 
    },
    onError: (error) => {
      dispatch(setContactError(error.message)); 
      dispatch(setStatusFailed()); 
      toast.error("There was an error submitting your contact information."); 
    },
  });

  return mutation;
};

export default useContacts;
