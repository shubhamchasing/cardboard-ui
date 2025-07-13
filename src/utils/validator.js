export const validateQuoteInput = (author, text) => {
  const trimmedAuthor = author.trim();
  const trimmedText = text.trim();
  const errors = {};

  if (!trimmedAuthor) {
    errors.author = "Author name is required.";
  } else if (trimmedAuthor.length > 24) {
    errors.author = "Author name too long (24 max)";
  }

  if (!trimmedText) {
    errors.text = "Quote text is required.";
  } else if (trimmedText.length > 115) {
    errors.text = "Quote text too long (115 max)";
  }

  return {
    errors,
    values: { author: trimmedAuthor, text: trimmedText },
  };
};
