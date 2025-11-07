import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryBiaya } from "@/lib/api/biaya/useBiaya";
import { useQueryKota } from "@/lib/api/kota/useKota";
import { useQueryTopik } from "@/lib/api/topik/useTopik";
import { X } from "lucide-react";
import { useEffect } from "react";

const FIlterTab = ({ optionData, isFilter, onClick }) => {

  useEffect(() => {
    const handleClick = (e)=> {
      if (e.target.id === 'close'){
        onClick()
      }
    }
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener("click", handleClick);
    };

  }, [onClick])

  return (
    <div
      id="close"
      className={`${
        isFilter ? "" : "translate-y-full"
      } translate-y-0 w-full h-dvh fixed z-50 inset-0 flex items-end justify-center transition-all ease-in-out duration-500`}
    >
      <div className="w-full bg-background md:max-w-md mb-5">
        <div className="flex justify-between items-center w-full px-5 my-4">
          <div className="text-sm font-bold">Filter tab</div>
          <Button size="icon" id="close">
            <X />
          </Button>
        </div>
        <div className="w-full grid grid-cols-2 p-2 gap-2">
          <div className="w-full flex flex-col">
            <div>Tanggal</div>
            <Input type={"date"} className={"ring"} />
          </div>
          <div className="w-full flex flex-col">
            <div>Biaya</div>
            <Select>
              <SelectTrigger className={`w-full ring`}>
                <SelectValue placeholder="Pilih biaya tersedia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="value1">Biaay 1</SelectItem>
                <SelectItem value="value2">Biaay 1</SelectItem>
                <SelectItem value="value3">Biaay 1</SelectItem>
                <SelectItem value="value4">Biaay 1</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <div>Kalangan</div>
            <Select>
              <SelectTrigger className={`w-full ring`}>
                <SelectValue placeholder="Pilih biaya tersedia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="value1">Biaay 1</SelectItem>
                <SelectItem value="value2">Biaay 1</SelectItem>
                <SelectItem value="value3">Biaay 1</SelectItem>
                <SelectItem value="value4">Biaay 1</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <div>Kota</div>
            <Select>
              <SelectTrigger className={`w-full ring`}>
                <SelectValue placeholder="Pilih biaya tersedia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="value1">Biaay 1</SelectItem>
                <SelectItem value="value2">Biaay 1</SelectItem>
                <SelectItem value="value3">Biaay 1</SelectItem>
                <SelectItem value="value4">Biaay 1</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <div>Kategori</div>
            <Select>
              <SelectTrigger className={`w-full ring`}>
                <SelectValue placeholder="Pilih biaya tersedia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="value1">Biaay 1</SelectItem>
                <SelectItem value="value2">Biaay 1</SelectItem>
                <SelectItem value="value3">Biaay 1</SelectItem>
                <SelectItem value="value4">Biaay 1</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col">
            <div>Topik</div>
            <Select>
              <SelectTrigger className={`w-full ring`}>
                <SelectValue placeholder="Pilih biaya tersedia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="value1">Biaay 1</SelectItem>
                <SelectItem value="value2">Biaay 1</SelectItem>
                <SelectItem value="value3">Biaay 1</SelectItem>
                <SelectItem value="value4">Biaay 1</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FIlterTab;
