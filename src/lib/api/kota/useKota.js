import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAllKota,
  mutationDeleteKota,
  mutationNewKota,
  mutationUpdateKota,
} from "./api";

const getQueryKeyKota = () => ["kota"];

const useQueryKota = () => {
  return useQuery({
    queryKey: getQueryKeyKota(),
    queryFn: fetchAllKota,
    staleTime: 15 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
  });
};

const useNewKota = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationNewKota(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyKota() }),
  });
};

const useDeleteKota = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationDeleteKota(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyKota() }),
  });
};

const useUpdateKota = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (req) => {
      return await mutationUpdateKota(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyKota }),
  });
};

export { useQueryKota, useNewKota, useDeleteKota, useUpdateKota };
