"use client";

import { AddTask } from "@/components/AddTask";

import { Input } from "@/components/Input";
import Task from "@/components/Task";
import { TaskCount } from "@/components/TaskCount";
import { useState } from "react";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("All");
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

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    console.log("input value", inputValue);

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
      <AddTask handleTab={handleTab} filterValue={filterValue} />
      <div className="flex flex-col gap-3 min-h-[150px]">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">No tasks yet.</p>
        ) : (
          filteredTasks.map((task) => (
            <Task
              task={task}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          ))
        )}
        <TaskCount
          totalCount={tasks.length}
          completedCount={completedTasksCount.length}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
      <Footer />
    </div>
  );
}
