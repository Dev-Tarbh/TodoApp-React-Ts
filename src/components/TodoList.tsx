import { Task } from "./Task";

type Props = {
  listTodo: string[];
  deleteTodo: (index: number) => void;
};

export const TodoList = ({ listTodo, deleteTodo }: Props) => {
  return (
    <div className="taskList">
      {listTodo.map((task, index) => (
        <Task key={index} task={task} deleteTodo={() => deleteTodo(index)}></Task>
      ))}
    </div>
  );
};
