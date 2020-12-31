import { Layout } from "antd";
import StyledContent from "./Content.layout";
import StyledHeader from "./Header.layout";
import StyledSider from "./Sider.layout";

const BoardLayout = ({ children }) => (
  <Layout>
    <StyledHeader></StyledHeader>
    <Layout>
      <StyledSider></StyledSider>
      <StyledContent>{children}</StyledContent>
    </Layout>
  </Layout>
);

export default BoardLayout;
