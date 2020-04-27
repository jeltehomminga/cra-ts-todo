import React, { FC, useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addToTodo = (text: string) =>
    setTodos((todos) => [...todos, { id: "t" + todos.length, text }]);

  const removeTodo = (id: string) => {
    setTodos(todos => todos.filter( todo => todo.id !== id ))
  }

  return (
    <div className="App">
      <NewTodo onAddToTodo={addToTodo} />
      <TodoList items={todos} removeTodo={removeTodo}/>
    </div>
  );
};

export default App;
