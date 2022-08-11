import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import Task from "./components/Task";
import { todoInterface } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<todoInterface[]>([]);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (task == "") {
      alert("Task can't be empty.");
    } else {
      if (todos.some((todo) => todo.task === task)) {
        alert("This task is already declared");
      } else {
        const newTask: todoInterface = { task: task };
        setTodos([...todos, newTask]);

        setTask("");
      }
    }
  };

  const completeTask = (taskName: string): void => {
    setTodos(
      todos.filter((todo) => {
        return todo.task !== taskName;
      })
    );
  };

  return (
    <div className="container mx-auto">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex justify-evenly w-full mt-5"
        >
          <input
            type="text"
            className="bg-gray-500 rounded-xl text-xl text-gray-300 placeholder:text-gray-300 font-semibold placeholder:tracking-wide focus-outline-none focus:border-none focus:ring-4 focus:ring-black"
            placeholder="New Task"
            value={task}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setTask(e.target.value)
            }
          />
          <button className="transition-all duration-200 hover:scale-110 text-gray-100 font-bold text-xl bg-gradient-to-r from-indigo-600 to-indigo-800 py-5 px-10 rounded-xl">
            Add Task
          </button>
        </form>
        <div className="mt-10 text-white w-full">
          {todos.map((todo: todoInterface, index: number) => (
            <Task key={index} task={todo} completeTask={completeTask} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
