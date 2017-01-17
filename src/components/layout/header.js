import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

require('./header.scss');

@connect((store) => {
  return {
    localization: store.localization,
    window: store.window,
  }
})
export default class HEADER extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    if (this.props.window.size[0] != nextProps.window.size[0]) {
      nextProps.dispatch({type: "SET_NAV_ITEMS_POS", payload: [
        document.querySelector("#nav-item-2").offsetLeft + document.querySelector("#nav-item-2").clientWidth * 0.5,
        document.querySelector("#nav-item-3").offsetLeft + document.querySelector("#nav-item-3").clientWidth * 0.5,
        document.querySelector("#nav-item-4").offsetLeft + document.querySelector("#nav-item-4").clientWidth * 0.5,
        document.querySelector("#nav-item-5").offsetLeft + document.querySelector("#nav-item-5").clientWidth * 0.5
      ]});
    }
  }
  handleClickNavItem(item, event) {
    this.props.dispatch({type: "PUSH_ROUTE", payload: item.toUpperCase()});
  }
  render() {
    const { localization } = this.props.localization;
    let navItemsActive = ["", "", "", ""];
    switch(this.props.window.route) {
      case "HOME": {
        navItemsActive[0] = " active";
        break;
      }
      case "RESEARCH": {
        navItemsActive[1] = " active";
        break;
      }
      case "PROJECTS": {
        navItemsActive[2] = " active";
        break;
      }
      case "CONTACT": {
        navItemsActive[3] = " active";
        break;
      }
      default: {
        break;
      }
    }
    return(
      <div className="header">
        <div id="nav-item-1" className="title" onClick={this.handleClickNavItem.bind(this, "HOME")}>
          <div><span className="before">S</span></div><img className="logo off" src="./logo.png" /><div><span className="after">MKIDS</span></div>
        </div>
        <ul className="nav-group">
          <li id="nav-item-2" className={"item" + navItemsActive[0]} onClick={this.handleClickNavItem.bind(this, "HOME")}><span><span>ABOUT</span></span></li>
          <li id="nav-item-3" className={"item" + navItemsActive[1]} onClick={this.handleClickNavItem.bind(this, "RESEARCH")}><span><span>RESEARCH</span></span></li>
          <li id="nav-item-4" className={"item" + navItemsActive[2]} onClick={this.handleClickNavItem.bind(this, "PROJECTS")}><span><span>PROJECTS</span></span></li>
          <li id="nav-item-5" className={"item" + navItemsActive[3]} onClick={this.handleClickNavItem.bind(this, "CONTACT")}><span><span>CONTACT</span></span></li>
        </ul>
      </div>
    );
  }
}
