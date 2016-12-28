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
export default class Seesaw extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    }
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    const { parent, window, canvas, item } = nextProps;
    // Hit detection with the player.
    if ((this.object.position.x - this.actor.texture.width * 0.4 < canvas.player.x + canvas.player.texture.width * 0.4) && (this.object.position.x + this.actor.texture.width * 0.4 > canvas.player.x - canvas.player.texture.width * 0.4) ) {
      if (!this.state.active) {
        this.setState({
          active: true,
        });
        let tweenInit = PIXI.tweenManager.createTween(this.actor);
        tweenInit.loop = false;
        tweenInit.time = 1000;
        tweenInit.easing = PIXI.tween.Easing.inOutCubic();
        tweenInit.to({
          rotation: -0.2
        });
        tweenInit.start();

        tweenInit.once('end', function() {
          let tweenSwing = PIXI.tweenManager.createTween(this.actor);
          tweenSwing.loop = true;
          tweenSwing.time = 2500;
          tweenSwing.pingPong = true;
          tweenSwing.easing = PIXI.tween.Easing.inOutCubic();
          tweenSwing.from({
            rotation: -0.2
          });
          tweenSwing.to({
            rotation: 0.2
          });
          tweenSwing.start();
        }.bind(this));
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
    }
  }
  render() {
    const { parent, window, canvas, item } = this.props;
    if (parent) {
      let scale = Math.min(window.size[0] / window.minSize[0], 1);
      if (!this.object) {
        this.object = new PIXI.Container();
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], canvas.size[1] - 64 * scale + item.position[1] * 64 * scale * item.size);
        // this.object.scale.set(scale, scale);
        // this.object.alpha = item.opacity;
        parent.addChild(this.object);

        this.actor = new PIXI.Sprite(PIXI.loader.resources["assets/seesaw-actors.png"].texture);
        this.actor.anchor.set(0.5, 0.8);
        this.actor.position.set(0, -canvas.size[1] * scale * 0.0325);
        this.actor.scale.set(scale * item.size, scale * item.size);
        this.actor.alpha = item.opacity;
        this.object.addChild(this.actor);

        this.base = new PIXI.Sprite(PIXI.loader.resources["assets/seesaw-base.png"].texture);
        this.base.anchor.set(0.5, 1);
        this.base.scale.set(scale * item.size, scale * item.size);
        this.base.alpha = item.opacity;
        this.object.addChild(this.base);

      } else {
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], canvas.size[1] - 64 * scale + item.position[1] * 64 * scale);
        this.actor.scale.set(scale * item.size, scale * item.size);
        this.base.scale.set(scale * item.size, scale * item.size);
        this.actor.position.set(0, -canvas.size[1] * scale * 0.0325);
      }
    }
    return null;
  }
}
