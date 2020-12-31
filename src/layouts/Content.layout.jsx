import { Layout } from "antd";
import { Wrapper } from "./Content.layout.styled";

const { Content } = Layout;
const StyledContent = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default StyledContent;
