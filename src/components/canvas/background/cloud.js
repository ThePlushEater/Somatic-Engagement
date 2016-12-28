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
export default class Cloud extends React.Component {
  constructor() {
    super();
    this.state = {

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
    const { parent, window, canvas, item } = this.props;
    if (parent) {
      // if (this.object) {
      //   parent.removeChild(this.object);
      // }
      let scale = Math.min(window.size[0] / window.minSize[0], 1) * item.size;
      if (!this.object) {
        let frame = "assets/cloud-1.png";
        this.object = new PIXI.Sprite(PIXI.loader.resources[frame].texture);
        this.object.anchor.set(0.5, 0.5);
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], item.position[1] * canvas.size[1]);
        this.object.scale.set(scale, scale);
        this.object.alpha = item.opacity;
        parent.addChild(this.object);
      } else {
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], item.position[1] * canvas.size[1]);
        this.object.scale.set(scale, scale);
      }


      // let scale = Math.min(window.size[0] / window.minSize[0], 1) * item.size;
      // let frame = "assets/cloud-1.png";
      //
      // this.object = new PIXI.Sprite(PIXI.loader.resources[frame].texture);
      // this.object.anchor.set(0.5, 0.5);
      // this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], item.position[1] * canvas.size[1]);
      // // this.object.position.set(100, 100);
      // this.object.scale.set(scale, scale);
      // this.object.alpha = item.opacity;
      // parent.addChild(this.object);

      // this.object = new PIXI.Graphics();
      // this.object.beginFill(0xFFFFFF);
      // for (let i=0; i * (this.state.width + this.state.space) < canvas.size[1] * 9; i++) {
      //   this.object.drawRect(-3 * window.percentage * canvas.size[0] + i * (this.state.width + this.state.space) * scale, canvas.size[1] - this.state.bottom * scale, this.state.width * scale, this.state.height * scale);
      // }
      // this.object.endFill();
      // parent.addChild(this.object);
    }
    return null;
  }
}
