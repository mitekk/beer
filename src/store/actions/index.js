import {
  BEER_LOADED,
  BEER_ADD,
  BEER_REMOVE,
  BEER_RESET,
  BEER_SELECTED_ID,
  HEADER_ACTION_CHANGE,
  SIDER_TOGGLE,
  SIDER_CLOSE,
} from "./action.types";
import { getBeer } from "../../utils/http";

export const addBeer = () => (dispatch) =>
  getBeer().then((res) => dispatch({ type: BEER_ADD, payload: res }));

export const removeBeer = () => ({
  type: BEER_REMOVE,
});

export const getInitialBeer = () => (dispatch) =>
  getBeer().then((res) => dispatch({ type: BEER_LOADED, payload: res }));

export const reset = () => ({ type: BEER_RESET });

export const changeHeaderButtonAction = (newBtnValue) => ({
  type: HEADER_ACTION_CHANGE,
  payload: newBtnValue,
});

export const toggleSider = () => ({ type: SIDER_TOGGLE });

export const setSelectedBeer = (id) => ({
  type: BEER_SELECTED_ID,
  payload: id,
});

export const closeSider = () => ({ type: SIDER_CLOSE });
