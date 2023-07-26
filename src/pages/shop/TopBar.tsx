import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { sortProduct, storeSelector } from "../../store/slice/storeSlice";
import { useAppDispatch } from "../../store/store";

const TopBar = () => {
  const { isLoading, stores } = useSelector(storeSelector);
  const dispatch = useAppDispatch();
  if (isLoading) {
    return (
      <div className="flex justify-between">
        <Skeleton className="w-40" />
        <Skeleton className="w-48 h-8" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-4 items-center">
        <button>
          <i className="bx bxs-grid text-xl text-gold"></i>
        </button>
        <button>
          <i className="bx bx-list-ul text-xl text-zinc-300"></i>
        </button>
        <p className="text-xs text-zinc-500">
          Showing all {stores.length} results
        </p>
      </div>
      <div className="dropdown dropdown-hover">
        <button
          tabIndex={0}
          className="ring-1 w-40 pt-1.5 pb-1 text-sm bg-zinc-100 ring-black text-start px-2.5 flex items-center justify-between"
        >
          <p>Sort By</p>
          <i className="bx bx-chevron-down"></i>
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 ring-1 ring-black w-full"
        >
          <li>
            <a onClick={() => dispatch(sortProduct("price"))}>price</a>
          </li>
          {/* <li>
            <a>Item 2</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
