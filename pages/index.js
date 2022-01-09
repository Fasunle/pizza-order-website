import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by Kehinde Fasunle
          <svg viewBox="0 0 48 48" className={styles.logo}>
            <title>Nigeria</title>
            <g>
              <rect x="16" y="6" fill="#E6E6E6" width="16" height="36"></rect>{" "}
              <path
                fill="#078754"
                d="M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z"></path>
              <path
                fill="#078754"
                d="M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z"></path>
            </g>
          </svg>
        </a>
      </footer>
    </div>
  );
}
