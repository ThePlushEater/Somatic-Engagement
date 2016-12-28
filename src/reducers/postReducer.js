import Immutable from 'seamless-immutable';
import store from "./../store/store";
import serverConfig from "./../config/server";


const defaultState = Immutable({
  fetching: false,
  fetched: false,
  error: null,
  project: 0,
  posts: [],
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_POSTS_PENDING": {
      return state.merge({fetching: true});
    }
    case "FETCH_POSTS_REJECTED" : {
      return state.merge({fetching: false, error: action.payload});
    }
    case "FETCH_POSTS_FULFILLED" : {
      const projects = action.payload.data.map((item) => {
        if (item.categories.indexOf(serverConfig.iProject) > -1) {
          return item.id;
        }
        return null;
      });
      if (projects.length > 0) {
        return state.merge({fetching: false, fetched: true, posts: action.payload.data, project: projects[0]});
      } else {
        return state.merge({fetching: false, fetched: true, posts: action.payload.data});
      }
    }
    // case "SELECT_PROJECT_ITEM" : {
    //   const element = document.querySelector("#post-project");
    //   if (element) {
    //     document.querySelector("#post-project").scrollTop = 0;
    //   }
    //   return state.merge({projectItem: action.payload});
    // }
  }
  return state;
};
