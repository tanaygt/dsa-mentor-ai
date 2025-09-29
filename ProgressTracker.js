import React from 'react';

const ProgressTracker = () => {
  const progress = {
    solved: 2,
    total: 6,
    streak: 1,
    successRate: '33%'
  };

  return (
    <div className="progress-tracker">
      <h2>Your Progress</h2>
      <div className="stats">
        <p>Problems Solved: {progress.solved} / {progress.total}</p>
        <p>Success Rate: {progress.successRate}</p>
        <p>Current Streak: {progress.streak} days</p>
      </div>
    </div>
  );
};

export default ProgressTracker;