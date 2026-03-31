import React from "react";
import Button from "./Button";

const buttons = [
  { button: "All" },
  { button: "Active" },
  { button: "Completed" },
];

export const AddTask = ({ filterValue, handleTab }) => {
  return (
    <div className="flex gap-2 mb-6">
      {buttons.map((element, key) => (
        <Button
          handleTab={handleTab}
          filter={filterValue}
          key={key}
          button={element.button}
        />
      ))}
    </div>
  );
};
