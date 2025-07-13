import { useState } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import { validateQuoteInput } from "../../utils/validator";

const Modal = ({ onClose, onAdd }) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [formError, setFormError] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "author") {
      setAuthor(value);
    } else if (name === "quote") {
      setText(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors, values } = validateQuoteInput(author, text);

    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }

    onAdd(values.author, values.text);
    setAuthor("");
    setText("");
    setFormError({});
    onClose();
  };

  const handleStopPropogation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onMouseDown={onClose}>
      <div className={styles.modal} onMouseDown={handleStopPropogation}>
        <h2 className={styles.heading}>Add Quote</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={author}
            onChange={handleOnChange}
            className={styles.input}
          />
          {formError.author && (
            <p className={styles.error}>{formError.author}</p>
          )}
          <textarea
            placeholder="Quote"
            name="quote"
            value={text}
            onChange={handleOnChange}
            className={styles.textarea}
          />
          {formError.text && <p className={styles.error}>{formError.text}</p>}
          <div className={styles.actions}>
            <Button type="button" variant="danger" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
