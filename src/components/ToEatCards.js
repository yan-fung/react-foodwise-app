import React from "react";

const ToEatCards = ({ text, todoId, onRemoveTodo, onIncreaseWastedClick }) => {
  return (
    <div className="toeat">
      {text}
      <button type="button" onClick={() => onIncreaseWastedClick(todoId)}>
        Wasted
      </button>
      <button type="button" onClick={() => onRemoveTodo(todoId)}>
        Delete
      </button>
    </div>
  );
};

export default ToEatCards;
