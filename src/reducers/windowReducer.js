import Immutable from 'seamless-immutable';
import store from "./../store/store";

import { JumpHorizontal } from './../utils/jump';

const defaultState = Immutable({
  router: null,
  route: "HOME",
  size: [0, 0],
  minSize: [1280, 800],
  percentage: 0,
  navPoses: [0, 0, 0, 0],
  openLibrary: false,
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_ROUTER": {
      return state.merge({router: action.payload});
    }
    case "SET_WINDOW_SIZE": {
      return state.merge({size: action.payload});
    }
    case "SET_OPEN_LIBRARY": {
      return state.merge({openLibrary: action.payload});
    }
    case "SET_SCROLL_X_PERCENTAGE": {
      let route;
      if (action.payload <= 0.165) {
        route = "HOME"
      } else if (action.payload <= 0.495) {
        route = "RESEARCH"
      } else if (action.payload <= 0.825) {
        route = "PROJECTS"
      } else {
        route = "CONTACT"
      }
      return state.merge({percentage: action.payload, route: route});
    }
    case "SET_NAV_ITEMS_POS" : {
      return state.merge({navPoses: action.payload});
    }
    case "PUSH_ROUTE": {
      switch(action.payload) {
        case "HOME": {
          // state.router.push({pathname: ""});
          new JumpHorizontal('.body', 0, 1500);
          return state.merge({route: "HOME"});
        }
        case "RESEARCH": {
          // state.router.push({pathname: "about"});
          new JumpHorizontal('.body', store.getState().canvas.size[0], 1500);
          return state.merge({route: "RESEARCH"});
        }
        case "PROJECTS": {
          // state.router.push({pathname: "about"});
          new JumpHorizontal('.body', store.getState().canvas.size[0] * 2, 1500);
          return state.merge({route: "PROJECTS"});
        }
        case "CONTACT": {
          // state.router.push({pathname: "about"});
          new JumpHorizontal('.body', store.getState().canvas.size[0] * 3, 1500);
          return state.merge({route: "CONTACT"});
        }
      }
    }
  }
  return state;
};
