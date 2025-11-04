"use client";
import FeedContentCard from "@/_components/feed.content.card";
import Footer from "@/_components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQueryAgenda } from "@/lib/api/agenda/useAgenda";
import { Filter, Search } from "lucide-react";
import LoadingFeed from "../_components/loading.feed";
import FeedError from "../_components/feedError";
import ZeroFeed from "../_components/ZeroFeed";
import { useQueryKategori } from "@/lib/api/kategori/useKategori";
import { useQueryTopik } from "@/lib/api/topik/useTopik";
import { useQueryKalangan } from "@/lib/api/kalangan/useKalangan";
import { useQueryBiaya } from "@/lib/api/biaya/useBiaya";
import { useQueryKota } from "@/lib/api/kota/useKota";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const agendaHariIni = useQueryAgenda();
  const allKategori = useQueryKategori();
  const allTopik = useQueryTopik();
  const allKalangan = useQueryKalangan();
  const allBiaya = useQueryBiaya();
  const allKota = useQueryKota();

  const optionState =
    allBiaya.isPending ||
    allKategori.isPending ||
    allTopik.isPending ||
    allKalangan.isPending ||
    allKota.isPending;

  const optionData = {
    kategori: allKategori.data,
    topik: allTopik.data,
    kalangan: allKalangan.data,
    kota: allKota.data,
    biaya: allBiaya.data,
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center gap-x-1">
          <Input placeholder="Cari judul agenda" />
          <div className="flex items-center gap-x-1">
            <Button size={"icon"} variant={"outline"}>
              <Filter />
            </Button>
            <Button className={"font-bold items-center"}>
              <Search />
              Cari
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-3 gap-y-1 items-center justify-between">
          <Button className="md:w-[49%] w-full">Event Hari ini</Button>
          <Button variant="outline" className={`md:w-[49%] w-full`}>
            Event Upcoming
          </Button>
        </div>
      </div>
      <div className="w-full">
        {agendaHariIni.isPending ||
        agendaHariIni.isFetching ||
        agendaHariIni.isRefetching ||
        optionState ? (
          <LoadingFeed />
        ) : agendaHariIni.isError ? (
          <FeedError refetch={agendaHariIni.refetch} />
        ) : agendaHariIni.isSuccess && agendaHariIni.data.length === 0 ? (
          <ZeroFeed />
        ) : (
          agendaHariIni.data.map((e, i) => {
            return (
              <FeedContentCard
                key={i}
                data={e}
                optionData={optionData}
                router={router}
              />
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}
