import {
  BEER_ADD,
  BEER_LOADED,
  BEER_REMOVE,
  BEER_RESET,
  BEER_SELECTED_ID,
  HEADER_ACTION_CHANGE,
  SIDER_TOGGLE,
  SIDER_CLOSE,
} from "../actions/action.types";
const initialState = {
  selectedBeerId: -1,
  beers: [],
  header: {
    showReload: true,
  },
  sider: {
    showSider: false,
  },
};

const rootReducer = (state = initialState, action) => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  switch (action.type) {
    case BEER_ADD:
      return {
        ...state,
        beers: [...state.beers, { ...action.payload, color }],
      };
    case BEER_REMOVE:
      const beers = [...state.beers];
      beers.pop();
      return { ...state, beers: [...beers] };

    case BEER_RESET:
      return {
        ...state,
        beers: [],
        selectedBeerId: -1,
        sider: { showSider: false },
        header: { showReload: true },
      };

    case BEER_LOADED:
      return {
        ...state,
        beers:
          state.beers && state.beers.length
            ? [...state.beers]
            : [{ ...action.payload, color }],
      };

    case HEADER_ACTION_CHANGE:
      return { ...state, header: { showReload: action.payload } };

    case SIDER_TOGGLE:
      return { ...state, sider: { showSider: !state.sider.showSider } };

    case BEER_SELECTED_ID:
      return { ...state, selectedBeerId: action.payload };

    case SIDER_CLOSE:
      return { ...state, sider: { showSider: false } };

    default:
      break;
  }

  return state;
};

export default rootReducer;
