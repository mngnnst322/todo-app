import React from "react";

export const Task = ({ isCompleted, taskName, handcheck }) => {
  return (
    <div className=" flex w-full justify-between bg-slate-100 rounded-md p-4 items-center">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={isCompleted}
          className="size-8"
          onClick={handcheck}
        />
        <p className="text-xl">{taskName}</p>
      </div>

      <p className="text-red-600 font-semibold bg-red-200 p-2 rounded-md flex justify-center items-center">
        Delete
      </p>
    </div>
  );
};
