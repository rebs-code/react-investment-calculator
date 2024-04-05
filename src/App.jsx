import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [returns, setReturns] = useState(0);
  const [duration, setDuration] = useState(0);
  return (
    <>
      <Header />
      <main>
        <UserInput
          setInitialInvestment={setInitialInvestment}
          setAnnualInvestment={setAnnualInvestment}
          setReturns={setReturns}
          setDuration={setDuration}
        />
        <Results
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
          returns={returns}
          duration={duration}
        />
      </main>
    </>
  );
}

export default App;
