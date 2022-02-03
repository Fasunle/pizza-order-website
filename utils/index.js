export const cartTotalPrice = (cart) => {
  let total = 0;
  cart.map((cartItem) => {
    total += cartItem.total;
  });
  return total;
};

export const getDiscount = (total, d = 0.05) => total - total * d;
