import React, { useState } from "react";
import ItemPackingList from "./ItemPackinList";

const PackingList = ({
  list,
  removeItemFromList,
  handleCheckbox,
  selectValue,
  removeList,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let newList;
  if (sortBy === "input") newList = list;
  if (sortBy === "description") {
    newList = list.slice().sort((a, b) => a.title.localeCompare(b.description));
  }
  if (sortBy === "completed") {
    newList = list.slice().sort((a, b) => {
      return Number(a.completed) - Number(b.completed);
    });
  }

  return (
    <div className="list">
      <ul>
        {!list
          ? null
          : newList.map((elem) => (
              <ItemPackingList
                key={elem.id}
                elem={elem}
                selectValue={selectValue}
                removeItemFromList={removeItemFromList}
                handleCheckbox={handleCheckbox}
              />
            ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by name</option>
          <option value="description">Sort by description</option>
          <option value="completed">Sort by status</option>
        </select>
        <button
          onClick={() => {
            removeList();
          }}
        >
          Remove list
        </button>
      </div>
    </div>
  );
};

export default PackingList;
