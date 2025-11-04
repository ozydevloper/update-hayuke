import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAllKalangan,
  mutationDeleteKalangan,
  mutationNewKalangan,
  mutationUpdateKalangan,
} from "./api";

const getQueryKeyKalangan = () => ["kalangan"];

const useQueryKalangan = () => {
  return useQuery({
    queryKey: getQueryKeyKalangan(),
    queryFn: fetchAllKalangan,
    staleTime: 15 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
  });
};

const useNewKalangan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationNewKalangan(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyKalangan() }),
  });
};

const useDeleteKalangan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationDeleteKalangan(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyKalangan() }),
  });
};

const useUpdateKalangan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationUpdateKalangan(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyKalangan() }),
  });
};

export {
  useQueryKalangan,
  useNewKalangan,
  useDeleteKalangan,
  useUpdateKalangan,
};
