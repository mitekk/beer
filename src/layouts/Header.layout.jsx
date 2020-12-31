import { Wrapper, ButtonsContainer, Title } from "./Header.layout.styled";
import { Button, Row, Col, Layout } from "antd";
import { ReloadOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { reset, closeSider } from "../store/actions";
import { connect, useSelector, useDispatch } from "react-redux";
import { getHeaderActionState } from "../store/selectors";
import { Link } from "react-router-dom";

const { Header } = Layout;

const mapDispatchToProps = { reset, closeSider };
const mapStateToProps = (state) => ({
  showReload: getHeaderActionState(state),
});

const StyledHeader = ({ showReload, reset, closeSider }) => {
  // const isReload = useSelector(getHeaderActionState);
  // const dispatch = useDispatch();
  // dispatch(reset)

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
                  icon={<ReloadOutlined onClick={() => reset} />}
                />
              ) : (
                <Link to="/" onClick={closeSider}>
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
