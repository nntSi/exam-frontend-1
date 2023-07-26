import { Order } from "../store/slice/storeSlice";

export const totalCost = (cart: Order[]) => {
  let total_cost = 0;
  if (cart.length < 1) {
    return 0;
  }
  cart.map((order) => {
    total_cost += (order.item.price * order.qty)
  })
  return total_cost;
};
