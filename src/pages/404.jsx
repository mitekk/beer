import { NotFoundContainer, Center } from "./404.styled";
import { AlertOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Col>
        <Center>
          <Row>
            <AlertOutlined />
          </Row>
        </Center>
        <Row>
          <div>You are a hacker!</div>
        </Row>
      </Col>
    </NotFoundContainer>
  );
};

export default NotFound;
