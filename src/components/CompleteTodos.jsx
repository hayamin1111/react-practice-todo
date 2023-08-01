import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <h2>完了のToDo</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              {todo}
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
