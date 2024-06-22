import { useState } from "react";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleNewTask = () => {
    if (newTask.trim() === "") return;
    setTodoList((previousTasks) => [...previousTasks, newTask]);
    setNewTask("");
  };

  const handleDeleteTodo = (index: number) => {
    setTodoList((tasks) => tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div className="center">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New todo..."
          />
      </div>
       <button onClick={handleNewTask} className="todo">Add Todo</button>
      <TodoList listTodo={todoList} deleteTodo={handleDeleteTodo}></TodoList>
    </div>
  );
};
