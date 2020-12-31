import { connect } from "react-redux";
import BoardLayout from "../layouts/Board.layout";
import { getBeerNameById } from "../store/selectors";
import { Button, Row, Col } from "antd";
import {
  toggleSider,
  setSelectedBeer,
  changeHeaderButtonAction,
} from "../store/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const mapStateToProps = (state, props) => ({
  beerName: getBeerNameById(state, props.match.params.id),
});

const mapDispatchToProps = {
  toggleSider,
  setSelectedBeer,
  changeHeaderButtonAction,
};

const styleCenter = { display: "flex", justifyContent: "center" };
const Beer = ({
  setSelectedBeer,
  toggleSider,
  beerName,
  changeHeaderButtonAction,
}) => {
  useEffect(() => {
    changeHeaderButtonAction(false);
  }, [changeHeaderButtonAction]);

  const { id: beerId } = useParams();

  return (
    <BoardLayout
      style={{
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        height: "100%",
      }}
    >
      {beerName ? (
        <Col>
          <Row style={styleCenter}>
            <h1>Your Beer is:</h1>
          </Row>
          <Row style={styleCenter}>{beerName}</Row>
          <Row style={styleCenter}>
            <Button
              onClick={() => {
                if (beerName) {
                  setSelectedBeer(beerId);
                  toggleSider();
                }
              }}
            >
              Find out more
            </Button>
          </Row>
        </Col>
      ) : (
        <Col>
          <Row>Dude, select your beer first!</Row>
          <Row>
            <Link to="/">
              <Button shape="round">Get back to beer board</Button>
            </Link>
          </Row>
        </Col>
      )}
    </BoardLayout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
