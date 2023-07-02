import React from "react";
import { Button } from "flowbite-react";

const ToEatCards = ({
  text,
  todoId,
  expirydate,
  onRemoveTodo,
  onIncreaseWastedClick,
}) => {
  // Define the expiry date
  const expiryDate = new Date(expirydate);

  // Get today's date
  const today = new Date();

  // Calculate the time difference in milliseconds
  const timeDiff = expiryDate.getTime() - today.getTime();

  // Convert the time difference to days
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <>
      <>
        <div className="pb-3 items-center justify-left">
          <div className="grid grid-cols-4">
            <div className="text-md">{text}</div>
            {typeof daysRemaining === "number" && !isNaN(daysRemaining) ? (
              <>
                <span className="text-center">{daysRemaining}</span>
                <div className="pr-3 pl-3">
                  <Button
                    className="bg-rose-400 hover:bg-rose-500 w-16"
                    type="button"
                    onClick={() => onIncreaseWastedClick(todoId)}
                  >
                    Wasted
                  </Button>
                </div>
                <Button
                  className="w-20"
                  type="button"
                  onClick={() => onRemoveTodo(todoId)}
                >
                  Consumed
                </Button>
              </>
            ) : null}
          </div>
        </div>
      </>
    </>
  );
};

export default ToEatCards;
