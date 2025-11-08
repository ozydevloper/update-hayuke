import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAllAgenda,
  mutationDeleteAgenda,
  mutationEditAgenda,
  mutationNewAgenda,
} from "./api";
import { toast } from "sonner";

const getQueryKeyAgenda = () => ["agenda"];
const getQueryKeyAgendaHariIni = () => ["agenda"];

const useQueryAgenda = () => {
  return useQuery({
    queryKey: getQueryKeyAgenda(),
    queryFn: fetchAllAgenda,
    staleTime: 15 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
  });
};

const useQueryHariIni = () => {
  return useQuery({
    queryKey: getQueryKeyAgendaHariIni(),
    staleTime: 15 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
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

const useDeleteAgenda = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationDeleteAgenda(req);
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyAgenda() }),
  });
};

const useEditAgenda = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationEditAgenda(req);
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyAgenda() }),
  });
};

export { useQueryAgenda, useNewAgenda, useDeleteAgenda, useEditAgenda };
