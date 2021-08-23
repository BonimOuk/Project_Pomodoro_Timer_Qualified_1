import React from "react";

function Subtitle({ aria, session, focusDuration, breakDuration, fmtMSS }) {
  return (
    <div>
      {session && (
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session && session.label} for{" "}
              {(
                "0" +
                (session.label.toLowerCase().indexOf("ocus") > 0
                  ? focusDuration
                  : breakDuration)
              ).substr(-2)}
              :00 minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {session && fmtMSS(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
      )}
      {session && (
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={aria}
                style={{ width: `${aria}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Subtitle;
