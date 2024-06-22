type Props = {
  task: string;
  deleteTodo: () => void;
};

export const Task = ({ task, deleteTodo }: Props) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};
