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
export default class Sky extends React.Component {
  constructor() {
    super();
    this.state = {
      skies: [
        {
          r: 224,
          g: 241,
          b: 255
        },
        {
          r: 255,
          g: 222,
          b: 171
        },
        {
          r: 61,
          g: 67,
          b: 90
        },
        {
          r: 255,
          g: 235,
          b: 206
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

      let fillColor, ease, r, g, b;
      if (this.props.window.percentage <= 0.33) {
        ease = easeInOutQuad(this.props.window.percentage, 0, 1, 0.33);
        r = this.state.skies[0].r + ease * (this.state.skies[1].r - this.state.skies[0].r);
        g = this.state.skies[0].g + ease * (this.state.skies[1].g - this.state.skies[0].g);
        b = this.state.skies[0].b + ease * (this.state.skies[1].b - this.state.skies[0].b);
      } else if (this.props.window.percentage <= 0.66) {
        ease = easeInOutQuad(this.props.window.percentage - 0.33, 0, 1, 0.33);
        r = this.state.skies[1].r + ease * (this.state.skies[2].r - this.state.skies[1].r);
        g = this.state.skies[1].g + ease * (this.state.skies[2].g - this.state.skies[1].g);
        b = this.state.skies[1].b + ease * (this.state.skies[2].b - this.state.skies[1].b);
      } else if (this.props.window.percentage <= 1) {
        ease = easeInOutQuad(this.props.window.percentage - 0.66, 0, 1, 0.33);
        r = this.state.skies[2].r + ease * (this.state.skies[3].r - this.state.skies[2].r);
        g = this.state.skies[2].g + ease * (this.state.skies[3].g - this.state.skies[2].g);
        b = this.state.skies[2].b + ease * (this.state.skies[3].b - this.state.skies[2].b);
      }
      fillColor = "0x" + parseInt(r).toString(16).toUpperCase() + parseInt(g).toString(16).toUpperCase() +  parseInt(b).toString(16).toUpperCase();

      this.object = new PIXI.Graphics();
      this.object.beginFill(fillColor);
      this.object.drawRect(0, 0, canvas.size[0], canvas.size[1]);
      this.object.endFill();
      parent.addChild(this.object);
      this.object.depth = -1;
    }
    return null;
  }
}
