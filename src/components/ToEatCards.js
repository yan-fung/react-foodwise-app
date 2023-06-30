import React from "react";
import { Button } from "flowbite-react";

const ToEatCards = ({ text, todoId, onRemoveTodo, onIncreaseWastedClick }) => {
  return (
    <div className="flex pb-3 items-center justify-center">
      <span className="text-xl">{text}</span>
      <div className="pr-3 pl-3">
        <Button
          className="bg-rose-400 hover:bg-rose-500"
          type="button"
          onClick={() => onIncreaseWastedClick(todoId)}
        >
          Wasted
        </Button>
      </div>

      <Button type="button" onClick={() => onRemoveTodo(todoId)}>
        Consumed
      </Button>
    </div>
  );
};

export default ToEatCards;
