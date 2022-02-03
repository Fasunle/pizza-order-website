import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const cart = [
    {
      img: "/img/pizza.png",
      name: "Wendy Rollin",
      extra: ["Spicy sauce"],
      price: 19.2,
      quantity: 1,
      total: 19.2,
    },
    {
      img: "/img/pizza.png",
      name: "Wendy Mendy",
      extra: ["Garlic sauce"],
      price: 120.2,
      quantity: 1,
      total: 120.2,
    },
    {
      img: "/img/pizza.png",
      name: "Wendy Rollin",
      extra: ["Spicy sauce"],
      price: 10.2,
      quantity: 1,
      total: 10.2,
    },
  ];

  const cartTotalPrice = (cart) => {
    let total = 0;
    cart.map((cartItem) => {
      total += cartItem.total;
    });
    return total;
  };

  const getDiscount = (total, d = 0.05) => total - total * d;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <th>Product</th>
            <th>Name</th>
            <th>Extra</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </thead>
          <tbody>
            {cart.map((cartItem, id) => (
              <tr key={id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      alt="product image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{cartItem.name}</span>
                </td>
                <td>
                  <span className={styles.extra}>{cartItem.extra}</span>
                </td>
                <td>
                  <span className={styles.price}>{cartItem.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{cartItem.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>{cartItem.total}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <h2 className={styles.cartTitle}>Cart Total</h2>
        <div className={styles.cartDiscount}>
          <b>Discount: </b>
          <span className={styles.discount}>{"5%"}</span>
        </div>
        <div className={styles.cartTotal}>
          <b>Total: </b> $ {getDiscount(cartTotalPrice(cart))}
        </div>{" "}
        <button className={styles.checkout}>Checkout Now!</button>
      </div>
    </div>
  );
};

export default Cart;
