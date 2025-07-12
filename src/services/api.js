const BASE_URL = import.meta.env.VITE_MOCK_API_URL;

const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Something went wrong");
    }

    return await response.json();
  } catch (err) {
    console.error("API Error:", err.message);
    throw err;
  }
};

export const getQuotes = () => apiRequest("/quotes");

export const addQuote = (author, quote) =>
  apiRequest("/quotes", {
    method: "POST",
    body: JSON.stringify({ author, quote }),
  });

export const removeQuote = (id) =>
  apiRequest(`/quotes/${id}`, {
    method: "DELETE",
  });
