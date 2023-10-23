import React, { useState } from "react";
import Logo from "./components/logo/Logo";
import Stats from "./components/stats/Stats";
import PackingList from "./components/packing-list/PackingList";
import Form from "./components/form/Form";

function App() {
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState(1);
  const [list, setList] = useState([]);

  let numberOfItems = list.length;
  let numberOfPacked = list.filter((elem) => elem.completed).length;

  const addItemToList = () => {
    if (!value.trim()) {
      setValue("");
      return;
    }
    const item = {
      id: Date.now(),
      title: value,
      quantity: selectValue,
      completed: false,
    };
    setList([...list, item]);
    setValue("");
  };

  const removeList = () => {
    setList([]);
  };

  const removeItemFromList = (id) => {
    setList(list.filter((elem) => elem.id !== id));
  };

  const handleCheckbox = (id) => {
    setList(
      list.map((elem) => {
        if (elem.id === id) {
          return { ...elem, completed: !elem.completed };
        }
        return elem;
      })
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form
        value={value}
        setValue={setValue}
        addItemToList={addItemToList}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />
      <PackingList
        list={list}
        selectValue={selectValue}
        removeItemFromList={removeItemFromList}
        handleCheckbox={handleCheckbox}
        removeList={removeList}
      />
      <Stats numberOfItems={numberOfItems} numberOfPacked={numberOfPacked} />
    </div>
  );
}

export default App;
