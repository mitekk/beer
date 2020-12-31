import { Fragment, useEffect, useState } from "react";
import "./App_3.css";
import utils from "./components/gs_3/utils";
import PlayNumber from "./components/gs_3/Number";
import StarBoard from "./components/gs_3/StarBoard";
import States from "./components/gs_3/States";

const App = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    console.log("Rendered");
  });

  const numberStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return "used";
    }
    if (candidates.includes(number))
      return utils.sum(candidates) > stars ? "wrong" : "candidate";

    return "available";
  };

  const onNumberClicked = (number, status) => {
    if (status === "used") return;

    const newCandidates =
      status === "available"
        ? candidates.concat(number)
        : candidates.filter((candidate) => candidate !== number);

    if (utils.sum(newCandidates) !== stars) {
      setCandidates(newCandidates);
    } else {
      const newAvailableNumbers = availableNumbers.filter(
        (number) => !newCandidates.includes(number)
      );
      setStars(utils.randomSumIn(newAvailableNumbers, 9));
      setAvailableNumbers(newAvailableNumbers);
      setCandidates([]);
    }

    console.log("number", number);
    console.log("status", status);
  };

  return (
    <Fragment>
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            <StarBoard count={stars} />
          </div>
          <div className="right">
            {utils.range(1, 9).map((number) => (
              <PlayNumber
                key={number}
                status={numberStatus(number)}
                number={number}
                onClick={onNumberClicked}
              />
            ))}
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    </Fragment>
  );
};

export default App;
