import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app-shell">
      <section className="counter-panel" aria-labelledby="counter-title">
        <p className="eyebrow">React Counter</p>
        <h1 id="counter-title">Count the number</h1>

        <div className="count-display" aria-live="polite">
          {count}
        </div>

        <button className="primary-button" onClick={() => setCount(count + 1)}>
          Press to Count
        </button>

        <button className="reset-button" onClick={() => setCount(0)}>
          Reset
        </button>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
