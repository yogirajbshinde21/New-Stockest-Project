import axios from 'axios';

const FINNHUB_API_KEY = 'cvi065hr01qks9q7du5gcvi065hr01qks9q7du60';
const BASE_URL = 'https://finnhub.io/api/v1';

export const fetchFinancialNews = async () => {
  try {
    // Get news for major tech companies
    const symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN'];
    const today = new Date();
    const fromDate = new Date(today);
    fromDate.setDate(today.getDate() - 7); // Get news from last 7 days
    
    const formatDate = (date) => date.toISOString().split('T')[0];
    
    const newsPromises = symbols.map(symbol =>
      axios.get(`${BASE_URL}/company-news`, {
        params: {
          symbol,
          from: formatDate(fromDate),
          to: formatDate(today),
          token: FINNHUB_API_KEY
        }
      })
    );

    const responses = await Promise.all(newsPromises);
    const allNews = responses.flatMap(response => response.data || []);

    // Sort by datetime (newest first) and limit to 50 articles
    const sortedNews = allNews
      .sort((a, b) => b.datetime - a.datetime)
      .slice(0, 50);

    return sortedNews.map(article => ({
      title: article.headline,
      description: article.summary,
      author: article.source,
      date: new Date(article.datetime * 1000).toISOString(), // Convert UNIX timestamp to ISO string
      url: article.url,
      image: article.image || 'default-news-image.jpg',
      category: article.category,
      related: article.related
    }));
  } catch (error) {
    console.error('Error fetching financial news:', error);
    if (error.response && error.response.status === 429) {
      console.error('API rate limit exceeded. Please try again later.');
    }
    return [];
  }
};