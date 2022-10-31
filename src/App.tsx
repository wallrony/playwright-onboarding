import { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </main>
  );
}

export default App;
