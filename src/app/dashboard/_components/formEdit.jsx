import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useForm } from "@tanstack/react-form";
import { Minus, Plus, X } from "lucide-react";
import { AgendaZodSchema } from "../_lib/schemaAgenda";
import { useEditAgenda } from "@/lib/api/agenda/useAgenda";
import { toast } from "sonner";

const { Card } = require("@/components/ui/card");

const FormEdit = ({
  allKategori,
  allTopik,
  allKota,
  allKalangan,
  allBiaya,
  setIsForm,
  isForm,
  data,
  setData,
}) => {
  const id = data.id;
  const judul = data.judul;
  const deskripsi = data.deskripsi;
  const tanggal = new Date(data.tanggal).toISOString().split("T")[0];
  const waktu = data.waktu;
  const pembicara = data.pembicara;
  const penyelenggara = data.penyelenggara;
  const pelaksanaan = data.pelaksanaan;
  const kategori = allKategori.find((e) => e.id === data.kategoriId).id;
  const topik = allTopik.find((e) => e.id === data.topikId).id;
  const kota = allKota.find((e) => e.id === data.kotaId)?.id;
  const kalangan = allKalangan.find((e) => e.id === data.kalanganId).id;
  const biaya = allBiaya.find((e) => e.id === data.biayaId).id;

  const useMutationEditAgenda = useEditAgenda();

  const form = useForm({
    defaultValues: {
      judul: judul,
      deskripsi: deskripsi,
      tanggal: tanggal,
      waktu,
      waktu,
      pembicara: pembicara,
      penyelenggara: penyelenggara,
      pelaksanaan: pelaksanaan,
      kategori: kategori,
      topik: topik,
      kota: !!kota ? kota : "",
      kalangan: kalangan,
      biaya: biaya,
    },
    validators: {
      onSubmit: AgendaZodSchema,
    },

    onSubmit: async ({ value }) => {
      value.id = id;
      toast.promise(
        async () => await useMutationEditAgenda.mutateAsync(value),
        {
          error: "Gagal membuat agenda!",
          loading: "Sedang membuat agenda..",
          success: "Berhasil membuat agenda!",
        }
      );
    },
  });

  return (
    <div className="transition-all ease-in-out duration-300 top-0 right-0 left-0 bg-black/15 bottom-0  z-50 flex justify-center fixed overflow-y-scroll">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <Card className={"max-h-max p-3 gap-0 w-md "}>
          <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            <div className="w-full col-span-2 text-sm font-bold flex justify-between items-center">
              <div>Form Edit</div>
              <Button size={"icon"} onClick={() => setIsForm(false)}>
                <X />
              </Button>
            </div>
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
                      value={field.state.value ?? ""}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder={"Masukkan judul.."}
                      aria-invalid={!field.state.meta.isValid}
                    />
                    {!field.state.meta.isValid && (
                      <FieldError>
                        {field.state.meta.errors[0].message}
                      </FieldError>
                    )}
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
                      value={field.state.value ?? ""}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder={"Masukkan deskripsi.."}
                      className={"h-32 ring"}
                      aria-invalid={!field.state.meta.isValid}
                    />
                    {!field.state.meta.isValid && (
                      <FieldError>
                        {field.state.meta.errors[0].message}
                      </FieldError>
                    )}
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
                          <div>
                            <Input
                              className={"ring"}
                              value={subField.state.value ?? ""}
                              onBlur={subField.handleBlur}
                              onChange={(e) =>
                                subField.handleChange(e.target.value)
                              }
                              placeholder={`Masukkan pembicara ${i + 1}..`}
                              aria-invalid={!subField.state.meta.isValid}
                            />
                            {!subField.state.meta.isValid && (
                              <FieldError>
                                {subField.state.meta.errors[0].message}
                              </FieldError>
                            )}
                          </div>
                        )}
                      </form.Field>
                    ))}
                    <div className="w-full flex items-center justify-start gap-x-1">
                      <Button
                        className={"ring"}
                        variant={"outline"}
                        size={"icon-sm"}
                        onClick={(e) => {
                          e.preventDefault();
                          field.pushValue("");
                        }}
                      >
                        <Plus />
                      </Button>
                      <Button
                        className={"ring"}
                        variant={"outline"}
                        size={"icon-sm"}
                        onClick={(e) => {
                          e.preventDefault();

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
                          <div>
                            <Input
                              className={"ring"}
                              value={subField.state.value ?? ""}
                              onBlur={subField.handleBlur}
                              onChange={(e) =>
                                subField.handleChange(e.target.value)
                              }
                              placeholder={`Masukkan penyelenggara ${i + 1}..`}
                              aria-invalid={!subField.state.meta.isValid}
                            />
                            {!subField.state.meta.isValid && (
                              <FieldError>
                                {subField.state.meta.errors[0].message}
                              </FieldError>
                            )}
                          </div>
                        )}
                      </form.Field>
                    ))}
                    <div className="w-full flex items-center justify-start gap-x-1">
                      <Button
                        className={"ring"}
                        variant={"outline"}
                        size={"icon-sm"}
                        onClick={(e) => {
                          e.preventDefault();
                          field.pushValue("");
                        }}
                      >
                        <Plus />
                      </Button>
                      <Button
                        className={"ring"}
                        variant={"outline"}
                        size={"icon-sm"}
                        onClick={(e) => {
                          e.preventDefault();

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
                    value={field.state.value ?? ""}
                  >
                    <SelectTrigger className={"ring"}>
                      <SelectValue placeholder={"Pilih kategori"} />
                    </SelectTrigger>
                    <SelectContent>
                      {allKategori.map((kat, i) => {
                        return (
                          <SelectItem key={i} value={kat.id}>
                            {kat.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>

                  {!field.state.meta.isValid && (
                    <FieldError>
                      {field.state.meta.errors[0].message}
                    </FieldError>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field name="topik">
              {(field) => (
                <div className="flex flex-col gap-y-1">
                  <Label>Topik</Label>
                  <Select
                    onValueChange={field.handleChange}
                    value={field.state.value ?? ""}
                  >
                    <SelectTrigger className={"ring"}>
                      <SelectValue placeholder={"Pilih topik"} />
                    </SelectTrigger>
                    <SelectContent>
                      {allTopik.map((top, i) => {
                        return (
                          <SelectItem key={i} value={top.id}>
                            {top.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>

                  {!field.state.meta.isValid && (
                    <FieldError>
                      {field.state.meta.errors[0].message}
                    </FieldError>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field name="kalangan">
              {(field) => (
                <div className="flex flex-col gap-y-1">
                  <Label>Kalangan</Label>
                  <Select
                    onValueChange={field.handleChange}
                    value={field.state.value ?? ""}
                  >
                    <SelectTrigger className={"ring"}>
                      <SelectValue placeholder={"Pilih kalangan"} />
                    </SelectTrigger>
                    <SelectContent>
                      {allKalangan.map((kal, i) => {
                        return (
                          <SelectItem key={i} value={kal.id}>
                            {kal.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>

                  {!field.state.meta.isValid && (
                    <FieldError>
                      {field.state.meta.errors[0].message}
                    </FieldError>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field name="biaya">
              {(field) => (
                <div className="flex flex-col gap-y-1">
                  <Label>Biaya</Label>
                  <Select
                    onValueChange={field.handleChange}
                    value={field.state.value ?? ""}
                  >
                    <SelectTrigger className={"ring"}>
                      <SelectValue placeholder={"Pilih biaya"} />
                    </SelectTrigger>
                    <SelectContent>
                      {allBiaya.map((bia, i) => {
                        return (
                          <SelectItem key={i} value={bia.id}>
                            {bia.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>

                  {!field.state.meta.isValid && (
                    <FieldError>
                      {field.state.meta.errors[0].message}
                    </FieldError>
                  )}
                </div>
              )}
            </form.Field>
            <form.Field name="tanggal">
              {(field) => {
                return (
                  <div className="w-full h-full">
                    <Label htmlFor="tanggal" className={`text-sm`}>
                      Tanggal
                    </Label>
                    <Input
                      type={"date"}
                      className={"ring"}
                      id="tanggal"
                      value={field.state.value ?? ""}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder={"Masukkan tanggal.."}
                    />
                    {!field.state.meta.isValid && (
                      <FieldError>
                        {field.state.meta.errors[0].message}
                      </FieldError>
                    )}
                  </div>
                );
              }}
            </form.Field>
            <form.Field name="waktu">
              {(field) => {
                return (
                  <div className="w-full h-full">
                    <Label htmlFor="waktu" className={`text-sm`}>
                      Waktu
                    </Label>
                    <Input
                      className={"ring"}
                      id="waktu"
                      value={field.state.value ?? ""}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder={"Masukkan waktu.."}
                    />
                    {!field.state.meta.isValid && (
                      <FieldError>
                        {field.state.meta.errors[0].message}
                      </FieldError>
                    )}
                  </div>
                );
              }}
            </form.Field>
            <form.Field name="pelaksanaan">
              {(field) => (
                <div className="flex items-center flex-col justify-center w-full  col-span-2">
                  <Label>Pelaksanaan</Label>
                  <form.Field name="pelaksanaan[0]">
                    {(pelaksanaanType) => (
                      <div className="flex w-full items-center justify-center flex-col">
                        <div>
                          <RadioGroup
                            value={pelaksanaanType.state.value}
                            onValueChange={pelaksanaanType.handleChange}
                          >
                            <div className={"flex gap-x-5 my-2"}>
                              <div className="flex items-center gap-x-1">
                                <RadioGroupItem
                                  id="offline"
                                  value="offline"
                                  className={"ring"}
                                />
                                <Label htmlFor="offline">Offline</Label>
                              </div>
                              <div className="flex items-center gap-x-1">
                                <RadioGroupItem
                                  id="online"
                                  value="online"
                                  className={"ring"}
                                />
                                <Label htmlFor="online">Online</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>

                        {pelaksanaanType.state.value == "offline" && (
                          <form.Field name="kota">
                            {(fieldKota) => (
                              <div className="flex flex-col">
                                <Label>Kota</Label>
                                <Select
                                  onValueChange={fieldKota.handleChange}
                                  value={fieldKota.state.value ?? ""}
                                >
                                  <SelectTrigger className={"ring"}>
                                    <SelectValue placeholder="Pilih kota" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {allKota.map((kota, i) => (
                                      <SelectItem key={i} value={kota.id}>
                                        {kota.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>

                                {!fieldKota.state.meta.isValid && (
                                  <FieldError>
                                    {fieldKota.state.meta.errors[0].message}
                                  </FieldError>
                                )}
                              </div>
                            )}
                          </form.Field>
                        )}
                        <form.Field name="pelaksanaan[1]">
                          {(p1) => (
                            <div className="flex flex-col my-2 w-full">
                              <div className="flex flex-col w-full items-center justify-center">
                                <Label htmlFor="p1">
                                  {pelaksanaanType.state.value == "offline"
                                    ? "Nama Lokasi"
                                    : pelaksanaanType.state.value == "online" &&
                                      "Via"}
                                </Label>
                                <Input
                                  className={"ring"}
                                  id="p1"
                                  value={p1.state.value ?? ""}
                                  onBlur={p1.handleBlur}
                                  onChange={(e) =>
                                    p1.handleChange(e.target.value)
                                  }
                                  placeholder={
                                    pelaksanaanType.state.value == "offline"
                                      ? "Masukkan nama lokasi.."
                                      : pelaksanaanType.state.value ==
                                          "online" && "Masukkan via.."
                                  }
                                />
                                {!p1.state.meta.isValid && (
                                  <FieldError>
                                    {p1.state.meta.errors[0].message}
                                  </FieldError>
                                )}
                              </div>
                            </div>
                          )}
                        </form.Field>
                        <form.Field name="pelaksanaan[2]">
                          {(p2) => (
                            <div className="flex flex-col my-2 w-full">
                              <div className="flex flex-col w-full items-center justify-center">
                                <Label htmlFor="p2">
                                  {pelaksanaanType.state.value == "offline"
                                    ? "Alamat"
                                    : pelaksanaanType.state.value == "online" &&
                                      "Via detail"}
                                </Label>
                                <Textarea
                                  className={"ring w-full"}
                                  id="p2"
                                  value={p2.state.value ?? ""}
                                  onBlur={p2.handleBlur}
                                  onChange={(e) =>
                                    p2.handleChange(e.target.value)
                                  }
                                  placeholder={
                                    pelaksanaanType.state.value == "offline"
                                      ? "Masukkan alamat.."
                                      : pelaksanaanType.state.value ==
                                          "online" && "Masukkan via detail.."
                                  }
                                />
                                {!p2.state.meta.isValid && (
                                  <FieldError>
                                    {p2.state.meta.errors[0].message}
                                  </FieldError>
                                )}
                              </div>
                            </div>
                          )}
                        </form.Field>
                        <form.Field name="pelaksanaan[3]">
                          {(p3) => (
                            <div className="flex flex-col my-2 w-full ">
                              <div className="flex flex-col w-full items-center justify-center">
                                <Label htmlFor="p3">
                                  {pelaksanaanType.state.value == "offline"
                                    ? "Link alamat"
                                    : pelaksanaanType.state.value == "online" &&
                                      "Link via"}
                                </Label>
                                <Input
                                  type={"url"}
                                  className={"ring w-full"}
                                  id="p3"
                                  value={p3.state.value ?? ""}
                                  onBlur={p3.handleBlur}
                                  onChange={(e) =>
                                    p3.handleChange(e.target.value)
                                  }
                                  placeholder={
                                    pelaksanaanType.state.value == "offline"
                                      ? "Masukkan url alamat.."
                                      : pelaksanaanType.state.value ==
                                          "online" &&
                                        "Masukkan url via detail.."
                                  }
                                />
                                {!p3.state.meta.isValid && (
                                  <FieldError>
                                    {p3.state.meta.errors[0].message}
                                  </FieldError>
                                )}
                              </div>
                            </div>
                          )}
                        </form.Field>
                        <form.Field name="pelaksanaan[4]">
                          {(p4) => (
                            <div className="flex flex-col my-2 w-full ">
                              <div className="flex flex-col w-full items-center justify-center">
                                <Label htmlFor="p4">Note Pelaksanaan</Label>
                                <Textarea
                                  className={"ring w-full"}
                                  id="p4"
                                  value={p4.state.value ?? ""}
                                  onBlur={p4.handleBlur}
                                  onChange={(e) =>
                                    p4.handleChange(e.target.value)
                                  }
                                  placeholder={"Masukkan notes.."}
                                />
                                {!p4.state.meta.isValid && (
                                  <FieldError>
                                    {p4.state.meta.errors[0].message}
                                  </FieldError>
                                )}
                              </div>
                            </div>
                          )}
                        </form.Field>
                      </div>
                    )}
                  </form.Field>
                </div>
              )}
            </form.Field>
            <div className="flex items-center justify-start">
              <Button type="submit">Submit</Button>
              <Button
                type="button"
                variant={"outline"}
                onClick={() => {
                  form.reset();
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
};
export default FormEdit;
