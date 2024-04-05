import React from "react";

export default function UserInput({
  setInitialInvestment,
  setAnnualInvestment,
  setReturns,
  setDuration,
}) {
  // Event handlers
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  //how can  i pass these values to the results component?

  return (
    <div id="user-input">
      <form>
        <label htmlFor="initial-investment">Initial Investment</label>
        <input type="number" id="initial-investment" />
        <label htmlFor="annual-investment">Annual Investment</label>
        <input type="number" id="annual-investment" />
        <label htmlFor="returns">Expected Return</label>
        <input type="number" id="returns" />
        <label htmlFor="duration">Duration</label>
        <input type="number" id="duration" onChange={handleDurationChange} />
      </form>
    </div>
  );
}
