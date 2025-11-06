import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

const FIlterTab = () => {
  return (
    <div className="w-full h-dvh fixed z-50 bg-black/25 inset-0 flex items-end justify-center">
      <div className="w-full bg-background md:max-w-md">
        <div className="flex justify-between items-center w-full px-5 my-4">
          <div className="text-sm font-bold">Filter tab</div>
          <Button size="icon">
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
