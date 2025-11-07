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
import { useModeFeed } from "@/lib/globalVariabelZustand";
import FeedControl from "../_components/feedControl";
import { useRef, useState } from "react";
import FIlterTab from "@/_components/FilterTab";

export default function Home() {
  const { stateMode, setStateMode } = useModeFeed();
  const [isFilter, setIsFilter] = useState(false);
  const router = useRouter();

  const allAgenda = useQueryAgenda();
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

  const [judul, setjudul] = useState("");
  const [tanggal, settanggal] = useState("");
  const [biaya, setbiaya] = useState("");
  const [kalangan, setkalangan] = useState("");
  const [kota, setkota] = useState("");
  const [kategori, setkategori] = useState("");
  const [topik, settopik] = useState("");
  const setSearchValue = {
    judul: judul,
    tanggal: { tg: tanggal, fn: (e) => settanggal(e) },
    biaya: { by: biaya, fn: (e) => setbiaya(e) },
    kalangan: { kl: kalangan, fn: (e) => setkalangan(e) },
    kota: { kt: kota, fn: (e) => setkota(e) },
    kategori: { kat: kategori, fn: (e) => setkategori(e) },
    topik: { tp: topik, fn: (e) => settopik(e) },
  };

  return (
    <div>
      {!optionState && (
        <FIlterTab
          optionData={optionData}
          isFilter={isFilter}
          onClick={() => setIsFilter(!isFilter)}
          setSearchValue={setSearchValue}
        />
      )}
      <div className="flex flex-col">
        <div className="flex items-center gap-x-1">
          <Input
            placeholder="Cari judul agenda"
            onChange={(e) => setjudul(e.target.value)}
          />
          <div className="flex items-center gap-x-1">
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() => setIsFilter(!isFilter)}
              disabled={optionState}
            >
              <Filter />
            </Button>
            <Button
              onClick={() => {
                setStateMode("search");
              }}
              className={"font-bold items-center"}
              variant={
                stateMode === "search" ? "default" : "outline" && "outline"
              }
            >
              <Search />
              Cari
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-3 gap-y-1 items-center justify-between">
          <Button
            onClick={() => setStateMode("home")}
            variant={stateMode === "home" ? "default" : "outline"}
            className="md:w-[49%] w-full"
          >
            Event Hari ini
          </Button>
          <Button
            onClick={() => setStateMode("upcoming")}
            variant={
              stateMode === "upcoming" ? "default" : "outline" && "outline"
            }
            className={`md:w-[49%] w-full`}
          >
            Event Upcoming
          </Button>
        </div>
      </div>
      <div className="w-full">
        {allAgenda.isPending ||
        allAgenda.isFetching ||
        allAgenda.isRefetching ||
        optionState ? (
          <LoadingFeed />
        ) : allAgenda.isError ? (
          <FeedError refetch={allAgenda.refetch} />
        ) : allAgenda.isSuccess && allAgenda.data.length === 0 ? (
          <ZeroFeed />
        ) : (
          <FeedControl
            data={allAgenda.data}
            optionData={optionData}
            router={router}
            optionSearch={setSearchValue}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
