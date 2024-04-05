export default function UserInput() {
  return (
    <div id="user-input">
      <form>
        <label htmlFor="initial-investment">Initial Investment</label>
        <input type="number" id="initial-investment" />
        <label htmlFor="annual-investment">Annual Investment</label>
        <input type="number" id="monthly-investment" />
        <label htmlFor="returns">Expected Return</label>
        <input type="number" id="years" />
        <label htmlFor="interest-rate">Duration</label>
        <input type="number" id="interest-rate" />
      </form>
    </div>
  );
}
