import { Button, Col, Row } from "antd";
import BoardLayout from "../layouts/Board.layout";
import { useEffect } from "react";
import BeerItem from "../components/poc/BeerItem";
import { connect } from "react-redux";
import {
  getInitialBeer,
  changeHeaderButtonAction,
  addBeer,
  removeBeer,
} from "../store/actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({ beers: state.beers });
const mapDispatchToProps = {
  changeHeaderButtonAction,
  getInitialBeer,
  addBeer,
  removeBeer,
};

const BeerList = ({
  beers,
  changeHeaderButtonAction,
  getInitialBeer,
  addBeer,
  removeBeer,
}) => {
  useEffect(() => {
    getInitialBeer();
    changeHeaderButtonAction(true);
  }, [getInitialBeer,changeHeaderButtonAction]);

  return (
    <BoardLayout>
      <Row>
        <Col>
          <Button onClick={addBeer}>+</Button>
          <Button onClick={removeBeer}>-</Button>
        </Col>
      </Row>
      <Row gutter={[16, 24]}>
        {beers.map((beer) => (
          <Link key={beer.id} to={`/beer/${beer.id}`}>
            <BeerItem info={beer}></BeerItem>
          </Link>
        ))}
      </Row>
    </BoardLayout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
