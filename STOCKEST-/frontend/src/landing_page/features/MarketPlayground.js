import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const INITIAL_POINTS = 1000;

function MarketPlayground() {
  const [scenario, setScenario] = useState(0);
  const [userPoints, setUserPoints] = useState(INITIAL_POINTS);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scenarios = [
    {
      title: 'Market Volatility Challenge',
      description: 'The market is experiencing high volatility. What would you do?',
      choices: [
        { text: 'Hold your positions', impact: 50, explanation: 'Good choice! Staying calm during volatility is often wise.' },
        { text: 'Sell everything', impact: -100, explanation: 'Panic selling often leads to losses.' },
        { text: 'Buy more stocks', impact: -50, explanation: 'Buying during high volatility can be risky.' }
      ]
    },
    {
      title: 'Company News Impact',
      description: 'A major company announces unexpected leadership changes. How do you react?',
      choices: [
        { text: 'Wait for more information', impact: 75, explanation: 'Smart! Gathering information before acting is crucial.' },
        { text: 'Buy immediately', impact: -75, explanation: 'Acting without full information can be dangerous.' },
        { text: 'Short the stock', impact: -50, explanation: 'Shorting based on news alone is risky.' }
      ]
    },
    {
      title: 'Market Sector Rotation',
      description: `Technology sector is declining while healthcare is rising. What's your move?`,
      choices: [
        { text: 'Diversify portfolio', impact: 100, explanation: 'Excellent! Diversification helps manage risk.' },
        { text: 'Go all-in on healthcare', impact: -25, explanation: 'Concentrating in one sector increases risk.' },
        { text: 'Sell all holdings', impact: -100, explanation: 'Extreme reactions rarely work well.' }
      ]
    }
  ];

  useEffect(() => {
    // Simulate loading scenarios
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChoice = (choiceIndex) => {
    try {
      const choice = scenarios[scenario].choices[choiceIndex];
      setSelectedChoice(choiceIndex);
      setUserPoints(prev => Math.max(0, prev + choice.impact));
      setFeedback(choice.explanation);
    } catch (err) {
      setError('An error occurred while processing your choice. Please try again.');
    }
  };

  const nextScenario = () => {
    if (scenario < scenarios.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setScenario(prev => prev + 1);
        setSelectedChoice(null);
        setFeedback('');
        setIsTransitioning(false);
      }, 500);
    }
  };

  const resetGame = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setScenario(0);
      setUserPoints(INITIAL_POINTS);
      setSelectedChoice(null);
      setFeedback('');
      setError(null);
      setIsTransitioning(false);
    }, 500);
  };

  if (isLoading) {
    return (
      <div className="container p-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container p-4">
        <div className="alert alert-danger" role="alert">
          {error}
          <button 
            className="btn btn-outline-danger ms-3"
            onClick={() => setError(null)}
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`container p-4 ${isTransitioning ? 'opacity-50' : ''}`}>
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="mb-3">Market Simulator Playground</h2>
          <h4 className="text-primary">Your Points: {userPoints}</h4>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title mb-3">{scenarios[scenario].title}</h3>
              <p className="card-text mb-4">{scenarios[scenario].description}</p>

              <div className="d-grid gap-3">
                {scenarios[scenario].choices.map((choice, index) => (
                  <button
                    key={index}
                    className={`btn ${selectedChoice === index ? 
                      (choice.impact > 0 ? 'btn-success' : 'btn-danger') : 
                      'btn-outline-primary'} ${isTransitioning ? 'disabled' : ''}`}
                    onClick={() => handleChoice(index)}
                    disabled={selectedChoice !== null || isTransitioning}
                  >
                    {choice.text}
                  </button>
                ))}
              </div>

              {feedback && (
                <div className={`alert mt-4 ${selectedChoice !== null && 
                  scenarios[scenario].choices[selectedChoice].impact > 0 ? 
                  'alert-success' : 'alert-danger'}`}>
                  {feedback}
                </div>
              )}

              <div className="d-flex justify-content-between mt-4">
                <button 
                  className="btn btn-secondary" 
                  onClick={resetGame}
                >
                  Reset Game
                </button>
                {selectedChoice !== null && scenario < scenarios.length - 1 && (
                  <button 
                    className="btn btn-primary" 
                    onClick={nextScenario}
                  >
                    Next Scenario
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MarketPlayground.propTypes = {
  scenarios: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          impact: PropTypes.number.isRequired,
          explanation: PropTypes.string.isRequired
        })
      ).isRequired
    })
  )
};

export default MarketPlayground;