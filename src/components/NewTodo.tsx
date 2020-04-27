import * as React from "react";
import { FC, useRef } from "react";

type NewTodoProps ={
    onAddToTodo: (text: string) => void
}

const NewTodo: FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddToTodo(enteredText)
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <label>
        <p>Todo Text</p> <input type="text" ref={textInputRef}></input>
      </label>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
