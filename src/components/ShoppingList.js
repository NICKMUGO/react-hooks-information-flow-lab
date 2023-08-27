import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((Items) => {
    if (selectedCategory === "All"){ return true;
     } else{
    return Items.category === selectedCategory;
     }
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={onCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((Items) => (
          <Item key={Items.id} name={Items.name} category={Items.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
