import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setDarkMode] = useState(false)
  const appClass = darkMode ? "App dark" : "App light"

const changeMode = () => setDarkMode(!darkMode)

  return (
    <div className={appClass}>
      <Header changeMode={changeMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
