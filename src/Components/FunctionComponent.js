import { useState } from "react";

function FunctionComponent() {
  const [count, setCount] = useState(0);

  function changeCount() {
    if (count >= 50) {
      alert("You have reached your limit!!! Try later.");
    } else {
      setCount(count + 1);
    }
  }
  return (
    <div>
      <h1>At FunctionComponent</h1>
      <p>Count: {count}</p>
      <button onClick={changeCount}>Decrement</button>
    </div>
  );
}

export default FunctionComponent;
