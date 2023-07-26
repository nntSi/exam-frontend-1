import { useSelector } from "react-redux";
import { Categories } from "../../configs/categories";
import { filtersCategory, storeSelector } from "../../store/slice/storeSlice";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAppDispatch } from "../../store/store";

const SideBar = () => {
  const { isLoading, category } = useSelector(storeSelector);
  const dispatch = useAppDispatch();
  if (isLoading) {
    return (
      <div>
        <Skeleton className="h-6 mb-4 w-32" />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-lg font-bold text-center sm:text-start">
        Categories
      </h1>
      <ul className="mt-4 text-zinc-400 sm:space-y-2 grid grid-cols-3 gap-4 sm:block">
        {Categories.map((item, index) => (
          <li
            onClick={() => dispatch(filtersCategory(item.name))}
            className={`${
              category === item.name ? "text-gold" : ""
            } cursor-pointer hover:text-gold duration-200 sm:text-start text-center`}
            key={index}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
