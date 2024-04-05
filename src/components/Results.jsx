export default function Results({
  initialInvestment,
  annualInvestment,
  returns,
  duration,
}) {
  let data = {
    initialInvestment: initialInvestment,
    annualInvestment: annualInvestment,
    expectedReturn: returns,
    duration: duration,
  };

  let lineResults = [];

  if (duration > 0) {
    lineResults = Array.from({ length: duration }, (_, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>$2100.00</td>
        <td>$1000.00</td>
        <td>$210.00</td>
        <td>$3310.00</td>
      </tr>
    ));
  }

  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>{lineResults}</tbody>
      </table>
    </div>
  );
}
