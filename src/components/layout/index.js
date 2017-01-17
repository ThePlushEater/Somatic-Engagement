import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import { WindowResizeListener } from 'react-window-resize-listener'

import Header from "./header";
import Body from "./body";
import Frame from "./frame";

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

  }
  componentDidMount() {
    this.props.dispatch({type: "SET_ROUTER", payload: this.props.router});
    this.props.dispatch({type: "PUSH_ROUTE", payload: this.props.location.pathname.replace("/", "").toUpperCase()});
  }
  componentWillReceiveProps(nextProps) {

  }
  handleWindowResize(nextWindowSize) {
    this.props.dispatch({type: "SET_WINDOW_SIZE", payload: [nextWindowSize.windowWidth, nextWindowSize.windowHeight]});
  }
  render() {
    return(
      <div ref="layout" className="layout">
        <WindowResizeListener onResize={this.handleWindowResize.bind(this)}/>
        <Body children={this.props.children} />
        <Header />
        <div className="texture"></div>
        <Frame />
      </div>
    );
  }
}
