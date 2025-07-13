import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Home.module.css";
import { getQuotes, deleteQuote, addQuote } from "../../services/quoteService";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setLoading(true);
      await deleteQuote(id);
      setQuotes((prev) => prev.filter((q) => q.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (author, text) => {
    try {
      setLoading(true);
      const newQuote = await addQuote({ author, text });
      setQuotes((prev) => [...prev, newQuote]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.home}>
      <header className={styles.navbar}>
        <div className={styles.container}>
          <h1 className={styles.title}>Quote Board</h1>
          <Button onClick={openModal}>+ Add Quote</Button>
        </div>
      </header>

      {loading && <p>Loading...</p>}
      {!loading && error && <p className={styles.error}>{error}</p>}
      {!loading && !error && quotes.length === 0 && (
        <p>No quotes yet. Add one!</p>
      )}

      {!loading && !error && (
        <div className={styles.cardList}>
          {quotes.map((quote) => (
            <Card
              key={quote.id}
              quote={quote}
              onDelete={() => handleDelete(quote.id)}
            />
          ))}
        </div>
      )}

      {isModalOpen && <Modal onClose={closeModal} onAdd={handleAdd} />}
    </div>
  );
};

export default Home;
