import { useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import { fetchAllPrdocuts, storeSelector } from "../../store/slice/storeSlice";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const Shop = () => {
  const dispatch = useAppDispatch();
  const { stores, isLoading } = useSelector(storeSelector);
  const productCardSkeletonNumber = [1, 2, 3, 4, 5, 6, 7, 8];
  useEffect(() => {
    dispatch(fetchAllPrdocuts());
  }, []);
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 sm:col-span-3 xl:col-span-2">
        <SideBar />
      </div>
      <div className="col-span-12 sm:col-span-9 xl:col-span-10 space-y-10">
        <TopBar />
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {isLoading &&
            productCardSkeletonNumber.map((item) => (
              <ProductCardSkeleton key={item} />
            ))}
          {stores.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
