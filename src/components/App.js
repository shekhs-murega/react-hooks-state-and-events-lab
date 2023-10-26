import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 2: Create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 4: Conditionally set the className based on isDarkMode
  const appClass = isDarkMode ? "App dark" : "App light";

  // Step 3: Create an event handler to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 3: Add an event handler to the button */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
