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

  const handleInitialInvestmentChange = (event) => {
    setInitialInvestment(event.target.value);
  };

  const handleAnnualInvestmentChange = (event) => {
    setAnnualInvestment(event.target.value);
  };

  const handleReturnsChange = (event) => {
    setReturns(event.target.value);
  };

  //how can  i pass these values to the results component?

  return (
    <div id="user-input">
      <form>
        <label htmlFor="initial-investment">Initial Investment</label>
        <input
          type="number"
          id="initial-investment"
          onChange={handleInitialInvestmentChange}
        />
        <label htmlFor="annual-investment">Annual Investment</label>
        <input
          type="number"
          id="annual-investment"
          onChange={handleAnnualInvestmentChange}
        />
        <label htmlFor="returns">Expected Return</label>
        <input type="number" id="returns" onChange={handleReturnsChange} />
        <label htmlFor="duration">Duration</label>
        <input type="number" id="duration" onChange={handleDurationChange} />
      </form>
    </div>
  );
}
