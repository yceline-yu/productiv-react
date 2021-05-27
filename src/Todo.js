import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TodoApp } -> Todo
 **/
// { id, title, description, priority }
function Todo({ todo }) {
  console.log("todo", todo)
  console.log("todo.title", todo.title)
  // const { id, title, description, priority } = todo
  // console.log("todo.title", todo.todo)

  return (
    <div className="Todo">
      <div><b>{todo.title}</b> <small>(priority: {todo.priority})</small></div>
      <div><small>{todo.description}.</small></div>
    </div>
  );
}

export default Todo;
