import axios from "axios";
import store from "./../store/store";

import serverConfig from "./../config/server";

export function fetchPosts() {
  return {
    type: "FETCH_POSTS",
    payload: axios.get(serverConfig.uServer + serverConfig.uPosts),
  }
}

export function fetchComments() {
  return {
    type: "FETCH_COMMENTS",
    payload: axios.get(serverConfig.uServer + serverConfig.uComments),
  }
}

export function postComment(content, author, email) {
  var config = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }
  };
  return {
    type: "POST_COMMENT",
    payload: axios.post(serverConfig.uServer + serverConfig.uPostComment, {
      "content": content,
      "author_name": author,
      "author_email": email,
      "post": store.getState().post.commentsPostId,
    }, config),
  }
}
