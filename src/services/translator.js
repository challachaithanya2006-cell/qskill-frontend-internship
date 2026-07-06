import axios from "axios";

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

export async function translateText(text, from = "en", to = "es") {
  try {
    const response = await axios.post(
      `https://${API_HOST}/translate`,
      [
        {
          Text: text,
        },
      ],
      {
        params: {
          from,
          to,
        },
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Translation Error:", error);
    throw error;
  }
}