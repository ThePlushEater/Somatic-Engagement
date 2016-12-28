import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import store from "./../../../store/store";
import * as PIXI from 'pixi.js';
// const tweenManager = require('pixi-tween');

import { easeInOutQuad, linear } from "./../../../utils/math";


@connect((store) => {
  return {
    localization: store.localization,
    window: store.window,
    canvas: store.canvas,
  }
})
export default class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      direction: "RIGHT",
    }
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    if (this.state.direction == "RIGHT") {
      if (this.props.window.percentage > nextProps.window.percentage) {
        this.setState({
          direction: "LEFT",
        });
      }
    } else if (this.state.direction == "LEFT") {
      if (this.props.window.percentage < nextProps.window.percentage) {
        this.setState({
          direction: "RIGHT",
        });
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.parent === null) {
      return false;
    }
    // if (this.props.window.percentage == nextProps.window.percentage) {
    //   return false;
    // }
    return true;
  }
  componentWillUnmount() {
    const { parent } = this.props;
    if (parent) {
      parent.removeChild(this.object);
      this.props.dispatch({type: "SET_PLAYER", payload: null});
    }
  }
  render() {
    const { parent, window, canvas } = this.props;
    if (parent) {
      let xPos, ease, frame, scale;
      if (window.percentage <= 0.33) {
        ease = linear(this.props.window.percentage, 0, 1, 0.33);
        xPos = window.navPoses[0] + ease * (window.navPoses[1] - window.navPoses[0]);
      } else if (window.percentage <= 0.66) {
        ease = linear(this.props.window.percentage - 0.33, 0, 1, 0.33);
        xPos = window.navPoses[1] + ease * (window.navPoses[2] - window.navPoses[1]);
      } else if (window.percentage <= 1) {
        ease = linear(this.props.window.percentage - 0.66, 0, 1, 0.33);
        xPos = window.navPoses[2] + ease * (window.navPoses[3] - window.navPoses[2]);
      }
      if (parseInt(ease * 20) % 2 == 0) {
        frame = "assets/trike-frame-1.png";
      } else {
        frame = "assets/trike-frame-2.png";
      }
      scale = Math.min(window.size[0] / window.minSize[0], 1);
      if (!this.object) {
        this.object = new PIXI.Sprite(PIXI.loader.resources[frame].texture);
        this.object.anchor.set(0.5, 1);
        this.object.position.set(xPos, canvas.size[1] - 12 * scale);
        if (this.state.direction == "LEFT") {
          this.object.scale.set(-1 * scale, scale);
        } else {
          this.object.scale.set(scale, scale);
        }
        parent.addChild(this.object);
        setTimeout(function() {
          this.props.dispatch({type: "SET_PLAYER", payload: this.object});
        }.bind(this), 0);
      } else {
        this.object.texture = PIXI.loader.resources[frame].texture;
        this.object.position.set(xPos, canvas.size[1] - 12 * scale);
        if (this.state.direction == "LEFT") {
          this.object.scale.set(-1 * scale, scale);
        } else {
          this.object.scale.set(scale, scale);
        }
      }
    }
    return null;
  }
}
