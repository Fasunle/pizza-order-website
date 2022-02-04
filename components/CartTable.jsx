import React from "react";
import Image from "next/image";
import styles from "../styles/CartTable.module.css";

const CartTable = ({ cart }) => {
  return (
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
  );
};

export default CartTable;
