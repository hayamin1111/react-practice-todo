import React from "react";

const style = {
  background: "#ebebeb",
  width: "400px",
  marginBottom: "10px",
  padding: "10px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="ToDoを入力"
        value={todoText}
        // inputで変更があったらstateも変更するにはonChangeが必要
        onChange={onChange}
      ></input>
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
