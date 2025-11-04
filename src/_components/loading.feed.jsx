const { Skeleton } = require("@/components/ui/skeleton");

const LoadingFeed = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-5">
      <div className="w-full h-72">
        <Skeleton className={"w-full h-full"} />
      </div>
      <div className="w-full h-72">
        <Skeleton className={"w-full h-full"} />
      </div>
      <div className="w-full h-72">
        <Skeleton className={"w-full h-full"} />
      </div>
    </div>
  );
};
export default LoadingFeed;
