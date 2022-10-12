import React, { useState } from "react";
import Item from "./Item";
import Filter from './Filter'

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All")
  const filterCategory = (e) => {
    setCategory(e.target.value)
    
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
      <Filter filterCategory={filterCategory}/>
      </div>
      <ul className="Items">
        {items.map((item) => (
          (item.category === selectedCategory || selectedCategory === "All") ? <Item key={item.id} name={item.name} category={item.category} /> : null
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
