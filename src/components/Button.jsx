import React from "react";

const Button = ({ handleTab, button, filter }) => {
  return (
    <>
      {filter === button ? (
        <button
          onClick={() => handleTab(button)}
          className="bg-blue-500 px-3 py-1 rounded-md text-white cursor-pointer"
        >
          {button}
        </button>
      ) : (
        <button
          onClick={() => handleTab(button)}
          className="bg-gray-200 px-3 py-1 rounded-md cursor-pointer"
        >
          {button}
        </button>
      )}
    </>
  );
};

export default Button;
