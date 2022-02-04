import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ title, desc, price, img_url }) => {
  return (
    <div className={styles.container}>
      <Image src={img_url} width={500} height={500} alt="pizza" />
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.price}>{price}</span>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default PizzaCard;
