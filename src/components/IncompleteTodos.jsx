import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <h2>未完了のToDo</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            // key:差分のみ反映するため、mapなど使用時に何個目の要素かを示すために記述
            <li key={todo}>
              {todo}
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 関数に引数を渡す際はアロー関数を使用する（そのままだとすぐに実行されてしまう） */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
