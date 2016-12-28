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
export default class Flower extends React.Component {
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
      let scale = Math.min(window.size[0] / window.minSize[0], 1) * item.size;
      if (!this.object) {
        let frame;
        switch(item.image) {
          case 0: { frame = "assets/flower-1.png"; break; }
          case 1: { frame = "assets/flower-2.png"; break; }
        }

        this.object = new PIXI.Container();
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], canvas.size[1] - 64 * scale + item.position[1] * 64 * scale);
        // this.object.scale.set(scale, scale);
        // this.object.alpha = item.opacity;
        parent.addChild(this.object);

        this.graphic = new PIXI.Sprite(PIXI.loader.resources[frame].texture);
        this.graphic.anchor.set(0.5, 1);
        this.graphic.scale.set(scale, scale);
        this.graphic.alpha = item.opacity;
        this.object.addChild(this.graphic);

      } else {
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], canvas.size[1] - 64 * scale + item.position[1] * 64 * scale);
        this.graphic.scale.set(scale, scale);

        // Hit detection with the player.
        let tweenY = PIXI.tweenManager.createTween(this.graphic.anchor);
        tweenY.loop = false;
        tweenY.time = 150;
        if ((this.object.position.x - this.graphic.texture.width * 0.4 < canvas.player.x + canvas.player.texture.width * 0.4) && (this.object.position.x + this.graphic.texture.width * 0.4 > canvas.player.x - canvas.player.texture.width * 0.4) ) {
          tweenY.to({
            y: 0.9
          });
        } else {
          tweenY.to({
            y: 1
          });
        }
        tweenY.start();
      }
    }
    return null;
  }
}
