import { toast } from "sonner";

export const refetchingData = (title, refetch) => {
  toast.info(`Sedang Refetch ${title}`);
  refetch().then(() => toast.success(`Berhasil Refetch ${title}`));
};
