const BASE_URL = import.meta.env.VITE_MOCK_API_URL;
const QUOTES_ENDPOINT = `${BASE_URL}/quotes`;

const headers = {
  "Content-Type": "application/json",
};

const request = (url, options = {}) => fetch(url, { headers, ...options });

export const getQuotes = async () => {
  try {
    const res = await request(QUOTES_ENDPOINT);
    if (!res.ok)
      throw new Error("Failed to fetch quotes. Please try again later.");
    return await res.json();
  } catch (err) {
    throw new Error(err.message || "Unexpected error occurred.");
  }
};

export const addQuote = async ({ author, text }) => {
  try {
    const res = await request(QUOTES_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ author, text }),
    });
    if (!res.ok)
      throw new Error("Failed to add quote. Please try again later.");
    return await res.json();
  } catch (err) {
    throw new Error(err.message || "Unexpected error occurred while adding.");
  }
};

export const deleteQuote = async (id) => {
  try {
    const res = await request(`${QUOTES_ENDPOINT}/${id}`, { method: "DELETE" });
    if (!res.ok)
      throw new Error("Failed to delete quote. Please try again later.");
  } catch (err) {
    throw new Error(err.message || "Unexpected error occurred while deleting.");
  }
};
