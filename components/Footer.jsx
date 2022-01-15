import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" objectFit="cover" alt="Footer" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID THE CODERS PIZZA WELL{" "}
          </h2>
        </div>
        <div className={styles.card}>
          <h2 className={styles.address_title}>FIND OUR SHOP</h2>
          <p className={styles.text}>
            16 Udo Usoro Street,
            <br />
            Effiat Offot, Uyo
            <br />
            Akwa Ibom State, Nigeria. +2348052425981 <br />
            kfasunle@gmail.com
          </p>
          <p className={styles.text}>
            160 Udo Udoma Street,
            <br />
            Aka Offot, Uyo
            <br />
            Akwa Ibom State, Nigeria. +2348052425981 <br />
            kfasunle@gmail.com
          </p>
          <p className={styles.text}>
            146 Udo Idoho Street,
            <br />
            Effiat Offot, Uyo
            <br />
            Akwa Ibom State, Nigeria. +2348052425981 <br />
            kfasunle@gmail.com
          </p>
          <p className={styles.text}>
            56 Obio imho Street,
            <br />
            Aka Road, Uyo
            <br />
            Akwa Ibom State, Nigeria. +2348052425981 <br />
            kfasunle@gmail.com
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.working_hours}>WORKING HOURS</h2>
          <h2 className={styles.text}>Monday - Friday</h2>
          <h3 className={styles.text}>07:00 am - 08:00 pm</h3>
          <h2 className={styles.text}>Saturday - Sunday</h2>
          <h3 className={styles.text}>07:00 am - 10:00 pm</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
