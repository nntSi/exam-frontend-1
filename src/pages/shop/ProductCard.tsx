import { useState } from "react";
import { newOrderToCart, Product } from "../../store/slice/storeSlice";
import Modal from "../../components/Modal";
import NumberInput from "../../components/NumberInput";
import { useAppDispatch } from "../../store/store";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const [hover, setHover] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    dispatch(newOrderToCart({ item: product, qty: quantity }));
    setQuantity(1);
    setIsOpenModal(false);
  };
  const dispatch = useAppDispatch();
  return (
    <div>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="bg-white/70 rounded mb-4">
          <div className="relative">
            <div className="h-64 overflow-hidden flex p-4 items-center justify-center">
              <img
                className={`w-2/3 object-cover duration-200`}
                src={product.image}
              />
            </div>
            <div
              className={`absolute w-full h-64 top-0 left-0 rounded duration-200 bg-black/10 ${
                hover ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-full w-full flex flex-col items-center justify-center space-y-2">
                <button
                  onClick={() => {
                    dispatch(newOrderToCart({ item: product, qty: 1 }));
                    setIsShowLoading(true)
                    setTimeout(() => {
                      setIsShowLoading(false)
                    }, 2000);
                  }}
                  type="button"
                  className="bg-white rounded-sm pt-1.5 pb-0.5 pl-2 px-2.5 hover:bg-gold hover:text-white duration-200"
                >
                  {isShowLoading ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    <i className="bx bx-cart "></i>
                  )}
                </button>
                <button
                  onClick={() => setIsOpenModal(true)}
                  className="bg-white rounded-sm pt-1.5 pb-0.5 pl-2 px-2.5 hover:bg-gold hover:text-white duration-200"
                >
                  <i className="bx bx-search "></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-zinc-500">{product.title.slice(0, 20)}</p>
          <i className="bx bx-heart cursor-pointer"></i>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-semibold">${product.price}</p>
          <div className="flex space-x-1 items-center">
            <div className="flex space-x-1">
              <i className="bx bxs-star text-amber-400 text-xs"></i>
              <p className="text-xs pt-0.5">{product.rating.rate}</p>
            </div>
            <p className="pt-0.5">-</p>
            <p className="text-xs pt-0.5">{product.rating.count} reviews</p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        onClickBackdrop={() => setIsOpenModal(false)}
        child={
          <div className="bg-white w-[960px] rounded-sm">
            <div className="grid grid-cols-7 gap-8">
              <div className="col-span-3 p-8 flex items-center">
                <img src={product.image} className="w-full" />
              </div>
              <div className="col-span-4 p-8 bg-zinc-50 border-l border-zinc-200/40">
                <div className="border-b-2 border-dashed pb-4">
                  <h1 className="text-2xl font-semibold">{product.title}</h1>
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1 items-center">
                      <div className="flex space-x-1">
                        <i className="bx bxs-star text-amber-400 text-xs"></i>
                        <p className="text-xs pt-0.5">{product.rating.rate}</p>
                      </div>
                      <p className="pt-0.5">-</p>
                      <p className="text-xs pt-0.5">
                        {product.rating.count} reviews
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-semibold text-3xl text-gold mb-2">
                    ${product.price}
                  </p>
                  <p className="text-sm">
                    Available: <b className="text-green-600 mb-2">In Stock</b>
                  </p>
                  <p className="text-sm text-zinc-400 mb-6">
                    {product.description}
                  </p>
                  <div className="flex space-x-6">
                    <div className="w-3/12">
                      <NumberInput
                        value={quantity}
                        onChange={(value) => setQuantity(value)}
                      />
                    </div>
                    <button
                      onClick={handleAddToCart}
                      type="button"
                      className="ring-1 ring-gold text-gold hover:text-white bg-gold/10 hover:bg-gold duration-300 font-bold text-sm px-6 rounded"
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <div className="mt-4 text-sm">
                    Categories :{" "}
                    <span className="font-light">{product.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ProductCard;
