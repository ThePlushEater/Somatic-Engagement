import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

import clientConfig from "./../../config/client";
import { MoveHorizontal } from './../../utils/jump';
import { KEYS } from './../../utils/keys';

require('./body.scss');

@connect((store) => {
  return {
    localization: store.localization,
  }
})
export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      direction: "CENTER",
    };
    this.speed = 0;
    this.animator = null;
  }
  handleScroll(event) {
    this.props.dispatch({type: "SET_SCROLL_X_PERCENTAGE", payload: event.target.scrollLeft / ((event.target.clientWidth - 48) * 3 - 24)});
  }
  handleKeyDown(event){
    if(event.keyCode === KEYS.LEFT) {
      this.setState({
        direction: "LEFT",
      });
      this.animator.execute(this.body.scrollLeft + this.speed, 25);
      event.preventDefault();
    } else if(event.keyCode === KEYS.RIGHT) {
      this.setState({
        direction: "RIGHT",
      });
      this.animator.execute(this.body.scrollLeft + this.speed, 25);
      event.preventDefault();
    }
  }
  handleKeyUp(event){
    this.setState({
      direction: "CENTER",
    });
  }
  componentWillMount() {

  }
  handleKeyAnimation() {
    if (this.state.direction == "LEFT") {
      this.speed = Math.max(-clientConfig.keyAnimationMaxSpeed, this.speed - clientConfig.keyAnimationAccelerate);
    } else if (this.state.direction == "RIGHT") {
      this.speed = Math.min(clientConfig.keyAnimationMaxSpeed, this.speed + clientConfig.keyAnimationAccelerate);
    } else {
      if (this.speed > 0) {
        this.speed -= clientConfig.keyAnimationAccelerate;
      } else if (this.speed < 0) {
        this.speed += clientConfig.keyAnimationAccelerate;
      }
    }
    if (this.speed != 0) {
      this.animator.execute(this.body.scrollLeft + this.speed, 25);
    }
  }

  componentDidMount() {
    this.body = ReactDom.findDOMNode(this.refs['body']);
    this.body.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
    this.animator = new MoveHorizontal('.body', this.handleKeyAnimation.bind(this));
  }
  componentWillReceiveProps(nextProps) {

  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return(
      <div ref="body" className="body">
        {this.props.children}
      </div>
    );
  }
}
