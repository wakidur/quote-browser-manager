import React from "react";

const SpinnerComponent = (props) => {
  return (
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">{props.message}</span>
    </div>
  );
};

SpinnerComponent.defaultProps = {
  message: "Loading...",
};

export default SpinnerComponent;
