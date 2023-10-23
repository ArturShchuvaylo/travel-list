import React from "react";

const ItemPackingList = ({ elem, removeItemFromList, handleCheckbox }) => {
  return (
    <li>
      <input
        type={"checkbox"}
        checked={elem.completed}
        onChange={() => {
          handleCheckbox(elem.id);
        }}
      />
      <span style={elem.completed ? { textDecoration: "line-through" } : null}>
        {elem.quantity} / {elem.title}
      </span>
      <button
        onClick={() => {
          removeItemFromList(elem.id);
        }}
      >
        ❌
      </button>
    </li>
  );
};

export default ItemPackingList;
