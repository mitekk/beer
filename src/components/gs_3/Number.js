import States from "./States";

const PlayNumber = (props) => (
  <button
    className="number"
    style={{ backgroundColor: States[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

export default PlayNumber;
