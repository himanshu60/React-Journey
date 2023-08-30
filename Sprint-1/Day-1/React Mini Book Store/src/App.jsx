import React, { useState } from "react";
//import BookCard from "./components/BookCard";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {
  const [value, setValue] = useState(true);
  const handle = () => {
    value ? setValue(false) : setValue(true);
  };
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={handle}>
        {value ? "Show NonFictional Books" : "show Fictional Books"}
      </button>

      <div data-testid="conditional-container">
        {value ? <Fiction /> : <NonFiction />}
      </div>
    </div>
  );
}

export default App;
