"use client";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";
const buttons = [
  { button: "All", isActive: true },
  { button: "Acive", isActive: false },
  { button: "Completed", isActive: false },
];
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task;
    });
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    setTasks([
      { taskName: inputValue, isCompleted: true, Id: Math.random },
      ...tasks,
    ]);
  };

  return (
    <div className="justify-center items-center bg-white  rounded-md px-4 py-6 gap-x-2">
      <h1 className=" text-xl font-semibold w-full text-center h-5">
        {" "}
        To-Do list{" "}
      </h1>
      <div className="flex gap-1.5 py-5">
        <Input setValue={setInputValue} />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 px-4 py-2 rounded-md text-white"
        >
          Add
        </button>
      </div>
      <div className=" w-full gap-1.5 flex ">
        {buttons.map((element, key) => {
          return (
            <Button
              key={key}
              button={element.button}
              isActive={element.isActive}
            />
          );
        })}
      </div>
      <div className=" w-full pt-8 pb-10 flex items-center flex-col justify-center text-[14px]">
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one above!</p>
        ) : (
          tasks.map((task, index) => {
            return (
              <div>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleComplete(task.id);
                  }}
                  checked={tasks.isccompleted}
                />
                {task.taskName}
                <button> Delete</button>
              </div>
            );
          })
        )}
      </div>
      <div className="gap-1 flex justify-center text-[12px]">
        <p>Powered by</p>
        <p className="text-blue-500">Pinecone academy</p>
      </div>
    </div>
  );
}
