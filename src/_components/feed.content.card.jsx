"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BadgeInfo, CalendarDays, Clock4, List, Tag } from "lucide-react";
import { useState } from "react";

const Description = ({ description }) => {
  const [isReadMore, setReadMore] = useState(false);
  const max_length = 190;
  const sorted = description.slice(0, max_length);
  return (
    <p>
      {(description.length >= max_length) & !isReadMore ? sorted : description}
      {!isReadMore ? (
        <span
          className="underline text-primary cursor-pointer"
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

const FeedContentCard = () => {
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            cum dolorem repellat qui commodi! Minima harum tenetur odit incidunt
            assumenda sunt rem ipsum nemo quas saepe eligendi atque, ipsa
            inventore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque possimus alias inventore incidunt sequi, eius, ex veritatis repudiandae provident nisi ut iure qui cum ad dolor reprehenderit tenetur saepe soluta.`;

  return (
    <Card className={"py-0 px-0 gap-y-0 my-5"}>
      <div className="flex items-center justify-between px-3 mt-2 mb-1">
        <div className="text-primary text-[0.600rem] sm:text-[0.670rem] font-bold flex items-center justify-center text-center gap-x-1">
          <CalendarDays className="size-3" />
          <p>Selasa, 8 September 2025</p>
        </div>
        <div className="text-primary text-[0.600rem] sm:text-[0.670rem] font-bold flex items-center justify-center text-center gap-x-1">
          <Clock4 className="size-3 " />
          <p>10:00 - 10:12 WIB</p>
        </div>
      </div>
      <div className="aspect-square sm:w-full sm:h-64">
        <Skeleton className={"w-full h-full"} />
      </div>
      <div>
        <div className="flex items-center justify-between my-2 text-primary px-2">
          <p className="text-sm font-bold">Judul Agenda</p>
          <div className="flex">
            <Badge variant={"primary"}>Gratis</Badge>
            <Badge variant={"secondary"}>Umum</Badge>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3 text-muted-foreground px-2 flex-col">
          {<Description description={description} />}
          <div className="flex text-sm items-center justify-evenly w-full my-1">
            <div className="flex text-primary text-center justify-center items-center font-bold gap-x-1">
              <BadgeInfo className="size-4" /> Offline
            </div>
            <div className="flex text-primary text-center justify-center items-center font-bold gap-x-1">
              <List className="size-4" /> Kategori
            </div>
            <div className="flex text-primary text-center justify-center items-center font-bold gap-x-1">
              <Tag className="size-4" /> Topik
            </div>
          </div>
          <Button className={"w-full"}>Lihat detail</Button>
        </div>
      </div>
    </Card>
  );
};
export default FeedContentCard;
