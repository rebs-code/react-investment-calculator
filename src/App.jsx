import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 10,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <main>
        <UserInput onChange={handleChange} userInput={userInput} />
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero</p>
        )}
        {inputIsValid && <Results input={userInput} />}
      </main>
    </>
  );
}

export default App;
