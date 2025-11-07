"use client";
import ItemDashboard from "../_components/item.dashboard";
import TabelDashboard from "../_components/tabel.dashboard";
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
import {
  useDeleteKalangan,
  useNewKalangan,
  useQueryKalangan,
  useUpdateKalangan,
} from "@/lib/api/kalangan/useKalangan";
import {
  useDeleteBiaya,
  useNewBiaya,
  useQueryBiaya,
  useUpdateBiaya,
} from "@/lib/api/biaya/useBiaya";
import { useQueryAgenda } from "@/lib/api/agenda/useAgenda";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AdminPage = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/");
  }
  if (session.user.role !== "ADMIN") {
    redirect("/");
  }

  // {'Agenda'}
  const allAgenda = useQueryAgenda();

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
  const allKalangan = useQueryKalangan();
  const useMutationNewKalangan = useNewKalangan();
  const useMutationDeleteKalangan = useDeleteKalangan();
  const useMutationUpdateKalangan = useUpdateKalangan();

  // {'Biaya'}
  const allBiaya = useQueryBiaya();
  const useMutationNewBiaya = useNewBiaya();
  const useMutationDeleteBiaya = useDeleteBiaya();
  const useMutationUpdateBiaya = useUpdateBiaya();

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
            createMutate={useMutationNewBiaya.mutateAsync}
            deleteMutate={useMutationDeleteBiaya.mutateAsync}
            updateMutate={useMutationUpdateBiaya.mutateAsync}
          />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
