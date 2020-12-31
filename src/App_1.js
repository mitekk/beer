import { useState } from "react";

import Display from "./components/gs_1/display";
import Button from "./components/gs_1/gs_1";

const App = () => {
  const [counter, setCounter] = useState(5);
  const incCounter = (value) => {
    setCounter(counter + value);
  };

  return (
    <>
      <Button onClickFunction={incCounter} increment={1} />
      <Button onClickFunction={incCounter} increment={2} />
      <Button onClickFunction={incCounter} increment={3} />
      <Display message={counter} />
    </>
  );
};

export default App;
