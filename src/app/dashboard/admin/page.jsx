"use client";
import {
  fetchAllKategori,
  mutationDeleteKategori,
  mutationNewKategori,
  mutationUpdateKategori,
} from "@/lib/api/kategori/api";
import ItemDashboard from "../_components/item.dashboard";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchAllTopik,
  mutationDeleteTopik,
  mutationNewTopik,
  mutationUpdateTopik,
} from "@/lib/api/topik/api";
import {
  fetchAllKota,
  mutationDeleteKota,
  mutationNewKota,
  mutationUpdateKota,
} from "@/lib/api/kota/api";
import {
  fetchAllKalangan,
  mutationDeleteKalangan,
  mutationNewKalangan,
  mutationUpdateKalangan,
} from "@/lib/api/kalangan/api";
import {
  fetchAllBiaya,
  mutationDeleteBiaya,
  mutationNewBiaya,
  mutationUpdateBiaya,
} from "@/lib/api/biaya/api";
import TabelDashboard from "../_components/tabel.dashboard";
import { fetchAllAgenda } from "@/lib/api/agenda/api";
import { toast } from "sonner";
import {
  useDeleteKategori,
  useNewKategori,
  useQueryKategori,
  useUpdateKetegori,
} from "@/lib/api/kategori/useKategori";
import {
  useDeleteTopik,
  useNewTopik,
  useQueryTopik,
  useUpdateTopik,
} from "@/lib/api/topik/useTopik";
import {
  useDeleteKota,
  useNewKota,
  useQueryKota,
  useUpdateKota,
} from "@/lib/api/kota/useKota";

const AdminPage = () => {
  const allAgenda = useQuery({
    queryKey: ["allagenda"],
    queryFn: fetchAllAgenda,
    staleTime: 5 * 60 * 1000,
  });

  // {'Kategori'}
  const allKategori = useQueryKategori();
  const useMutationNewKategori = useNewKategori();
  const useMutationDeleteKategori = useDeleteKategori();
  const useMutationUpdateKategori = useUpdateKetegori();

  // {'Topik'}
  const allTopik = useQueryTopik();
  const useMutationNewTopik = useNewTopik();
  const useMutationDeleteTopik = useDeleteTopik();
  const useMutationUpdateTopik = useUpdateTopik();

  // {'KOta'}
  const allKota = useQueryKota();
  const useMutationNewKota = useNewKota();
  const useMutationDeleteKota = useDeleteKota();
  const useMutationUpdateKota = useUpdateKota();

  // {'Kalangan'}
  const allKalangan = useQuery({
    queryKey: ["kalangan"],
    queryFn: fetchAllKalangan,
    staleTime: 5 * 60 * 1000,
  });
  const useMutationNewKalangan = useMutation({
    mutationFn: async (req) => {
      return await mutationNewKalangan(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });
  const useMutationDeleteKalangan = useMutation({
    mutationFn: async (req) => {
      return await mutationDeleteKalangan(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });
  const useMutationUpdateKalangan = useMutation({
    mutationFn: async (req) => {
      return await mutationUpdateKalangan(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });

  // {'Biaya'}
  const allBiaya = useQuery({
    queryKey: ["biaya"],
    queryFn: fetchAllBiaya,
    staleTime: 5 * 60 * 1000,
  });
  const useMutationBiaya = useMutation({
    mutationFn: async (req) => {
      return await mutationNewBiaya(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });
  const useMutationDeleteBiaya = useMutation({
    mutationFn: async (req) => {
      return await mutationDeleteBiaya(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });
  const useMutationUpdateBiaya = useMutation({
    mutationFn: async (req) => {
      return await mutationUpdateBiaya(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });

  return (
    <div>
      <div className="flex flex-col">
        <TabelDashboard
          isError={allAgenda.isError}
          isPending={allAgenda.isPending}
          isSuccess={allAgenda.isSuccess}
          data={allAgenda.data}
          refetch={allAgenda.refetch}
          isRefetching={allAgenda.isRefetching}
        />
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-sm my-5">Kategori, Topik, DLL</div>
        <div className="grid  gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <ItemDashboard
            nameTab={"Kategori"}
            isLoading={allKategori.isLoading}
            isError={allKategori.isError}
            isSuccess={allKategori.isSuccess}
            data={allKategori.data}
            refetch={allKategori.refetch}
            createMutate={useMutationNewKategori.mutateAsync}
            deleteMutate={useMutationDeleteKategori.mutateAsync}
            updateMutate={useMutationUpdateKategori.mutateAsync}
          />
          <ItemDashboard
            nameTab={"Topik"}
            isLoading={allTopik.isLoading}
            isError={allTopik.isError}
            isSuccess={allTopik.isSuccess}
            data={allTopik.data}
            refetch={allTopik.refetch}
            createMutate={useMutationNewTopik.mutateAsync}
            deleteMutate={useMutationDeleteTopik.mutateAsync}
            updateMutate={useMutationUpdateTopik.mutateAsync}
          />
          <ItemDashboard
            nameTab={"Kota"}
            isLoading={allKota.isLoading}
            isError={allKota.isError}
            isSuccess={allKota.isSuccess}
            data={allKota.data}
            refetch={allKota.refetch}
            createMutate={useMutationNewKota.mutateAsync}
            deleteMutate={useMutationDeleteKota.mutateAsync}
            updateMutate={useMutationUpdateKota.mutateAsync}
          />
          <ItemDashboard
            nameTab={"Kalangan"}
            isLoading={allKalangan.isLoading}
            isError={allKalangan.isError}
            isSuccess={allKalangan.isSuccess}
            data={allKalangan.data}
            refetch={allKalangan.refetch}
            createMutate={useMutationNewKalangan.mutateAsync}
            deleteMutate={useMutationDeleteKalangan.mutateAsync}
            updateMutate={useMutationUpdateKalangan.mutateAsync}
          />
          <ItemDashboard
            nameTab={"Biaya"}
            isLoading={allBiaya.isLoading}
            isError={allBiaya.isError}
            isSuccess={allBiaya.isSuccess}
            data={allBiaya.data}
            refetch={allBiaya.refetch}
            createMutate={useMutationBiaya.mutateAsync}
            deleteMutate={useMutationDeleteBiaya.mutateAsync}
            updateMutate={useMutationUpdateBiaya.mutateAsync}
          />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
