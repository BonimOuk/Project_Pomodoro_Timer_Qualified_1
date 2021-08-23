import React from "react";

function BreakTime({ breakDuration, increaseBreakTime, decreaseBreakTime }) {
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-break">
        Break Duration: {("0" + breakDuration).substr(-2)}:00
      </span>
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
          onClick={decreaseBreakTime}
        >
          <span className="oi oi-minus" />
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
          onClick={increaseBreakTime}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}

export default BreakTime;
