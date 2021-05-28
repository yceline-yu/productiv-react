import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  console.log("EditableTodoList todos", todos)

  return (
    <div>
      <ul>
        {todos.map(todo =>
          <li key={todo.id}>
            <EditableTodo
              todo={todo}
              update={update}
              remove={remove} />
          </li>)}
      </ul>
    </div>
  );
}

export default EditableTodoList;
