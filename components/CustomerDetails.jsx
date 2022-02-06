import React from "react";
import styles from "../styles/CustomerDetails.module.css";

const CustomerDetails = ({ order }) => (
  <div className={styles.customer_info}>
    <h2>Customer&apos;s Details</h2>
    <ul>
      <li>
        <span>Order ID:</span> {order.id}
      </li>
      <li>
        <span>Name:</span> {order.customer}
      </li>
      <li>
        <span>Address:</span> {order.address}
      </li>
      <li>
        <span>Total Price:</span> {order.total}
      </li>
    </ul>
  </div>
);

export default CustomerDetails;
