import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import store from "./../../../store/store";
import * as PIXI from 'pixi.js';
// const tweenManager = require('pixi-tween');

import { linear } from "./../../../utils/math";


@connect((store) => {
  return {
    localization: store.localization,
    window: store.window,
    canvas: store.canvas,
  }
})
export default class Road extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 36,
      height: 5,
      space: 24,
      bottom: 42,
    }
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {

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
    }
  }
  render() {
    const { parent, window, canvas } = this.props;
    if (parent) {
      if (this.object) {
        parent.removeChild(this.object);
      }
      let scale = Math.min(window.size[0] / window.minSize[0], 1);
      this.object = new PIXI.Graphics();
      this.object.beginFill(0xFFFFFF);
      for (let i=0; i * (this.state.width + this.state.space) < canvas.size[1] * 9; i++) {
        this.object.drawRect(-3 * window.percentage * canvas.size[0] + i * (this.state.width + this.state.space) * scale, canvas.size[1] - this.state.bottom * scale, this.state.width * scale, this.state.height * scale);
      }
      this.object.endFill();
      parent.addChild(this.object);
    }
    return null;
  }
}
