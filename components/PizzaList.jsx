import styles from "../styles/Pizzalist.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzalist }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>THE BEST PIZZA IN TOWN</h2>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        laboriosam enim voluptates expedita eaque. Fuga a id, voluptatem culpa
        optio quo pariatur porro corrupti explicabo, quia dolores, cupiditate
        illo dolore.
      </p>
      <div className={styles.wrapper}>
        {pizzalist &&
          pizzalist.map((pizza, id) => <PizzaCard key={id} {...pizza} />)}
      </div>
    </div>
  );
};

export default PizzaList;
