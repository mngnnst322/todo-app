import React from "react";

const Task = ({ task, handleComplete, handleDelete }) => {
  console.log("task", task);

  return (
    <div
      key={task.id}
      className="flex w-full justify-between items-center bg-gray-50 rounded-lg p-4 border border-gray-100 group hover:shadow-sm transition-all"
    >
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => handleComplete(task.id)}
          className="w-5 h-5 cursor-pointer accent-blue-500"
        />
        <p
          className={`text-[15px] ${task.isCompleted ? "line-through text-violet-400" : "text-gray-700"}`}
        >
          {task.taskName}
        </p>
      </div>
      <button
        onClick={() => handleDelete(task.id)}
        className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
