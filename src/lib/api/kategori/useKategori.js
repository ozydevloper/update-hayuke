import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAllKategori,
  mutationDeleteKategori,
  mutationNewKategori,
  mutationUpdateKategori,
} from "./api";
const getQueryKeyKategori = () => ["kategori"];

const useQueryKategori = () => {
  return useQuery({
    queryKey: getQueryKeyKategori(),
    queryFn: fetchAllKategori,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

const useNewKategori = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (req) => {
      return await mutationNewKategori(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyKategori() }),
  });
};

const useDeleteKategori = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (req) => {
      return await mutationDeleteKategori(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyKategori() }),
  });
};

const useUpdateKetegori = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (req) => {
      return await mutationUpdateKategori(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: getQueryKeyKategori() }),
  });
};

export {
  useQueryKategori,
  useNewKategori,
  useDeleteKategori,
  useUpdateKetegori,
};
