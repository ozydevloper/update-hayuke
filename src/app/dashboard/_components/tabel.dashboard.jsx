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
import {
  CalendarDays,
  Ellipsis,
  Minus,
  Plus,
  RefreshCcw,
  X,
} from "lucide-react";
import { refetchingData } from "./logic/refetchData";
import { useEffect, useRef, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { AgendaZodSchema } from "../_lib/schemaAgenda";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchAllKategori } from "@/lib/api/kategori/api";
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

const FormAgenda = ({ allKategori, isForm, setIsForm }) => {
  const form = useForm({
    defaultValues: {
      judul: "judu",
      deskripsi: "des",
      tanggal: "tangga",
      waktu: "waktu",
      pembicara: ["pem1", "pem1"],
      penyelenggara: ["penyeng2", "penyeng2"],
      kategori: "",
      topik: "",
      kota: "",
      kalangan: "",
      biaya: "",
      pelaksanaan: ["offline", "-", "-", "-"],
    },
    validators: AgendaZodSchema,

    onSubmit: async ({ value }) => {
      console.log("Value form", value);
    },
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "close") {
      setIsForm(false);
    }
  });

  return (
    <div
      id="close"
      className={`${
        isForm ? "translate-y-0" : "-translate-y-full"
      } transition-all ease-in-out duration-300 inset-0 absolute h-dvh z-50 flex justify-center overflow-y-scroll`}
    >
      <div className="mt-10 max-h-max">
        <Card className={`gap-0 px-2 py-0 max-w-80 w-80 md:max-w-96 md:w-96`}>
          <div className="text-sm font-bold flex items-center justify-between ml-4 my-5">
            Form New Agenda{" "}
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={() => setIsForm(false)}
            >
              <X />
            </Button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 w-f">
              <form.Field name="judul">
                {(field) => {
                  return (
                    <div className="w-full h-full col-span-2 ">
                      <Label htmlFor="judul" className={`text-sm`}>
                        Judul
                      </Label>
                      <Input
                        className={"ring"}
                        id="judul"
                        defaultValue={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder={"Masukkan judul.."}
                      />
                    </div>
                  );
                }}
              </form.Field>
              <form.Field name="deskripsi">
                {(field) => {
                  return (
                    <div className="w-full h-full col-span-2 ">
                      <Label htmlFor="deskripsi" className={`text-sm`}>
                        Deskripsi
                      </Label>
                      <Textarea
                        id="deskripsi"
                        defaultValue={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder={"Masukkan deskripsi.."}
                        className={"h-32 ring"}
                      />
                    </div>
                  );
                }}
              </form.Field>

              <div className="flex flex-col gap-y-1">
                <Label className={`text-sm`}>Pembicara</Label>
                <form.Field name="pembicara">
                  {(field) => (
                    <>
                      {field.state.value.map((e, i) => (
                        <form.Field key={i} name={`pembicara[${i}]`}>
                          {(subField) => (
                            <Input
                              className={"ring"}
                              defaultValue={subField.state.value}
                              onBlur={subField.handleBlur}
                              onChange={(e) =>
                                subField.handleChange(e.target.value)
                              }
                              placeholder={`Masukkan pembicara ${i + 1}..`}
                            />
                          )}
                        </form.Field>
                      ))}
                      <div className="w-full flex items-center justify-start gap-x-1">
                        <Button
                          className={"ring"}
                          variant={"outline"}
                          size={"icon-sm"}
                          onClick={() => field.pushValue("-")}
                        >
                          <Plus />
                        </Button>
                        <Button
                          className={"ring"}
                          variant={"outline"}
                          size={"icon-sm"}
                          onClick={() => {
                            const index = field.state.value.length - 1;
                            if (index == 0) return;
                            field.removeValue(field.state.value.length - 1);
                          }}
                        >
                          <Minus />
                        </Button>
                      </div>
                    </>
                  )}
                </form.Field>
              </div>

              <div className="flex flex-col gap-y-1">
                <Label className={`text-sm`}>Penyelenggara</Label>
                <form.Field name="penyelenggara">
                  {(field) => (
                    <>
                      {field.state.value.map((_, i) => (
                        <form.Field key={i} name={`penyelenggara[${i}]`}>
                          {(subField) => (
                            <Input
                              className={"ring"}
                              defaultValue={subField.state.value}
                              onBlur={subField.handleBlur}
                              onChange={(e) =>
                                subField.handleChange(e.target.value)
                              }
                              placeholder={`Masukkan penyelenggara ${i + 1}..`}
                            />
                          )}
                        </form.Field>
                      ))}
                      <div className="w-full flex items-center justify-start gap-x-1">
                        <Button
                          className={"ring"}
                          variant={"outline"}
                          size={"icon-sm"}
                          onClick={() => {
                            field.pushValue("-");
                          }}
                        >
                          <Plus />
                        </Button>
                        <Button
                          className={"ring"}
                          variant={"outline"}
                          size={"icon-sm"}
                          onClick={() => {
                            const index = field.state.value.length - 1;
                            if (index == 0) return;
                            field.removeValue(field.state.value.length - 1);
                          }}
                        >
                          <Minus />
                        </Button>
                      </div>
                    </>
                  )}
                </form.Field>
              </div>

              <form.Field name="kategori">
                {(field) => (
                  <div className="flex flex-col gap-y-1">
                    <Label>Kategori</Label>
                    <Select
                      onValueChange={field.handleChange}
                      defaultValue={field.state.value}
                    >
                      <SelectTrigger className={"ring"}>
                        <SelectValue placeholder={"Pilih kategori"} />
                      </SelectTrigger>
                      <SelectContent>
                        {allKategori.map((kat, i) => {
                          return (
                            <SelectItem key={i} value={kat.name}>
                              {kat.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </form.Field>
            </div>
          </form>
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
  const [isForm, setIsForm] = useState(false);
  const allKategori = useQuery({
    queryKey: ["kategori"],
    queryFn: fetchAllKategori,
  });

  return (
    <div className="flex flex-col">
      {allKategori.isSuccess && (
        <FormAgenda
          allKategori={allKategori.data}
          setIsForm={setIsForm}
          isForm={isForm}
        />
      )}
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
          <Button
            variant={"outline"}
            className={"w-full"}
            onClick={() => setIsForm(true)}
          >
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
