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
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";

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

const TabelDashboard = ({
  isLoading,
  isError,
  isSuccess,
  data = [],
  refetch,
}) => {
  return (
    <div>
      {isLoading ? (
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
