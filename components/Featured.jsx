import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css";

const Featured = ({ urls = [] }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const handleClick = (direction) => {
    if (direction === "right") {
      setPageNumber(pageNumber !== 2 ? pageNumber + 1 : 0);
    } else {
      setPageNumber(pageNumber !== 0 ? pageNumber - 1 : 2);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        onClick={() => handleClick("left")}>
        <Image src="/img/arrowl.png" layout="fill" objectFit="contain" alt="" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * pageNumber}vw)` }}>
        {urls.map((url, id) => (
          <span className={styles.imageContainer} key={id}>
            <Image
              src={`/img/${url}`}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </span>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        onClick={() => handleClick("right")}>
        <Image src="/img/arrowr.png" layout="fill" objectFit="contain" alt="" />
      </div>
    </div>
  );
};

export default Featured;
