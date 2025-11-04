const { Button } = require("@/components/ui/button");
const { RefreshCcw } = require("lucide-react");

const FeedError = ({ refetch }) => {
  return (
    <div className="flex items-center justify-center w-full my-10">
      <div className="flex flex-col gap-y-2">
        <div className="font-bold text-sm">Terjadi Error!</div>
        <Button onClick={refetch}>
          <RefreshCcw />
          Refresh
        </Button>
      </div>
    </div>
  );
};
export default FeedError;
