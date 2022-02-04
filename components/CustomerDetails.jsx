import React from "react";
import styles from "../styles/CustomerDetails.module.css";

const CustomerDetails = ({ order }) => (
  <div className={styles.customer_info}>
    <h2>Customer&apos;s Details</h2>
    <ul>
      <li>Order ID: {order.id}</li>
      <li>Name: {order.customer}</li>
      <li>Address: {order.address}</li>
      <li>Total Price: {order.total}</li>
    </ul>
  </div>
);

export default CustomerDetails;
