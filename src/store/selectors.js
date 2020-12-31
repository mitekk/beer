import { createSelector } from "reselect";

const getSider = (state) => state.sider;
const getHeader = (state) => state.header;
const getBeers = (state) => state.beers;
const getSelectedBeerId = (state) => state.selectedBeerId;

const getBeerById = createSelector([getBeers, (state, id) => id], (beers, id) =>
  beers.find((beer) => beer.id.toString() === id)
);

const getBeerNameById = createSelector(
  [getBeers, (state, id) => id],
  (beers, id) => {
    const beer = beers.find((beer) => beer.id.toString() === id);
    return beer?.name;
  }
);

const getSiderState = createSelector(getSider, (sider) => sider.showSider);

const getHeaderActionState = createSelector(
  getHeader,
  (header) => header.showReload
);

const getSelectedBeer = createSelector(
  [getSelectedBeerId, getBeers],
  (selectedBeerId, beers) =>
    beers.find((beer) => beer.id.toString() === selectedBeerId)
);

export {
  getBeerById,
  getBeerNameById,
  getSiderState,
  getHeaderActionState,
  getSelectedBeer,
};
