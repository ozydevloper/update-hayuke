import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAllTopik,
  mutationDeleteTopik,
  mutationNewTopik,
  mutationUpdateTopik,
} from "./api";

const getQueryKeyTopik = () => ["topik"];

const useQueryTopik = () => {
  return useQuery({
    queryKey: getQueryKeyTopik(),
    queryFn: fetchAllTopik,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

const useNewTopik = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationNewTopik(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyTopik() }),
  });
};

const useDeleteTopik = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (req) => {
      return await mutationDeleteTopik(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyTopik() }),
  });
};

const useUpdateTopik = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (req) => {
      return await mutationUpdateTopik(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyTopik() }),
  });
};

export { useQueryTopik, useNewTopik, useDeleteTopik, useUpdateTopik };
