import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

import { MoveHorizontal } from './../../utils/jump';


const KEY = {
  LEFT: 37,
  RIGHT: 39,
  A: 65,
  D: 68,
};

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
    this.speedMax = 5;
    this.accelerate = 0.25;
    this.animator = null;
  }
  handleScroll(event) {
    this.props.dispatch({type: "SET_SCROLL_X_PERCENTAGE", payload: event.target.scrollLeft / ((event.target.clientWidth - 48) * 3 - 24)});
  }
  handleKeyDown(event){
    if(event.keyCode === KEY.LEFT   || event.keyCode === KEY.A) {
      this.setState({
        direction: "LEFT",
      });
      this.animator.execute(this.body.scrollLeft + this.speed, 25);
    } else if(event.keyCode === KEY.RIGHT  || event.keyCode === KEY.D) {
      this.setState({
        direction: "RIGHT",
      });
      this.animator.execute(this.body.scrollLeft + this.speed, 25);
    }
    event.preventDefault();
  }
  handleKeyUp(event){
    // if(event.keyCode === KEY.LEFT   || event.keyCode === KEY.A) {
    //   this.setState({
    //     direction: "CENTER",
    //   });
    // } else if(event.keyCode === KEY.RIGHT  || event.keyCode === KEY.D) {
    //   this.setState({
    //     direction: "CENTER",
    //   });
    // }
    this.setState({
      direction: "CENTER",
    });
  }
  componentWillMount() {
    // this.props.dispatch(fetchLocalization());
  }

  moveCallback() {
    if (this.state.direction == "LEFT") {
      this.speed = Math.max(-this.speedMax, this.speed - this.accelerate);
    } else if (this.state.direction == "RIGHT") {
      this.speed = Math.min(this.speedMax, this.speed + this.accelerate);
    } else {
      if (this.speed > 0) {
        this.speed -= this.accelerate;
      } else if (this.speed < 0) {
        this.speed += this.accelerate;
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
    this.animator = new MoveHorizontal('.body', this.moveCallback.bind(this));
    // this.animator.execute(this.body.scrollLeft + this.speed, 25);
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
