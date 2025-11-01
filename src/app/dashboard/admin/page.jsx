"use client";
import {
  fetchAllKategori,
  mutationDeleteKategori,
  mutationNewKategori,
} from "@/lib/api/kategori/api";
import ItemDashboard from "../_components/item.dashboard";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchAllTopik, mutationNewTopik } from "@/lib/api/topik/api";
import { fetchAllKota, mutationNewKota } from "@/lib/api/kota/api";
import { fetchAllKalangan, mutationNewKalangan } from "@/lib/api/kalangan/api";
import { fetchAllBiaya, mutationNewBiaya } from "@/lib/api/biaya/api";
import TabelDashboard from "../_components/tabel.dashboard";
import { fetchAllAgenda } from "@/lib/api/agenda/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { toast } from "sonner";

const AdminPage = () => {
  const allAgenda = useQuery({
    queryKey: ["allagenda"],
    queryFn: fetchAllAgenda,
  });

  const allKategori = useQuery({
    queryKey: ["kategori"],
    queryFn: fetchAllKategori,
  });
  const useMutationNewKategori = useMutation({
    mutationFn: async (req) => {
      return await mutationNewKategori(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });
  const useMutationDeleteKategori = useMutation({
    mutationFn: async (req) => {
      return await mutationDeleteKategori(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });

  const allTopik = useQuery({
    queryKey: ["topik"],
    queryFn: fetchAllTopik,
  });
  const useMutationNewTopik = useMutation({
    mutationFn: async (req) => {
      return await mutationNewTopik(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });

  const allKota = useQuery({
    queryKey: ["kota"],
    queryFn: fetchAllKota,
  });
  const useMutationNewKota = useMutation({
    mutationFn: async (req) => {
      return await mutationNewKota(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });

  const allKalangan = useQuery({
    queryKey: ["kalangan"],
    queryFn: fetchAllKalangan,
  });
  const useMutationNewKalangan = useMutation({
    mutationFn: async (req) => {
      return await mutationNewKalangan(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });

  const allBiaya = useQuery({
    queryKey: ["biaya"],
    queryFn: fetchAllBiaya,
  });
  const useMutationBiaya = useMutation({
    mutationFn: async (req) => {
      return await mutationNewBiaya(req);
    },
    onError: (error) => {
      toast.error(`${error.name}`);
    },
  });

  return (
    <div>
      <div className="flex flex-col">
        <div className="font-bold text-sm my-5">Tabel Agenda</div>
        <p className="text-[0.680rem]">Filter dengan Tanggal</p>
        <div className="flex my-2 gap-x-1 items-center justify-center">
          <Button variant={"outline"} size={"icon-sm"}>
            <CalendarDays />
          </Button>
          <Input placeholder="filter" type={"date"} />
          <Button>Apply</Button>
        </div>
        <TabelDashboard
          isError={allAgenda.isError}
          isLoading={allAgenda.isLoading}
          isSuccess={allAgenda.isSuccess}
          data={allAgenda.data}
          refetch={allAgenda.refetch}
        />
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-sm my-5">Kateogri, Topik, DLL</div>
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
          />
          <ItemDashboard
            nameTab={"Topik"}
            isLoading={allTopik.isLoading}
            isError={allTopik.isError}
            isSuccess={allTopik.isSuccess}
            data={allTopik.data}
            refetch={allTopik.refetch}
            createMutate={useMutationNewTopik.mutateAsync}
          />
          <ItemDashboard
            nameTab={"Kota"}
            isLoading={allKota.isLoading}
            isError={allKota.isError}
            isSuccess={allKota.isSuccess}
            data={allKota.data}
            refetch={allKota.refetch}
            createMutate={useMutationNewKota.mutateAsync}
          />
          <ItemDashboard
            nameTab={"Kalangan"}
            isLoading={allKalangan.isLoading}
            isError={allKalangan.isError}
            isSuccess={allKalangan.isSuccess}
            data={allKalangan.data}
            refetch={allKalangan.refetch}
            createMutate={useMutationNewKalangan.mutateAsync}
          />
          <ItemDashboard
            nameTab={"Biaya"}
            isLoading={allBiaya.isLoading}
            isError={allBiaya.isError}
            isSuccess={allBiaya.isSuccess}
            data={allBiaya.data}
            refetch={allBiaya.refetch}
            createMutate={useMutationBiaya.mutateAsync}
          />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
