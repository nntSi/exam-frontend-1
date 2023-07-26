import { useSelector } from "react-redux";
import {
  decreaseOrderInCart,
  deleteOrderInCart,
  increaseOrderInCart,
  storeSelector,
} from "../store/slice/storeSlice";
import { useAppDispatch } from "../store/store";
import { totalCost } from "../modules/calfunc";

const Cart = () => {
  const { cart } = useSelector(storeSelector);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="dropdown dropdown-hover dropdown-end">
        <button className="flex items-center space-x-1">
          <i className="bx bx-cart text-xl"></i>
          <p className="text-sm mt-1">({cart.length})</p>
        </button>
        <ul className="dropdown-content z-[1] p-6 shadow-lg bg-base-100 rounded w-80 ring-1 ring-zinc-100 space-y-6 max-h-[600px] overflow-y-scroll">
          <li>
            <p className="text-sm">
              There are <b className="text-gold">{cart.length} item(s)</b> in
              your cart
            </p>
          </li>
          {cart.length > 0 &&
            cart.map((order, index) => (
              <li key={index}>
                <div className="grid grid-cols-12 border-b pb-6 gap-6">
                  <div className="col-span-4 bg-white">
                    <img className="w-full" src={order.item.image} />
                  </div>
                  <div className="col-span-7">
                    <p className="text-xs mb-1">{order.item.title}</p>
                    <p className="font-semibold text-lg text-gold mb-2">
                      ${order.item.price}
                    </p>
                    <div className="flex space-x-2.5 items-center">
                      <input
                        readOnly
                        value={order.qty}
                        className="border border-zinc-200 bg-zinc-50 w-10 text-center rounded-sm pt-0.5"
                        type="number"
                      />
                      <div className="border rounded-sm">
                        <button
                          onClick={() =>
                            dispatch(
                              increaseOrderInCart({ productId: order.item.id })
                            )
                          }
                          type="button"
                          className="px-2 h-full border-r hover:bg-zinc-100"
                        >
                          +
                        </button>
                        <button
                          onClick={() =>
                            dispatch(
                              decreaseOrderInCart({ productId: order.item.id })
                            )
                          }
                          type="button"
                          className="px-2.5 h-full hover:bg-zinc-100"
                        >
                          -
                        </button>
                      </div>
                      <i
                        onClick={() =>
                          dispatch(
                            deleteOrderInCart({ productId: order.item.id })
                          )
                        }
                        className="bx bx-trash cursor-pointer"
                      ></i>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          <li>
            <div>
              <div className="flex justify-between items-end">
                <h2 className="font-semibold text-sm pb-0.5">SUBTOTAL :</h2>
                <h1 className="font-bold text-2xl text-gold">${totalCost(cart).toFixed(2)}</h1>
              </div>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <button
                type="button"
                className="border border-zinc-200 text-xs font-bold pt-3 pb-2 px-6 hover:bg-gold hover:text-white hover:border-gold rounded-sm"
              >
                VIEW CART
              </button>
              <button
                type="button"
                className="border border-zinc-200 text-xs font-bold pt-3 pb-2 px-6 hover:bg-gold hover:text-white hover:border-gold rounded-sm"
              >
                CHECK OUT
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
