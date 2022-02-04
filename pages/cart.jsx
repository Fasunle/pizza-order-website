import Image from "next/image";
import CartTable from "../components/CartTable";
import styles from "../styles/Cart.module.css";
import { cartTotalPrice, getDiscount } from "../utils";

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
const Cart = () => (
  <div className={styles.container}>
    <div className={styles.left}>
      <CartTable cart={cart} />
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

export default Cart;
