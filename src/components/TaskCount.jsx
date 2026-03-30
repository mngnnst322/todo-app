import React from "react";

export const TaskCount = ({ totalCount, completedCount, tasks, setTasks }) => {
  const deleteCompleted = () => {
    const activeTasks = tasks.filter((task) => task.isCompleted === false);
    setTasks(activeTasks);
  };
  return (
    <div className="flex justify-between pt-4 border-t border-t-[#E4e4e7]">
      <div className="text-[#6B7280] text-[14px] font-normal">
        {completedCount} of {totalCount} tasks completed
      </div>
      <div
        onClick={deleteCompleted}
        className="text-[#EF4444] text-[14px] font-normal cursor-pointer"
      >
        Clear completed
      </div>
    </div>
  );
};
