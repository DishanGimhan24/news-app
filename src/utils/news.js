import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_URL}${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};