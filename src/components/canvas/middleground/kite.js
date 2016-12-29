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
export default class Kite extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      frame: 0,
    }
    this.timer = null;
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    const { parent, window, canvas, item } = nextProps;
    // Hit detection with the player.
    let scale = Math.min(window.size[0] / window.minSize[0], 1);
    if ((this.object.position.x - this.actor.texture.width * 0.5 * scale < canvas.player.x + canvas.player.texture.width * 0.4) && (this.object.position.x + this.actor.texture.width * 0.5 * scale > canvas.player.x - canvas.player.texture.width * 0.4) ) {
      if (!this.state.active) {
        this.setState({
          active: true,
        });
        this.timer = setInterval(function() {
          this.setState({
            frame: (this.state.frame + 1) % 3 + 1,
          })
        }.bind(this), 1000);
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.parent === null) {
      return false;
    }
    return true;
  }
  componentWillUnmount() {
    const { parent } = this.props;
    if (parent) {
      parent.removeChild(this.object);
    }
    if (this.timer) {
      clearInterval(this.timer);
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

        this.textures = [
          PIXI.loader.resources["assets/kite-frame-1.png"].texture,
          PIXI.loader.resources["assets/kite-frame-2.png"].texture,
          PIXI.loader.resources["assets/kite-frame-3.png"].texture,
          PIXI.loader.resources["assets/kite-frame-4.png"].texture
        ];

        this.actor = new PIXI.Sprite(this.textures[this.state.frame]);
        this.actor.anchor.set(0.5, 1);
        this.actor.scale.set(-scale * item.size, scale * item.size);
        this.actor.alpha = item.opacity;
        this.object.addChild(this.actor);

      } else {
        this.actor.texture = this.textures[this.state.frame];
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], canvas.size[1] - 64 * scale + item.position[1] * 64 * scale);
        this.actor.scale.set(-scale * item.size, scale * item.size);
      }
    }
    return null;
  }
}
