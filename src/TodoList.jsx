import React from "react";
import TodoItem from "./TodoItem";
import "../styles/todoListStyles.css";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <ul>
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
