import { Wrapper, ButtonsContainer, Title } from "./Header.layout.styled";
import { Button, Row, Col, Layout } from "antd";
import { ReloadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { reset } from "../store/actions";
import { connect } from "react-redux";
import { getHeaderActionState } from "../store/selectors";
import { Link } from "react-router-dom";

const { Header } = Layout;

const mapDispatchToProps = { reset };
const mapStateToProps = (state) => ({
  showReload: getHeaderActionState(state),
});

const StyledHeader = ({ showReload, reset }) => {
  return (
    <Header className="header">
      <Wrapper>
        <Row>
          <Col offset={8} span={8}>
            {showReload ? (
              <Title>Choose your Beer</Title>
            ) : (
              <Title>Yay, you are awsome!</Title>
            )}
          </Col>
          <Col span={8}>
            <ButtonsContainer>
              {showReload ? (
                <Button
                  shape="circle"
                  icon={<ReloadOutlined onClick={reset} />}
                />
              ) : (
                <Link to="/">
                  <Button shape="circle" icon={<ArrowLeftOutlined />} />
                </Link>
              )}
            </ButtonsContainer>
          </Col>
        </Row>
      </Wrapper>
    </Header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StyledHeader);
