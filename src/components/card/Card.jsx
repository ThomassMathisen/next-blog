import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>01.01.2024 - </span>
          <span className={styles.category}>Fashion</span>
        </div>
        <Link href="/blog?=fashion">
          <h1>Title</h1>
        </Link>
        <div className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
          mollitia molestias assumenda magnam ea repudiandae quis officia veniam
          eum sit iste obcaecati sapiente esse beatae optio ex animi vel iure.
        </div>
        <Link href="/posts?=fashion">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
