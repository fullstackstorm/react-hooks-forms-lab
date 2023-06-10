import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [formData, setFormData] = useState({
    search: "",
    filter: "All",
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const itemsToDisplay = items.filter((item) => {
    if (formData.filter === "All") {
      // When "All" category is selected, check if the item matches the search query
      return item.name.toLowerCase().includes(formData.search.toLowerCase());
    } else {
      // When a specific category is selected, check if the item matches both the category and search query
      return (
        item.category === formData.filter &&
        item.name.toLowerCase().includes(formData.search.toLowerCase())
      );
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onFormChange={handleFormChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
