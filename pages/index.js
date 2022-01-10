import Head from "next/head";
import Image from "next/image";
import { Featured } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured urls={["featured.png", "featured2.png", "featured3.png"]} />
      <Head>
        <title>Food Order App in Uyo</title>
        <meta name="description" content="the best pizza in Nigeria" />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Online Pizza</a>
        </h1>
      </main>
    </div>
  );
}
