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
import { toast } from "sonner";

// const Description = ({ description }) => {
//   const [isReadMore, setReadMore] = useState(false);
//   const max_length = 540;
//   const sorted = description.slice(0, max_length);
//   return (
//     <p className="text-xs w-full h-full mt-3">
//       {(description.length >= max_length) & !isReadMore ? sorted : description}
//       {!isReadMore ? (
//         <span
//           className="underline text-primary cursor-pointer mx-1"
//           onClick={() => setReadMore(true)}
//         >
//           Baca lebih..
//         </span>
//       ) : (
//         <span
//           className="underline text-primary cursor-pointer"
//           onClick={() => setReadMore(false)}
//         >
//           Baca kurang..
//         </span>
//       )}
//     </p>
//   );
// };

const Description = ({ description }) => {
  const [isReadMore, setReadMore] = useState(false);
  const max_length = 250;
  const sorted = description.slice(0, max_length);
  return (
    <p className="text-xs w-full h-full mt-2 md:mb-0 mb-2">
      {sorted}{" "}
      <span className="font-bold text-primary cursor-pointer">
        Lihat detail...
      </span>
    </p>
  );
};
8;
const FeedContentCard = ({ data, optionData, router }) => {
  const [preview, setPreview] = useState(false);
  const { stateMode } = useModeFeed();
  const id = data.id;
  const judul = data.judul;
  const tanggal = tanggalParse(data.tanggal);
  const poster = data.poster[0];
  const waktu = data.waktu;
  const description = data.deskripsi;
  const kota = optionData.kota.find((kota) => kota.id === data.kotaId);
  const kategori = optionData.kategori.find(
    (kategori) => kategori.id === data.kategoriId,
  );
  const biaya = optionData.biaya.find((biaya) => biaya.id === data.biayaId);
  const kalangan = optionData.kalangan.find(
    (kalangan) => kalangan.id === data.kalanganId,
  );
  const pelaksanaan = data.pelaksanaan[0];
  const topik = optionData.topik.find((topik) => topik.id === data.topikId);

  return (
    <div className="w-full cursor-pointer  flex flex-col rounded-xl h-full border shadow-xl hover:bg-foreground/5 transition-all ease-in-out drop-shadow-blue-200 my-5">
      <div className="w-full flex items-center justify-between bg-primary/5 text-primary text-xs fonct-bold px-3 py-2">
        <span>{tanggal}</span>
        <span>{waktu}</span>
      </div>
      <div className="w-full md:h-48 h-full p-3 flex flex-col md:flex-row md:gap-x-3">
        <div
          className={`mb-2 md:mb-0 w-full md:w-[40%] md:max-w-[40%] min-h-40 h-full ${preview ? "" : "relative"} bg-primary/5 rounded-md overflow-hidden`}
        >
          <div
            className={`${preview && "bg-black/50 fixed inset-0 h-dvh z-50"}`}
          >
            <Image
              onClick={() => setPreview(!preview)}
              src={poster}
              alt={judul}
              fill
              className={`object-contain`}
            />
          </div>
        </div>
        <div
          className="w-full h-full flex flex-col justify-between active:bg-foreground/10 rounded-sm p-1"
          onClick={() => router.push(`/detail/${stateMode}/${id}`)}
        >
          <div className="w-full flex flex-row md:flex-col justify-between items-start md:gap-y-1">
            <span className="font-extrabold md:text-lg text-sm">{judul}</span>
            <div className="flex items-center justify-start gap-x-2">
              <Badge
                className={
                  "bg-green-200 text-green-800 font-bold border border-green-100"
                }
              >
                {biaya.name}
              </Badge>
              <Badge
                className={
                  "bg-foreground text-background font-bold border border-foreground"
                }
              >
                {kalangan.name}
              </Badge>
            </div>
          </div>
          <Description description={description} />
          <div className="w-full flex items-center justify-start gap-x-2">
            <Badge
              className={
                "font-bold text-xs bg-primary/20 text-primary border border-primary rounded-md"
              }
            >
              {pelaksanaan === "online" ? "online" : kota.name}
            </Badge>
            <Badge
              className={
                "font-bold text-xs bg-primary/20 text-primary border border-primary rounded-md"
              }
            >
              {kategori.name}
            </Badge>
            <Badge
              className={
                "font-bold text-xs bg-primary/20 text-primary border border-primary rounded-md"
              }
            >
              {topik.name}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedContentCard;
