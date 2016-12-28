import Immutable from 'seamless-immutable';
import store from "./../store/store";

const defaultState = {
  fetching: false,
  fetched: false,
  error: null,
  size: [0, 0],
  actors: [],
  player: null,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_CANVAS_SIZE": {
      return {...state, size: action.payload};
    }
    case "SET_PLAYER": {
      return {...state, player: action.payload};
    }
  }
  return state;
};
