import React from "react";

const Button = ({ isAcive, button }) => {
  return (
    <>
      {isAcive ? (
        <button className="bg-blue-500 px-3 py-1 rounded-md text-white">
          {button}
        </button>
      ) : (
        <button className="bg-gray-200 px-3 py-1 rounded-md">{button}</button>
      )}
    </>
  );
};

export default Button;
