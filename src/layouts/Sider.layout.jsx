import { Layout } from "antd";
import { connect } from "react-redux";
import { getSelectedBeer, getSiderState } from "../store/selectors";
import { BeerInfoContainer, BeerIngredientsTitle } from "./Sider.layout.styled";
const { Sider } = Layout;

const mapStateToProps = (state) => ({
  siderVisible: getSiderState(state),
  beer: getSelectedBeer(state),
});

const StyledSider = ({ beer, siderVisible }) => {
  const { brand, name, style, hop, yeast, malts, alcohol } = beer ? beer : {};

  return (
    <Sider
      collapsible
      collapsed={!siderVisible}
      collapsedWidth={0}
      trigger={null}
    >
      {beer ? (
        <BeerInfoContainer>
          <BeerIngredientsTitle>Beer Ingredients</BeerIngredientsTitle>
          <div>{`Name:  ${name}`}</div>
          <div>{`Brand:  ${brand}`}</div>
          <div>{`Style:  ${style}`}</div>
          <div>{`Hop:  ${hop}`}</div>
          <div>{`Yeast:  ${yeast}`}</div>
          <div>{`Malts:  ${malts}`}</div>
          <div>{`Alcohol:  ${alcohol}`}</div>
        </BeerInfoContainer>
      ) : (
        ""
      )}
    </Sider>
  );
};

export default connect(mapStateToProps)(StyledSider);
