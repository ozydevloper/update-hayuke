import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAllBiaya,
  mutationDeleteBiaya,
  mutationNewBiaya,
  mutationUpdateBiaya,
} from "./api";

const getQueryKeyBiaya = () => ["biaya"];

const useQueryBiaya = () => {
  return useQuery({
    queryKey: getQueryKeyBiaya(),
    queryFn: fetchAllBiaya,
    staleTime: 15 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
  });
};

const useNewBiaya = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationNewBiaya(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyBiaya() }),
  });
};

const useDeleteBiaya = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationDeleteBiaya(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyBiaya() }),
  });
};

const useUpdateBiaya = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationUpdateBiaya(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyBiaya() }),
  });
};

export { useQueryBiaya, useNewBiaya, useDeleteBiaya, useUpdateBiaya };
