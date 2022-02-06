import React from "react";
import Image from "next/image";
import styles from "../styles/CartTable.module.css";

const CartTable = ({ cart }) => {
  return (
    <>
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
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  alt="product image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className={styles.name}>{cartItem.name}</span>
              <span className={styles.extra}>{cartItem.extra}</span>
              <span className={styles.price}>{cartItem.price}</span>
              <span className={styles.quantity}>{cartItem.quantity}</span>
              <span className={styles.total}>{cartItem.total}</span>
            </tr>
          ))}
        </tbody>
      </table>
      {/* mobile view @ 480px */}
      <div className={styles.mobileTable}>
        {cart.map((cartItem, id) => (
          <div key={id} className={styles.cartItem}>
            <div className={styles.imgContainer}>
              <Image
                src="/img/pizza.png"
                alt="product image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className={styles.name}>{cartItem.name}</h3>
            <h4 className={styles.extra}>Extra: {cartItem.extra}</h4>
            <b className={styles.price}>Price: {cartItem.price}</b>
            <h4 className={styles.quantity}>Quantity: {cartItem.quantity}</h4>
            <h4 className={styles.total}>Total: {cartItem.total}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartTable;
