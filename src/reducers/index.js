import { combineReducers } from "redux";

import localization from "./localizationReducer";
import window from "./windowReducer";
import canvas from "./canvasReducer";
import post from "./postReducer";

export default combineReducers({
  localization,
  window,
  canvas,
  post
});
