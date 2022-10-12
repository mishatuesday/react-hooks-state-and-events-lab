import React, { useState } from "react";





function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  const handleCart = () => setCart(!inCart)
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => handleCart()} className="add">{inCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
