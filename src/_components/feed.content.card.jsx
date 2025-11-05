"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useModeFeed } from "@/lib/globalVariabelZustand";
import { tanggalParse } from "@/lib/tanggalParse";
import { BadgeInfo, CalendarDays, Clock4, List, Tag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Description = ({ description }) => {
  const [isReadMore, setReadMore] = useState(false);
  const max_length = 190;
  const sorted = description.slice(0, max_length);
  return (
    <p className="text-sm">
      {(description.length >= max_length) & !isReadMore ? sorted : description}
      {!isReadMore ? (
        <span
          className="underline text-primary cursor-pointer mx-1"
          onClick={() => setReadMore(true)}
        >
          Baca lebih..
        </span>
      ) : (
        <span
          className="underline text-primary cursor-pointer"
          onClick={() => setReadMore(false)}
        >
          Baca kurang..
        </span>
      )}
    </p>
  );
};

const FeedContentCard = ({ data, optionData, router }) => {
  const { stateMode } = useModeFeed();
  const id = data.id;
  const judul = data.judul;
  const tanggal = tanggalParse(data.tanggal);
  const poster = data.poster[0];
  const waktu = data.waktu;
  const description = data.deskripsi;
  const kota = optionData.kota.find((kota) => kota.id === data.kotaId);
  const kategori = optionData.kategori.find(
    (kategori) => kategori.id === data.kategoriId
  );
  const biaya = optionData.biaya.find((biaya) => biaya.id === data.biayaId);
  const kalangan = optionData.kalangan.find(
    (kalangan) => kalangan.id === data.kalanganId
  );
  const pelaksanaan = data.pelaksanaan[0];
  const topik = optionData.topik.find((topik) => topik.id === data.topikId);

  return (
    <Card className={"py-0 px-0 gap-y-0 my-5"}>
      <div className="flex items-center justify-between px-3 mt-2 mb-1">
        <div className="text-primary text-[0.600rem] sm:text-[0.670rem] font-bold flex items-center justify-center text-center gap-x-1">
          <CalendarDays className="size-3" />
          <p>{tanggal}</p>
        </div>
        <div className="text-primary text-[0.600rem] sm:text-[0.670rem] font-bold flex items-center justify-center text-center gap-x-1">
          <Clock4 className="size-3 " />
          <p>{waktu}</p>
        </div>
      </div>
      <div className="h-72 sm:w-full max-h-72 relative overflow-hidden">
        <Image
          src={poster ?? ""}
          alt={poster ?? "event_poster"}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <div className="flex items-center justify-between my-2 text-primary px-2">
          <p className="text-sm font-bold">{judul}</p>
          <div className="flex gap-x-1">
            <Badge
              variant={"primary"}
              className={"bg-green-200 text-green-600"}
            >
              {biaya.name}
            </Badge>
            <Badge variant={"secondary"}>{kalangan.name}</Badge>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3 text-muted-foreground px-2 flex-col">
          {<Description description={description} />}
          <div className="flex text-sm items-center justify-evenly w-full my-1">
            <div className="flex text-primary text-center justify-center items-center font-bold gap-x-1">
              <BadgeInfo className="size-4" />{" "}
              {pelaksanaan === "offline" ? `${kota.name}` : "Online"}
            </div>
            <div className="flex text-primary text-center justify-center items-center font-bold gap-x-1">
              <List className="size-4" /> {kategori.name}
            </div>
            <div className="flex text-primary text-center justify-center items-center font-bold gap-x-1">
              <Tag className="size-4" /> {topik.name}
            </div>
          </div>
          <Button
            className={"w-full"}
            onClick={() => router.push(`/detail/${stateMode}/${id}`)}
          >
            Lihat detail
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default FeedContentCard;
