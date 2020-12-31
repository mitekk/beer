import utils from "./utils";

const StarBoard = (props) =>
  utils
    .range(1, props.count)
    .map((starId) => <div key={starId} className="star" />);

export default StarBoard;
