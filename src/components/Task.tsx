import { FC } from "react";
import { ImBin } from "react-icons/im";
import { todoInterface } from "../Interfaces";

interface Props {
  task: todoInterface;
  completeTask(taskName: string): void;
}

const Task: FC<Props> = ({ task, completeTask }) => {
  return (
    <div className="flex items-center justify-evenly bg-gray-500 text-2xl mb-5 py-2 rounded-lg">
      <div className="w-[80%] text-center">
        <h4>{task.task}</h4>
      </div>
      <div className="w-[20%]">
        <div
          className="w-10 h-10 transition-all duration-150 cursor-pointer rounded-lg p-2 bg-red-600 hover:bg-gray-200 hover:text-red-600"
          onClick={() => completeTask(task.task)}
        >
          <ImBin />
        </div>
      </div>
    </div>
  );
};

export default Task;
