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
import { useRef } from "react";
import { toast } from "sonner";
import { refetchingData } from "./logic/refetchData";

const { SendHorizonal, Ellipsis, RefreshCw } = require("lucide-react");

const ItemLoading = () => {
  return (
    <div className="w-full h-7">
      <Skeleton className={`w-full h-full`} />
    </div>
  );
};

const ItemError = ({ name, refetch }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-sm ">Terjadi Error</p>
      <Button
        size={"sm"}
        onClick={(e) => {
          e.preventDefault();
          refetchingData(name, refetch);
        }}
      >
        <RefreshCw /> Refetch
      </Button>
    </div>
  );
};

const Item = ({ name, idItem, actionDelete, actionUpdate }) => {
  const inputRef = useRef(null);
  return (
    <div className="w-full border hover:bg-muted p-1 rounded-lg transition-all ease-in-out duration-300 flex items-center justify-between gap-x-1">
      <Input defaultValue={name} ref={inputRef} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={"icon-sm"} variant="outline">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              actionUpdate({ id: idItem, newName: inputRef.current.value })
            }
          >
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => actionDelete(idItem)}>
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
  createMutate,
  deleteMutate,
  updateMutate,
}) => {
  const inputRef = useRef(null);
  const handleAdd = async () => {
    toast.promise(
      async () => {
        await createMutate({ name: inputRef.current.value });
        refetch();
      },
      {
        loading: "Sedang menambahkan...",
        error: "Terjadi error!",
        success: "Berhasil menambahkan!",
      }
    );
  };

  const handleRemove = async (id) => {
    toast.promise(
      async () => {
        await deleteMutate({ id: id });
        refetch();
      },
      {
        loading: "Sedang menghapus...",
        error: "Terjadi error!",
        success: "Berhasil menghapus!",
      }
    );
  };

  const handleUpdate = async ({ id, newName }) => {
    toast.promise(
      async () => {
        await updateMutate({ id: id, name: newName });
        refetch();
      },
      {
        loading: "Sedang memperbarui...",
        error: "Terjadi error!",
        success: "Berhasil memperbarui!",
      }
    );
  };
  return (
    <Card className={"p-2 gap-0 w-full flex flex-col justify-center gap-y-2"}>
      <div className="flex flex-col items-center gap-x-1">
        <div className="flex w-full items-center justify-between font-bold text-sm my-1 mx-3">
          {nameTab}
          <Button
            size={"icon-sm"}
            variant={"outline"}
            onClick={() => refetchingData(nameTab, refetch)}
          >
            <RefreshCw />
          </Button>
        </div>
        <div className="w-full flex gap-x-1">
          <Input placeholder={`New ${nameTab}`} ref={inputRef} />
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
            <ItemError name={nameTab} refetch={refetch} />
          ) : (
            isSuccess &&
            data?.map((e, i) => {
              return (
                <Item
                  key={i}
                  name={e.name}
                  idItem={e.id}
                  actionDelete={handleRemove}
                  actionUpdate={handleUpdate}
                />
              );
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
