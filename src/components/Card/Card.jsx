import styles from "./Card.module.css";

const Card = ({ quote, onDelete }) => {
  return (
    <div className={styles.card}>
      <button className={styles.delete} onClick={onDelete}>
        ×
      </button>
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
