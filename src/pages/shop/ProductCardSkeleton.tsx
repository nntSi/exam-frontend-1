import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-[252px] mb-3.5" />
      <div className="flex justify-between">
        <Skeleton className="w-20 sm:w-32" />
        <Skeleton className="w-8" />
      </div>
      <div className="flex justify-between">
        <Skeleton className="w-10" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
