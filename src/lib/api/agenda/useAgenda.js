import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAllAgenda, mutationNewAgenda } from "./api";
import { toast } from "sonner";

const getQueryKeyAgenda = () => ["agenda"];

const useQueryAgenda = () => {
  return useQuery({
    queryKey: getQueryKeyAgenda(),
    queryFn: fetchAllAgenda,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

const useNewAgenda = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationNewAgenda(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyAgenda() }),
  });
};

export { useQueryAgenda, useNewAgenda };
