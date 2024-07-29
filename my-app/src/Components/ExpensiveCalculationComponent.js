import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent({ num }) {
  const expensiveCalculation = (n) => {
    console.log('Performing expensive calculation...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += n;
    }
    return result;
  };

  const computedValue = useMemo(() => expensiveCalculation(num), [num]);

  return (
    <div>
      <h2>Computed Value: {computedValue}</h2>
    </div>
  );
}

export default ExpensiveCalculationComponent;
