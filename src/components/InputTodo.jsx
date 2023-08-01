import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input
        placeholder="ToDoを入力"
        value={todoText}
        // inputで変更があったらstateも変更するにはonChangeが必要
        onChange={onChange}
      ></input>
      <button onClick={onClick}>追加</button>
    </div>
  );
};
