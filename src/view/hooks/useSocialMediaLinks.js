import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { setSocialMediaLoading, setSocialMediaLinks, setSocialMediaError } from '../redux/slice/socialMediaSlice';
import axiosInstance from '../redux/axios/axios'; 
import { toast } from 'react-toastify';

const fetchSocialMediaLinks = async () => {
  const response = await axiosInstance.get('/social-media-links');
  return response.data;
};

const useSocialMediaLinks = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery('socialMediaLinks', fetchSocialMediaLinks, {
    onSuccess: (data) => {
      dispatch(setSocialMediaLinks(data));
    },
    onError: (error) => {
      dispatch(setSocialMediaError(error.message));
      toast.error('Failed to load social media links');
    },
    onSettled: () => {
      dispatch(setSocialMediaLoading(false));
    },
  });

  if (isLoading) {
    dispatch(setSocialMediaLoading());
  }

  return { data, isLoading, isError, error };
};

export default useSocialMediaLinks;
