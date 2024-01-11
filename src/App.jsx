import "./App.css";
import Display from "./assets/components/Display";
import Button from "./assets/components/Button";
import { useState } from "react";

function App() {
  const [currentvalue, displayedvalue] = useState(" ");
  const onClickButton = (icon) => {
    if (icon === "C") {
      displayedvalue(" ");
    } else if (icon === "=") {
      const result = eval(currentvalue);
      displayedvalue(result);
    } else {
      const newValue = currentvalue + icon;
      displayedvalue(newValue);
    }
  };
  return (
    <center id="main-container">
      <h1>Calculator</h1>
      <Display currentvalue={currentvalue}></Display>
      <Button onClickButton={onClickButton}></Button>
    </center>
  );
}

export default App;
