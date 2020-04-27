import React, { FC } from "react";


interface TodoListProps {
    items: {id: string; text: string;}[];
    removeTodo: (id: string) => void
}

const TodoList: FC<TodoListProps> = ({items, removeTodo}) => {
  return (
    <ul>
      {items.map(({id, text}) => (
        <li key={id}><span>{text}</span><button onClick={()=> removeTodo(id)}>🗑</button></li>
      ))}
    </ul>
  );
};

export default TodoList;
