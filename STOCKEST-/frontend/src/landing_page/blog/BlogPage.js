import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";
import BlogCard from "./BlogCard";
import { fetchFinancialNews } from "../../services/newsApi";
import axios from "axios";


function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsData = await fetchFinancialNews();
        setArticles(newsData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news');
        setLoading(false);
      }
    };

    loadNews();
    // Refresh news every 5 minutes
    const interval = setInterval(loadNews, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center p-5">Loading latest financial news...</div>;
  if (error) return <div className="text-center p-5 text-danger">{error}</div>;

  return (
    <>
      <Hero />
      <BlogCard articles={articles} />
      <OpenAccount />
      
    </>
  );
}

export default BlogPage;
