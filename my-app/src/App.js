import { useState } from "react";
import ExpensiveCalculationComponent from "./Components/ExpensiveCalculationComponent";


function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h1>useMemo Example</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <button onClick={() => setNumber(number + 1)}>Increment Number: {number}</button>
      <ExpensiveCalculationComponent num={number} />
    </div>
  );
}

export default App;