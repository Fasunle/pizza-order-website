import { Featured, PizzaList } from "../components";
import styles from "../styles/Home.module.css";

const pizzalist = [
  {
    title: "FIORI DI ZUCA",
    price: "$12.09",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img_url: "/img/pizza.png",
  },
  {
    title: "FIORI DI ZUCA",
    price: "$12.09",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img_url: "/img/pizza.png",
  },
  {
    title: "FIORI DI ZUCA",
    price: "$12.09",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img_url: "/img/pizza.png",
  },
  {
    title: "FIORI DI ZUCA",
    price: "$12.09",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    img_url: "/img/pizza.png",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured urls={["featured.png", "featured2.png", "featured3.png"]} />
      <PizzaList pizzalist={pizzalist} />
    </div>
  );
}
