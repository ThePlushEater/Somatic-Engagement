import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import { WindowResizeListener } from 'react-window-resize-listener'

import Header from "./header";
import Body from "./body";
import Frame from "./frame";

import { fetchLocalization } from "./../../actions/localizationActions";

require('./index.scss');

@connect((store) => {
  return {
    localization: store.localization,
  }
})
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  componentWillMount() {
    // this.props.dispatch(fetchLocalization());
  }
  componentDidMount() {
    this.props.dispatch({type: "SET_ROUTER", payload: this.props.router});
    this.props.dispatch({type: "PUSH_ROUTE", payload: this.props.location.pathname.replace("/", "").toUpperCase()});
  }
  componentWillReceiveProps(nextProps) {

  }
  render() {
    return(
      <div ref="layout" className="layout">
        <WindowResizeListener onResize={windowSize => {
          this.props.dispatch({type: "SET_WINDOW_SIZE", payload: [windowSize.windowWidth, windowSize.windowHeight]});
        }}/>
        <Body children={this.props.children} />
        <Header />
        <div className="texture"></div>
        <Frame />
      </div>
    );
  }
}
