import React, { useState } from 'react';

const ProblemSolver = () => {
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');

  const handleSolve = () => {
    // Mock AI solution - replace with your actual logic
    const mockSolution = {
      explanation: "This is a step-by-step explanation...",
      code: {
        java: "// Java solution here",
        python: "# Python solution here", 
        cpp: "// C++ solution here"
      }
    };
    setSolution(mockSolution);
  };

  return (
    <div className="problem-solver">
      <h2>DSA Problem Solver</h2>
      <textarea 
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        placeholder="Paste your DSA problem here..."
      />
      <button onClick={handleSolve}>Generate Solution</button>
      {solution && (
        <div className="solution">
          <h3>Solution:</h3>
          <p>{solution.explanation}</p>
          <pre>{solution.code.java}</pre>
        </div>
      )}
    </div>
  );
};

export default ProblemSolver;