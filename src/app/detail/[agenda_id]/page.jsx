import DetailFeedLayout from "@/_components/detail.feed.layout";
import Footer from "@/_components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";

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

const DetailAgenda = ({ params }) => {
  return (
    <DetailFeedLayout>
      <div className="flex flex-col">
        <Card className={`w-full h-full gap-0 px-3 py-3`}>
          <div className="w-full font-bold text-md justify-center items-center text-center text-primary mt-2 mb-3">
            Judul Event
          </div>
          <div className="mb-6 flex flex-col gap-y-1">
            <span className="font-bold text-sm text-primary">Deskripsi</span>
            <p className="whitespace-pre-line text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              id eum, amet unde pariatur veniam excepturi quis odio dicta ad
              magni repudiandae ut, ex eos nulla deserunt at est nihil. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quis fuga, vero
              exercitationem culpa, minus ab neque sapiente maiores, assumenda
              in corrupti sit? Eius, repellendus totam! Eius omnis tempore illum
              architecto! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Fugit alias ipsam ea! Necessitatibus facere quo aut vitae
              deleniti, maiores obcaecati quae provident voluptatum, reiciendis
              ea quisquam porro at minima. Odit!
            </p>
          </div>
          <div className=" flex flex-col gap-y-1">
            <span className="font-bold text-sm text-primary">
              Agenda Detail
            </span>
            <div className="flex flex-col text-sm gap-y-0.5">
              <div className="flex items-start gap-x-1">
                <span className="font-bold text-primary">Tanggal:</span>
                <p>Selasa, 20 September 2025</p>
              </div>
              <div className="flex items-start gap-x-1">
                <span className="font-bold text-primary">Waktu:</span>
                <p>10:10 - 12:23 WIB</p>
              </div>
              <div className="flex items-start gap-x-1">
                <span className="font-bold text-primary">Biaya:</span>
                <p>Gratis</p>
              </div>
              <div className="flex items-start gap-x-1">
                <span className="font-bold text-primary">Kalangan:</span>
                <p>Muslimah</p>
              </div>
              <div className="flex items-start gap-x-1">
                <span className="font-bold text-primary">Pembicara:</span>
                <p>Pembicara 1, Pembicara 1, Pembicara 1</p>
              </div>
              <div className="flex items-start gap-x-1">
                <span className="font-bold text-primary">Penyelenggara:</span>
                <p>Penyelenggara 1, Penyelenggara 1, Penyelenggara 1</p>
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
    </DetailFeedLayout>
  );
};
export default DetailAgenda;
