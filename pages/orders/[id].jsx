import styles from "../../styles/Order.module.css";
import OrderTable from "../../components/OrderTable";
import { discountedTotalPrice } from "../../utils";

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
const order = {
  id: 1,
  customer: "John McCarty",
  address: "16 Udo Udoma, Akwa Ibom State",
  total: discountedTotalPrice(cart),
};

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <OrderTable order={order} />
      </div>
      <div className={styles.right}>
        <h2 className={styles.cartTitle}>Order Total</h2>
        <div className={styles.cartDiscount}>
          <b>Discount: </b>
          <span className={styles.discount}>{"5%"}</span>
        </div>
        <div className={styles.cartTotal}>
          <b>Total: </b> $ {discountedTotalPrice(cart)}
        </div>{" "}
        <button disabled className={styles.checkout}>
          Paid!!!
        </button>
      </div>
    </div>
  );
};

export default Order;
