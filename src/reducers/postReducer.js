import Immutable from 'seamless-immutable';
import store from "./../store/store";
import serverConfig from "./../config/server";


const defaultState = Immutable({
  fetching: false,
  fetched: false,
  error: null,
  project: null,
  posts: [],
  comments: [],
  commentUpdated: false,
  commentsPostId: null,
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
      const projects = action.payload.data.filter((item) => {
        if (item.acf.category == "project") {
          return true;
        }
        return false;
      });
      const comments = action.payload.data.filter((item) => {
        if (item.acf.category == "comments") {
          return true;
        }
        return false;
      });
      let commentsPostId;
      if (comments.length > 0) {
        commentsPostId = comments[0].id;
      }
      if (projects.length > 0) {
        return state.merge({fetching: false, fetched: true, posts: action.payload.data, commentsPostId: commentsPostId, project: projects[0]});
      } else {
        return state.merge({fetching: false, fetched: true, posts: action.payload.data, commentsPostId: commentsPostId});
      }
    }
    case "SET_PROJECT_ITEM": {
      return state.merge({project: action.payload});
    }
    case "FETCH_COMMENTS_FULFILLED": {
      return state.merge({fetching: false, fetched: true, comments: action.payload.data});
    }
    // case "POST_COMMENT_PENDING": {
    //   return {...state, fetching: true};
    // }
    // case "POST_COMMENT_REJECTED": {
    //   return {...state, fetching: false, error: action.payload};
    // }
    case "POST_COMMENT_FULFILLED": {
      return state.merge({fetching: false, fetched: true, commentUpdated: true});
    }
    case "RESET_COMMENT_POST_STATUS": {
      return state.merge({commentUpdated: false});
    }
  }
  return state;
};
