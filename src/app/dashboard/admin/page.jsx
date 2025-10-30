"use client";
import { fetchAllKategori } from "@/lib/api/kategori/api";
import ItemDashboard from "../_components/item.dashboard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTopik } from "@/lib/api/topik/api";
import { fetchAllKota } from "@/lib/api/kota/api";
import { fetchAllKalangan } from "@/lib/api/kalangan/api";
import { fetchAllBiaya } from "@/lib/api/biaya/api";
import TabelDashboard from "../_components/tabel.dashboard";

const AdminPage = () => {
  const allKategori = useQuery({
    queryKey: ["kategori"],
    queryFn: fetchAllKategori,
  });

  const allTopik = useQuery({
    queryKey: ["topik"],
    queryFn: fetchAllTopik,
  });

  const allKota = useQuery({
    queryKey: ["kota"],
    queryFn: fetchAllKota,
  });

  const allKalangan = useQuery({
    queryKey: ["kalangan"],
    queryFn: fetchAllKalangan,
  });

  const allBiaya = useQuery({
    queryKey: ["biaya"],
    queryFn: fetchAllBiaya,
  });

  return (
    <div>
      <div className="flex flex-col">
        <div className="font-bold text-sm my-5">Tabel Agenda</div>
        <TabelDashboard />
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
          />
          <ItemDashboard
            nameTab={"Topik"}
            isLoading={allTopik.isLoading}
            isError={allTopik.isError}
            isSuccess={allTopik.isSuccess}
            data={allTopik.data}
            refetch={allKategori.refetch}
          />
          <ItemDashboard
            nameTab={"Kota"}
            isLoading={allKota.isLoading}
            isError={allKota.isError}
            isSuccess={allKota.isSuccess}
            data={allKota.data}
            refetch={allKategori.refetch}
          />
          <ItemDashboard
            nameTab={"Kalangan"}
            isLoading={allKalangan.isLoading}
            isError={allKalangan.isError}
            isSuccess={allKalangan.isSuccess}
            data={allKalangan.data}
            refetch={allKategori.refetch}
          />
          <ItemDashboard
            nameTab={"Biaya"}
            isLoading={allBiaya.isLoading}
            isError={allBiaya.isError}
            isSuccess={allBiaya.isSuccess}
            data={allBiaya.data}
            refetch={allKategori.refetch}
          />
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
