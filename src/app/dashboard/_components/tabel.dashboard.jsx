import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TabelDashboard = ({ isLoading, isError, isSuccess, data, refetch }) => {
  return (
    <Card className={`p-0 gap-0 w-full max-h-64`}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 1</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>data 1</TableCell>
            <TableCell>data 1</TableCell>
            <TableCell>data 1</TableCell>
            <TableCell>data 1</TableCell>
            <TableCell>data 1</TableCell>
            <TableCell>data 1</TableCell>
            <TableCell>data 1</TableCell>
            <TableCell>data 1</TableCell>
            <TableCell>data 1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};
export default TabelDashboard;
