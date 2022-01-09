import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Order App in Uyo</title>
        <meta name="description" content="the best pizza in Nigeria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Online Pizza</a>
        </h1>
      </main>
    </div>
  );
}
