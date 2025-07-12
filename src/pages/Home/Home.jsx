import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Home.module.css";
import { getQuotes, deleteQuote } from "../../services/quoteService";


const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getQuotes();
        setQuotes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteQuote(id);
      setQuotes((prev) => prev.filter((q) => q.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.heading}>Quote Board</h1>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.cardList}>
        {quotes.map((quote) => (
          <Card
            key={quote.id}
            quote={quote}
            onDelete={() => handleDelete(quote.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
