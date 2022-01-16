import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    name: "Wendy Mendy",
    desc: "It's a wendy mender",
    price: [12.3, 54.6, 100],
    img: "/img/pizza.png",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            priority
            layout="fill"
            alt={pizza.name || "pizza"}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>{pizza.name}</h2>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose Pizza size</h3>
        <div className={styles.sizes}>
          <button className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="small sized pizza" />
            <span className={styles.small}>Small</span>
          </button>
          <button className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="medium sized pizza" />
            <span className={styles.medium}>Medium</span>
          </button>
          <button className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="large sized pizza" />
            <span className={styles.large}>Large</span>
          </button>
        </div>
        <h3 className={styles.additional}>Choose Additional Ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type="checkbox" name="double" id="double" />
            <label htmlFor="double">Double </label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" name="cheese" id="cheese" />
            <label htmlFor="cheese">Extra cheese </label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" name="garlic" id="garlic" />
            <label htmlFor="garlic">Garlic sauce </label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" name="spice" id="spice" />
            <label htmlFor="spice">Spicy sauce </label>
          </div>
        </div>
        <div className={styles.add}>
          <input
            type="number"
            id="number"
            name="number"
            defaultValue={1}
            min={1}
            className={styles.number}
          />
          <button type="submit" className={styles.btn}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
