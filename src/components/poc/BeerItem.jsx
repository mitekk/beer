import { Tag } from "antd";

const BeerItem = ({ info: { color = "black", name = "" } }) => (
  <Tag
    style={{ margin: "10px", padding: "20px", cursor: "pointer" }}
    color={color}
  >
    {name}
  </Tag>
);

export default BeerItem;
