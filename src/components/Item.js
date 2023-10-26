import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create a state variable to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Step 2: Create an event handler to toggle the item in and out of the cart
  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 3: Conditionally set the button text based on inCart state */}
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
