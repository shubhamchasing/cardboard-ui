import styles from "./Card.module.css";

const Card = ({ quote }) => {
  return (
    <div className={styles.card}>
      <button className={styles.delete}>×</button>
      <div className={styles.content}>
        <p className={styles.quote}>&ldquo;{quote.text}&rdquo;</p>
      </div>
      <div className={styles.footer}>
        <span className={styles.author}>— {quote.author}</span>
      </div>
    </div>
  );
};

export default Card;
