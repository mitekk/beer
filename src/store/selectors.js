import { createSelector } from "reselect";

const getBeerById = createSelector(
  (state, id) => state.beers.find((beer) => beer.id.toString() === id),
  (beer) => beer
);

const getBeerName = createSelector(
  (state, id) => state.beers.find((beer) => beer.id.toString() === id),
  (beer) => beer?.name
);

const getSiderState = createSelector(
  (state) => state.sider,
  (sider) => sider.showSider
);

const getHeaderActionState = createSelector(
  (state) => state.header,
  (header) => header.showReload
);

const getSelectedBeer = createSelector(
  [(state) => state.selectedBeerId, (state) => state.beers],
  (selectedBeerId, beers) =>
    beers.find((beer) => beer.id.toString() === selectedBeerId)
);

export {
  getBeerById,
  getBeerName,
  getSiderState,
  getHeaderActionState,
  getSelectedBeer,
};
