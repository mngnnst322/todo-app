import React from "react";

export const Input = ({ setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      onChange={handleChange}
      className="rounded-md h-[40px] border w-70 px-4 py-2 box-border"
      placeholder="Add a new task..."
    />
  );
};
