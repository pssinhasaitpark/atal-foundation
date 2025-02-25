import { useQuery } from "@tanstack/react-query";
const fetchPopupState = async () => {
  const response = await fetch("/api/getPopupState");
  if (!response.ok) throw new Error("Error fetching popup state");
  return response.json();
};

export const usePopupState = () => {
  return useQuery(["popupState"], fetchPopupState);
};