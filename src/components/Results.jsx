export default function Results() {
  //table to show results
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
        <tbody>
          <tr>
            <td>1</td>
            <td>$1000.00</td>
            <td>$1000.00</td>
            <td>$100.00</td>
            <td>$2100.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>$2100.00</td>
            <td>$1000.00</td>
            <td>$210.00</td>
            <td>$3310.00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>$3310.00</td>
            <td>$1000.00</td>
            <td>$331.00</td>
            <td>$4641.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
