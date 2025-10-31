"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { toast } from "sonner";

const { SendHorizonal, Ellipsis, RefreshCw } = require("lucide-react");

const ItemLoading = () => {
  return (
    <div className="w-full h-7">
      <Skeleton className={`w-full h-full`} />
    </div>
  );
};

const ItemError = ({ refetch }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-sm ">Terjadi Error</p>
      <Button
        size={"sm"}
        onClick={(e) => {
          e.preventDefault();
          refetch();
        }}
      >
        <RefreshCw /> Refetch
      </Button>
    </div>
  );
};

const Item = ({ name, idItem, actionDelete, actionEdit }) => {
  return (
    <div className="w-full border hover:bg-muted p-1 rounded-lg transition-all ease-in-out duration-300 flex items-center justify-between">
      <p className="truncate">{name}</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={"icon-sm"} variant="outline">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => alert(`Mengedit Id: ${idItem}`)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert(`Mengapus Id: ${idItem}`)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const ItemDashboard = ({
  nameTab,
  isLoading,
  isError,
  isSuccess,
  data = [],
  refetch,
  mutateAsync,
}) => {
  const [value, setValue] = useState("");
  const handleAdd = async () => {
    toast.promise(
      async () => {
        await mutateAsync({ name: value });
        refetch();
      },
      {
        loading: "Sedang menambahkan...",
        error: "Terjadi error!",
        success: "Berhasil menambahkan!",
      }
    );
  };
  return (
    <Card className={"p-2 gap-0 w-full flex flex-col justify-center gap-y-2"}>
      <div className="flex flex-col items-center gap-x-1">
        <div className="flex w-full items-center justify-start font-bold text-sm my-1 ml-3">
          {nameTab}
        </div>
        <div className="w-full flex gap-x-1">
          <Input
            placeholder={`New ${nameTab}`}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button size={"icon-sm"} variant={"outline"} onClick={handleAdd}>
            <SendHorizonal size={"icon"} />
          </Button>
        </div>
      </div>
      <Card className={`p-2 gap-0 h-32 max-h-32 overflow-y-scroll`}>
        <div className="flex flex-col gap-y-1">
          {isLoading ? (
            <ItemLoading />
          ) : isError ? (
            <ItemError refetch={refetch} />
          ) : (
            isSuccess &&
            data.map((e, i) => {
              return <Item key={i} name={e.name} idItem={e.id} />;
            })
          )}
        </div>
      </Card>
      <div className="w-full text-[0.625rem] flex flex-col">
        <div className="flex">
          Total {nameTab}: {isSuccess && data.length}
        </div>
      </div>
    </Card>
  );
};
export default ItemDashboard;
