import { useQuery } from "@tanstack/react-query";
import { getInfo } from "../services/physicianOrderSheet";

export const useGetInfo = () =>
  useQuery({
    queryKey: ["get-info"],
    queryFn: getInfo,
    retry: false,
    staleTime: 2 * 60 * 60 * 1000,
  });
