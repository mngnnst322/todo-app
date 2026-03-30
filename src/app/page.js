"use client";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { TaskCount } from "@/components/TaskCount";
import { useState } from "react";

const buttons = [
  { button: "All" },
  { button: "Active" },
  { button: "Completed" },
];

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  // const [filteredTasks, setFilteredTasks] = useState("[]");
  const handleTab = (active) => {
    setFilterValue(active);
  };

  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  };
  console.log(tasks);

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Math.random().toString(),
      taskName: inputValue,
      isCompleted: false,
    };

    setTasks([newTask, ...tasks]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    if (window.confirm("are sure ")) {
      setTasks(tasks.filter((task) => task.id !== id));
    } else {
      return;
    }
  };
  // change filter or handle filter
  const filteredTasks = tasks.filter((task) => {
    if (filterValue === "Active") return !task.isCompleted;
    if (filterValue === "Completed") return task.isCompleted;
    return true;
  });
  const completedTasksCount = tasks.filter((task) => task.isCompleted === true);

  return (
    <div className="flex flex-col bg-white rounded-md px-6 py-8 w-[450px] mx-auto shadow-lg mt-10 border border-gray-100">
      <h1 className="text-2xl font-bold w-full text-center mb-6 text-gray-800">
        To-Do List
      </h1>

      <div className="flex gap-2 mb-6">
        <Input value={inputValue} setValue={setInputValue} />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-white font-medium transition-all"
        >
          Add
        </button>
      </div>

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

      <div className="flex flex-col gap-3 min-h-[150px]">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No tasks yet.</p>
        ) : (
          filteredTasks.map((task) => (
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
                  className={`text-[15px] ${task.isCompleted ? "line-through text-gray-400" : "text-gray-700"}`}
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
          ))
        )}
        <TaskCount
          totalCount={tasks.length}
          completedCount={completedTasksCount.length}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>

      {/* Powered by section outside the loop */}
      <div className="mt-10 pt-4 border-t border-gray-100 flex gap-1 justify-center text-[12px] text-gray-400">
        <p>Powered by</p>
        <p className="text-blue-500 font-bold italic">Pinecone Academy</p>
      </div>
    </div>
  );
}
