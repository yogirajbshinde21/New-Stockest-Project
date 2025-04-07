import React, { useState } from 'react';

const FaqDropdown = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'What is the purpose of this app?', answer: 'The app teaches users how stock trading works by allowing them to practice in a simulated environment with fake currency (points).' },
    { question: 'How does the fake currency system work?', answer: 'Users receive points they can use to simulate real stock market trades, helping them learn without financial risk.' },
    { question: 'Can I lose real money in the app?', answer: 'No, the app uses fake currency, so users do not risk losing real money.' },
    { question: 'Is this app available in regional languages?', answer: 'Yes, the app supports multiple regional languages to remove language barriers for users.' },
    { question: 'Do I need real money to play?', answer: 'No, the app is completely free, and users trade using points, not real currency.' },
    { question: 'Can I learn real stock market strategies here?', answer: 'Yes, the app provides tutorials and simulated trading experiences to help users understand real-world trading strategies.' },
    { question: 'What regions does this app target?', answer: 'The app focuses on rural areas but is available for all users interested in learning about the stock market.' },
    { question: 'What technologies are used to build the app?', answer: 'The app is built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js.' },
    { question: 'Can I track my progress?', answer: 'Yes, the app includes progress tracking to monitor your performance and learning milestones' },
    { question: 'Are there leaderboards or competitions?', answer: 'Yes, the app features leaderboards to rank users based on their trading performance with points.' },
    { question: 'Does this app use real stock market data?', answer: 'The app uses simulated stock market data, mimicking real-world scenarios, but no real-time data is involved.' },
    { question: 'How does this app help with financial literacy?', answer: 'It provides educational modules, tutorials, and hands-on trading experience to teach users about stock markets.' },
    { question: 'Is this app suitable for beginners', answer: 'Yes, the app is designed for beginners who want to learn how the stock market works without financial risks.' },
    { question: 'What kind of stocks can I trade in the app', answer: 'The app features a wide range of simulated stocks, including options resembling real-world companies and sectors.' },
    { question: 'How are regional language options activated?', answer: 'Users can select their preferred regional language from the app’s settings menu.' },
    { question: 'Does the app require internet access?', answer: 'Yes, internet access is required to interact with the app, simulate trades, and receive updates.' },
    { question: 'Are there any in-app purchases?', answer: 'No, the app is completely free, and there are no in-app purchases.' },
    { question: 'Can I invite friends to join the app?', answer: 'Yes, users can invite friends to play and compete in trading simulations through the app social features.' },
    { question: 'What kind of educational content is provided?', answer: 'The app includes modules on basic stock trading, market trends, risk management, and investment strategies.' },
    { question: 'How does the app simulate stock market fluctuations?', answer: 'The app uses algorithms to generate stock price changes based on realistic market trends, allowing users to practice trading strategies.' },
  
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);  
    } else {
      setOpenIndex(index);  
    }
  };

  return (
    <div style={styles.container}>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <button onClick={() => toggleAnswer(index)} style={styles.question}>
            {faq.question}
            <span style={{ marginLeft: '10px', fontSize: '12px' }}>
              {openIndex === index ? '▲' : '▼'}
            </span>
          </button>
          {openIndex === index && (
            <div style={styles.answer}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  faqItem: {
    marginBottom: '15px',
  },
  question: {
    width: '100%',
    textAlign: 'left',
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 15px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s',
  },
  answer: {
    padding: '15px',
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '5px',
    marginTop: '5px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 0.3s',
  },
};

export default FaqDropdown;
