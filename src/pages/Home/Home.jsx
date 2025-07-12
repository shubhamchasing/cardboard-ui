import { useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Home.module.css";

const quoteList = [
  {
    id: "1",
    author: "Rumi",
    text: "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
  },
  {
    id: "2",
    author: "Abdul Kalam",
    text: "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
  },
  {
    id: "3",
    author: "Bill Gates",
    text: "If you can't make it good, at least make it look good.",
  },
  {
    id: "4",
    author: "Albert Einstein",
    text: "If you are out to describe the truth, leave elegance to the tailor.",
  },
  {
    id: "5",
    author: "Mother Teresa",
    text: "One of the greatest diseases is to be nobody to anybody.",
  },
  {
    id: "6",
    author: "Muhammad Ali",
    text: "I’m so fast that last night I turned off the light switch and was in bed before the room was dark.",
  },
  {
    id: "7",
    author: "Nelson Mandela",
    text: "People must learn to hate, and if they can learn to hate, they can be taught to love.",
  },
  {
    id: "8",
    author: "Walt Disney",
    text: "The way to get started is to quit talking and begin doing.",
  },
  {
    id: "9",
    author: "Ali ibn Abi Talib (R.A)",
    text: "The less of the world, the freer you live.",
  },
  {
    id: "10",
    author: "William Shakespeare",
    text: "I will praise any man that will praise me.",
  },
];

const Home = () => {
  const [quotes, setQuotes] = useState(quoteList);

  return (
    <main className={styles.home}>
      <h1 className={styles.heading} >Quote Cards</h1>
      <div
       className={styles.cardList}
      >
        {quotes.map((quote) => (
          <Card key={quote.id} quote={quote} />
        ))}
      </div>
    </main>
  );
};

export default Home;
