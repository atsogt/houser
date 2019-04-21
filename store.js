import { createStore } from "redux";

const initialState = {
  houses: []
};

export const UPDATE_HOUSES = "UPDATE_HOUSES";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_HOUSES:
      return {
        houses: payload
      };
    default:
      return state;
  }
}

export default createStore(reducer);
