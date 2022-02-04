import React from "react";
import styles from "../styles/OrderTable.module.css";

const OrderTable = ({ order }) => (
  <table className={styles.table}>
    <thead>
      <th>Order ID</th>
      <th>Customer</th>
      <th>Address</th>
      <th>Total</th>
    </thead>
    <tbody>
      <tr>
        <td>
          <span className={styles.orderID}>{order.id}</span>
        </td>
        <td>
          <span className={styles.customer}>{order.customer}</span>
        </td>
        <td>
          <span className={styles.address}>{order.address}</span>
        </td>
        <td>
          <span className={styles.total}>{order.total}</span>
        </td>
      </tr>
    </tbody>
  </table>
);

export default OrderTable;
