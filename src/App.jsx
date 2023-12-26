import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";
import {useState} from "react";
import Header from "./components/Header.jsx";

const INITIAL_INPUT_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
}

function App() {

  const [inputData, setInputData] = useState(INITIAL_INPUT_DATA);

  function handleInputChange(fieldKey, inputValue) {
    setInputData(currentInputData => {
      return {
        ...currentInputData,
        [fieldKey]: inputValue
      }
    });
  }

  console.log("inputData: ", inputData);

  return (
      <>
        <Header/>
        <UserInput inputs={inputData} onInputChange={handleInputChange}/>
        <ResultTable inputs={inputData}/>
      </>
  )
}

export default App
