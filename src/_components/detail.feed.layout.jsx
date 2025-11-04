"use client";
import Footer from "@/_components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQueryAgenda } from "@/lib/api/agenda/useAgenda";
import { useQueryBiaya } from "@/lib/api/biaya/useBiaya";
import { useQueryKalangan } from "@/lib/api/kalangan/useKalangan";
import { useQueryKategori } from "@/lib/api/kategori/useKategori";
import { useQueryKota } from "@/lib/api/kota/useKota";
import { useQueryTopik } from "@/lib/api/topik/useTopik";
import { tanggalParse } from "@/lib/tanggalParse";
import Link from "next/link";

const DetailFeedLayout = ({ children }) => {
  return <div className="h-dvh relative flex flex-col gap-y-1">{children}</div>;
};

const PelaksanaanOffline = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-start gap-x-1">
        <span className="font-bold text-primary">Kota:</span>
        <p>Jakarta</p>
      </div>
      <div className="flex items-start gap-x-1">
        <span className="font-bold text-primary">Lokasi:</span>
        <p>Masjid Al-Fitroh</p>
      </div>
      <div className="flex items-start gap-x-1">
        <span className="font-bold text-primary">Alamat:</span>
        <Link href={"/"} className="underline text-primary">
          Bla bla bla bla
        </Link>
      </div>
    </div>
  );
};

const Detail = ({ data, optionData }) => {
  const judul = data.judul;
  const deskripsi = data.deskripsi;
  const tanggal = tanggalParse(data.tanggal);
  const waktu = data.waktu;
  const biaya = optionData.biaya.find((biaya) => biaya.id === data.biayaId);
  const kalangan = optionData.kalangan.find(
    (kalangan) => kalangan.id === data.kalanganId
  );
  const pembicara = data.pembicara;
  const penyelenggara = data.penyelenggara;
  return (
    <div className="flex flex-col">
      <Card className={`w-full h-full gap-0 px-3 py-3`}>
        <div className="w-full font-bold text-md justify-center items-center text-center text-primary mt-2 mb-3">
          {judul}
        </div>
        <div className="mb-6 flex flex-col gap-y-1">
          <span className="font-bold text-sm text-primary">Deskripsi</span>
          <p className="whitespace-pre-line text-sm">{deskripsi}</p>
        </div>
        <div className=" flex flex-col gap-y-1">
          <span className="font-bold text-sm text-primary">Agenda Detail</span>
          <div className="flex flex-col text-sm gap-y-0.5">
            <div className="flex items-start gap-x-1">
              <span className="font-bold text-primary">Tanggal:</span>
              <p>{tanggal}</p>
            </div>
            <div className="flex items-start gap-x-1">
              <span className="font-bold text-primary">Waktu:</span>
              <p>{waktu}</p>
            </div>
            <div className="flex items-start gap-x-1">
              <span className="font-bold text-primary">Biaya:</span>
              <p>{biaya.name}</p>
            </div>
            <div className="flex items-start gap-x-1">
              <span className="font-bold text-primary">Kalangan:</span>
              <p>{kalangan.name}</p>
            </div>
            <div className="flex items-start gap-x-1">
              <span className="font-bold text-primary">Pembicara:</span>
              <p>{pembicara.join(", ")}</p>
            </div>
            <div className="flex items-start gap-x-1">
              <span className="font-bold text-primary">Penyelenggara:</span>
              <p>{penyelenggara.join(", ")}</p>
            </div>
            <Card className={"p-0 gap-0 my-2 px-3 py-2 border-t-4"}>
              <div className="w-full h-full">
                <div className="font-bold text-primary  text-center justify-center items-center mb-1">
                  Pelaksanaan
                </div>
                <PelaksanaanOffline />
              </div>
            </Card>
            <div className="aspect-square">
              <Skeleton className={"w-full h-full"} />
            </div>
            <div className="flex flex-col">
              <div className="mt-4 mb-2 font-bold text-sm text-primary">
                Kategori, Topik, Tag & Dll
              </div>
              <div className="w-full flex flex-wrap gap-1 items-center justify-around">
                <Button size="sm">Kategori: Kategori</Button>
                <Button size="sm">Topic: Topic</Button>
                <Button size="sm">Biaya: Biaya</Button>
                <Button size="sm">Kalalangan: Kalangan</Button>
                <Button size="sm">Kota: Kota</Button>
                <Button size="sm">Pelaksanaan: Pelaksanaan</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Footer />
    </div>
  );
};

const DetailAgenda = ({ params }) => {
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
    <DetailFeedLayout>
      {agendaHariIni.isPending ||
      agendaHariIni.isFetching ||
      agendaHariIni.isRefetching ||
      optionState ? (
        <span>Loading uey</span>
      ) : agendaHariIni.isError ? (
        <span>Error euys</span>
      ) : (
        agendaHariIni.isSuccess && (
          <Detail
            data={agendaHariIni.data.find(
              (agenda) => agenda.id === params.agenda_id
            )}
            optionData={optionData}
          />
        )
      )}
    </DetailFeedLayout>
  );
};
export default DetailAgenda;
