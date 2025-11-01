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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarDays, Ellipsis, Plus, RefreshCcw, X } from "lucide-react";
import { toast } from "sonner";
import { refetchingData } from "./logic/refetchData";
import { useRef } from "react";

const TabelError = ({ refetch }) => {
  return (
    <div className="w-full h-64 max-h-64 flex flex-col items-center justify-center text-center gap-y-1">
      <p className="font-bold">Terjadi Error di tabel</p>
      <Button onClick={refetch}>Refetch</Button>
    </div>
  );
};

const TabelLoading = () => {
  return (
    <div className="w-full h-44 max-h-44 flex flex-col gap-y-2">
      <div className="w-full h-16">
        <Skeleton className={`w-full h-full`} />
      </div>
      <div className="w-full h-full">
        <Skeleton className={`w-full h-full`} />
      </div>
    </div>
  );
};

const FormAgenda = () => {
  return (
    <div className="inset-0 fixed h-dvh bg-black/25 z-50 flex justify-center">
      <div className="mt-10">
        <Card className={`gap-0 p-2 max-w-72 w-72`}>
          <div className="text-sm font-bold flex items-center justify-between ml-4">
            Form Agenda{" "}
            <Button size={"icon"} variant={"outline"}>
              <X />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

const TabelDashboard = ({
  isPending,
  isError,
  isSuccess,
  data = [],
  refetch,
  isRefetching,
}) => {
  const inputDateRef = useRef(null);
  return (
    <div className="flex flex-col">
      <FormAgenda />
      <div className="font-bold text-sm my-5">Tabel Agenda</div>
      <p className="text-[0.680rem]">Filter dengan Tanggal</p>
      <div className="flex gap-x-1 items-center justify-center">
        <Button variant={"outline"} size={"icon-sm"}>
          <CalendarDays />
        </Button>
        <Input placeholder="filter" type={"date"} ref={inputDateRef} />
        <Button>Apply</Button>
      </div>
      <div className="flex my-2 justify-center gap-x-1">
        <div className="w-full">
          <Button variant={"outline"} className={"w-full"}>
            New Agenda <Plus />
          </Button>
        </div>
        <Button
          onClick={() => {
            refetchingData("Tabel", refetch);
          }}
        >
          <RefreshCcw />
        </Button>
      </div>
      {isPending ? (
        <TabelLoading />
      ) : isError ? (
        <TabelError refetch={refetch} />
      ) : (
        isSuccess && (
          <Card className={`p-0 gap-0 w-full max-h-64`}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  {Object.keys(data[0]).map((e, i) => {
                    return <TableHead key={i}>{e}</TableHead>;
                  })}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size={"icon-sm"} variant={"ghost"}>
                              <Ellipsis />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>{row.judul}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => {
                                alert(JSON.stringify(row));
                              }}
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                      {Object.entries(row).map(([key, value], i) => {
                        return (
                          <TableCell key={i} className={"max-w-32 truncate"}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Card>
        )
      )}
    </div>
  );
};
export default TabelDashboard;
