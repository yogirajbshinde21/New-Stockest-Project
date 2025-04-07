import React from 'react';
import './BlogCard.css';

const BlogCard = ({ articles }) => {
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch (error) {
      return dateString;
    }
  };

  const getRandomImage = () => {
    const images = [
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop'
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div className="container py-5">
      {!articles || articles.length === 0 ? (
        <div className="text-center">
          <h3>No articles available at the moment</h3>
          <p>Please check back later for the latest financial news.</p>
        </div>
      ) : (
        <div className="row g-4">
          {articles.map((article, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="blog-card">
                <img 
                  src={article.image || getRandomImage()}
                  alt={article.title || 'Article image'}
                  className="blog-card-image"
                  onError={(e) => {
                    e.target.src = getRandomImage();
                  }}
                  loading="lazy"
                />
                {article.category && (
                  <span className="blog-card-category">{article.category}</span>
                )}
                <div className="blog-card-content">
                  <h2 className="blog-card-title">{truncateText(article.title, 60)}</h2>
                  <p className="blog-card-description">{truncateText(article.description, 120)}</p>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="blog-card-link"
                    style={{ textDecoration: "none" }}
                  >
                    Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>
                  <br />
                  <div className="blog-card-footer">
                    <span className="blog-card-author">By {article.author || 'Unknown'}</span>
                    <span className="blog-card-date">{formatDate(article.date)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogCard;
