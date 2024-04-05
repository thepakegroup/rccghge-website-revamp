import { Skeleton } from "@/components/ui/skeleton";

export default function PageSkeleton() {
  return (
    <div className="flex wrapper flex-col space-y-3 page-spacing">
      <Skeleton className="h-60 w-full rounded-xl md:hidden" />
      <div className="md:flex gap-5 hidden max-w-7xl">
        <Skeleton className=" h-60 w-1/2 rounded-xl " />
        <div className=" space-y-4 w-1/2">
          <Skeleton className="h-8 mb-5 w-[180px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[280px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      <div className="space-y-2 md:space-y-4 md:pt-2">
        <Skeleton className="h-4 w-[250px] md:w-full" />
        <Skeleton className="h-4 w-[250px] md:w-3/5 hidden md:block" />
        <Skeleton className="h-4 w-[200px] md:w-2/5" />
      </div>
    </div>
  );
}
