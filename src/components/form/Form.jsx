import React from "react";

const Form = ({
  value,
  setValue,
  addItemToList,
  setSelectValue,
  selectValue,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addItemToList();
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((elem) => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={value}
        placeholder="Item..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button>add</button>
    </form>
  );
};

export default Form;
