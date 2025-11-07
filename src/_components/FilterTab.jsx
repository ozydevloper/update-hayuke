import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { useEffect } from "react";

const FIlterTab = ({ optionData, isFilter, onClick, setSearchValue }) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.id === "close") {
        onClick();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClick]);

  const handleReset = (e) => {
    e.preventDefault();
    setSearchValue.tanggal.fn("");
    setSearchValue.biaya.fn("");
    setSearchValue.kalangan.fn("");
    setSearchValue.kota.fn("");
    setSearchValue.kategori.fn("");
    setSearchValue.topik.fn("");
  };

  return (
    <div
      id="close"
      className={`${
        isFilter ? "" : "translate-y-full"
      } translate-y-0 w-full h-dvh fixed z-50 inset-0 flex items-end justify-center transition-all ease-in-out duration-500`}
    >
      <Card className="w-full bg-background md:max-w-md mb-5 ring p-3 gap-0">
        <div className="flex justify-between items-center w-full px-5 my-4">
          <div className="text-sm font-bold">Filter tab</div>
          <Button size="icon" id="close">
            <X />
          </Button>
        </div>
        <div className="w-full grid grid-cols-2 p-2 gap-2">
          <div className="w-full flex flex-col">
            <div>Tanggal</div>
            <Input
              type={"date"}
              className={"ring"}
              onChange={(e) => setSearchValue.tanggal.fn(e.target.value)}
              value={setSearchValue.tanggal.tg}
            />
          </div>
          <div className="w-full flex flex-col">
            <div>Biaya</div>
            <Select
              onValueChange={setSearchValue.biaya.fn}
              value={setSearchValue.biaya.by}
            >
              <SelectTrigger className={`w-full ring`}>
                <SelectValue placeholder="Pilih biaya tersedia" />
              </SelectTrigger>
              <SelectContent>
                {optionData.biaya.map((e, i) => {
                  return (
                    <SelectItem value={e.id} key={i} name={e.name}>
                      {e.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <div>Kalangan</div>
            <Select
              onValueChange={setSearchValue.kalangan.fn}
              value={setSearchValue.kalangan.kl}
            >
              <SelectTrigger className={`w-full ring`}>
                <SelectValue placeholder="Pilih biaya tersedia" />
              </SelectTrigger>
              <SelectContent>
                {optionData.kalangan.map((e, i) => {
                  return (
                    <SelectItem value={e.id} key={i}>
                      {e.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <div>Kota</div>
            <Select
              onValueChange={setSearchValue.kota.fn}
              value={setSearchValue.kota.kt}
            >
              <SelectTrigger className={`w-full ring`}>
                <SelectValue placeholder="Pilih biaya tersedia" />
              </SelectTrigger>
              <SelectContent>
                {optionData.kota.map((e, i) => {
                  return (
                    <SelectItem value={e.id} key={i}>
                      {e.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <div>Kategori</div>
            <Select
              onValueChange={setSearchValue.kategori.fn}
              value={setSearchValue.kategori.kat}
            >
              <SelectTrigger className={`w-full ring`}>
                <SelectValue placeholder="Pilih biaya tersedia" />
              </SelectTrigger>
              <SelectContent>
                {optionData.kategori.map((e, i) => {
                  return (
                    <SelectItem value={e.id} key={i}>
                      {e.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <div>Topik</div>
            <Select
              onValueChange={setSearchValue.topik.fn}
              value={setSearchValue.topik.tp}
            >
              <SelectTrigger className={`w-full ring`}>
                <SelectValue placeholder="Pilih biaya tersedia" />
              </SelectTrigger>
              <SelectContent>
                {optionData.topik.map((e, i) => {
                  return (
                    <SelectItem value={e.id} key={i}>
                      {e.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col col-span-2">
            <Button className={"w-full"} onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default FIlterTab;
