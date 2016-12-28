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
export default class Tree extends React.Component {
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
      let scale = Math.min(window.size[0] / window.minSize[0], 1);
      if (!this.object) {
        let frame;
        switch(item.image) {
          case 0: { frame = "assets/tree-1.png"; break; }
        }

        this.object = new PIXI.Sprite(PIXI.loader.resources[frame].texture);
        this.object.anchor.set(0.5, 1);
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], canvas.size[1] - item.position[1] * canvas.size[1]);
        this.object.scale.set(scale * item.size, scale * item.size);
        this.object.alpha = item.opacity;
        parent.addChild(this.object);
      } else {
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], canvas.size[1] - item.position[1] * canvas.size[1]);
        this.object.scale.set(scale * item.size, scale * item.size);
      }
    }
    return null;
  }
}
