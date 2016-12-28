import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import store from "./../../../store/store";
import * as PIXI from 'pixi.js';

import { easeInOutQuad } from "./../../../utils/math";


@connect((store) => {
  return {
    localization: store.localization,
    window: store.window,
    canvas: store.canvas,
  }
})
export default class Ground extends React.Component {
  constructor() {
    super();
    this.state = {
      roads: [
        {
          r: 190,
          g: 228,
          b: 154
        },
        {
          r: 228,
          g: 186,
          b: 133
        },
        {
          r: 46,
          g: 51,
          b: 70
        },
        {
          r: 170,
          g: 153,
          b: 127
        }
      ]
    };
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

      let fillColor, ease, r, g, b, scale;
      if (this.props.window.percentage <= 0.33) {
        ease = easeInOutQuad(this.props.window.percentage, 0, 1, 0.33);
        r = this.state.roads[0].r + ease * (this.state.roads[1].r - this.state.roads[0].r);
        g = this.state.roads[0].g + ease * (this.state.roads[1].g - this.state.roads[0].g);
        b = this.state.roads[0].b + ease * (this.state.roads[1].b - this.state.roads[0].b);
      } else if (this.props.window.percentage <= 0.66) {
        ease = easeInOutQuad(this.props.window.percentage - 0.33, 0, 1, 0.33);
        r = this.state.roads[1].r + ease * (this.state.roads[2].r - this.state.roads[1].r);
        g = this.state.roads[1].g + ease * (this.state.roads[2].g - this.state.roads[1].g);
        b = this.state.roads[1].b + ease * (this.state.roads[2].b - this.state.roads[1].b);
      } else if (this.props.window.percentage <= 1) {
        ease = easeInOutQuad(this.props.window.percentage - 0.66, 0, 1, 0.33);
        r = this.state.roads[2].r + ease * (this.state.roads[3].r - this.state.roads[2].r);
        g = this.state.roads[2].g + ease * (this.state.roads[3].g - this.state.roads[2].g);
        b = this.state.roads[2].b + ease * (this.state.roads[3].b - this.state.roads[2].b);
      }
      fillColor = "0x" + parseInt(r).toString(16).toUpperCase() + parseInt(g).toString(16).toUpperCase() +  parseInt(b).toString(16).toUpperCase();

      scale = Math.min(window.size[0] / window.minSize[0], 1);

      this.object = new PIXI.Graphics();
      this.object.beginFill(fillColor);
      this.object.drawRect(0, canvas.size[1] - 64 * scale, canvas.size[0], 64 * scale);
      this.object.endFill();
      parent.addChild(this.object);
    }
    return null;
  }
}
