import React, { useState } from "react";
import { H1 } from "./customHooks";

export default function Items() {

  const [styles, setStyles] = useState({
    display: false,
  });
  const fruitsArray = [
    {
      id: 1,
      fruit: "orange",
    },
    {
      id: 2,
      fruit: "cashew",
    },
    {
      id: 3,
      fruit: "lemon",
    },
    {
      id: 4,
      fruit: "guava",
    },
    {
      id: 5,
      fruit: "walnut",
    },
    {
      id: 6,
      fruit: "grape",
    },
  ];
  const fruits = fruitsArray.map((fruitItem) => {
    let { fruit } = fruitItem;
    return (
      <ol key={fruitItem.id}>
        <li className="list">{fruit}</li>
      </ol>
    );
  });
  const [addItem, setAddItem] = useState("");
  function handleItemChange(e) {
    let ItemValue = e.target.value;
    setAddItem(ItemValue);
  }
  function handleItemSubmit(e) {
    e.preventDefault();
    fruitsArray.push(addItem);

    document.getElementById("itemsList").innerText = fruitsArray;
  }

  //Delete
  // function handleDelete(id){
  //     fruitsArray.filter((item) => item.id !== id)
  // }
  function handleStyles() {
    const allWithClass = document.getElementsByClassName("example");
    console.log(allWithClass);
    setStyles(prev => !prev)
  }
console.log(styles)
  return (
    <div className="items">
      <H1 className="items-titles">List of fruit</H1>
      <div className="listDiv">
        <div className="itemsList" id="itemsList">
          {fruits}
        </div>
      </div>

      <H1 className="items-titles">Add Item</H1>
      <div className="itemDiv">
        <form onSubmit={handleItemSubmit}>
          <input
            type="text"
            placeholder="fruit to add"
            className="fruitTo-add"
            onChange={handleItemChange}
          />
          <button className="itemAdd-btn">Add</button>
        </form>
      </div>
      <H1 className="items-titles">Delete Items</H1>
      <div className="itemDiv">
        <input
          type="text"
          placeholder="fruit to delete"
          className="fruitTo-delete"
        />
        <button className="itemDelete-btn">Delete</button>
      </div>

      <div style={{color : styles? 'red': '', fontSize: styles? '24px': '', transition: 'all 5s', display: styles ? 'none': 'block'}}>
        <h2 className="example">Alice</h2>
        <h2 className="example">Bob</h2>
        <h2 className="example">Carl</h2>
      </div>
      <button onClick={handleStyles}>Styles</button>
    </div>
  );
}
