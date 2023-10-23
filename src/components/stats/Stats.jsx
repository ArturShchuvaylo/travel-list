import React from "react";

const Stats = ({ numberOfPacked, numberOfItems }) => {
  let percentege = Math.round((numberOfPacked / numberOfItems) * 100);
  return (
    <footer className="stats">
      {!numberOfItems ? (
        "Add anything to your list"
      ) : (
        <em>{`You have ${numberOfItems} items on your list, and you already packed ${numberOfPacked}(${percentege}%)`}</em>
      )}
    </footer>
  );
};

export default Stats;
