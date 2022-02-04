import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Logo = (props) => (
  <Image
    src="/img/logo.png"
    alt="Taste pizza logo"
    width={160}
    height={69}
    {...props}
  />
);

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="telephone call"
            height={32}
            width={32}
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+234805 242 5981</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Logo />
          <li className={styles.listItem}>Event</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="cart icon" height={30} width={30} />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
