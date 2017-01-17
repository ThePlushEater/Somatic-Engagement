import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

import * as PIXI from 'pixi.js';

import Flower from "./../foreground/flower";
import Seesaw from "./seesaw";
import Junglegym from "./Junglegym";
import Library from "./library";
import Panel from "./panel";
import Kite from "./kite";


export default class Middleground extends React.Component {
  constructor() {
    super();
    this.state = {
      flowers: [
        { type: "FLOWER_PASSIVE", position: [0.05, 0.5], size: 0.9, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.125, 0.36], size: 0.85, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.195, 0.55], size: 0.9, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.245, 0.375], size: 0.85, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.475, 0.45], size: 0.9, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.52, 0.55], size: 0.9, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.542, 0.6], size: 0.9, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.59, 0.395], size: 0.875, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.625, 0.512], size: 0.9, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.685, 0.58], size: 0.9, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.785, 0.578], size: 0.9, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.825, 0.458], size: 0.9, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.865, 0.68], size: 0.9, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.925, 0.38], size: 0.875, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.95, 0.238], size: 0.8, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [1.025, 0.48], size: 0.8, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [1.045, 0.58], size: 0.9, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [1.11, 0.328], size: 0.85, speed: 1, opacity: 1, image: 1 },

        { type: "FLOWER_PASSIVE", position: [3.59, 0.395], size: 0.875, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [3.625, 0.512], size: 0.9, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [3.685, 0.58], size: 0.9, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [3.825, 0.458], size: 0.9, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [3.865, 0.68], size: 0.9, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [3.925, 0.38], size: 0.875, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [3.95, 0.238], size: 0.8, speed: 1, opacity: 1, image: 1 },
      ],
      seesaws: [
        { type: "SEESAW_PASSIVE", position: [0.45, 0.05], size: 1, speed: 1, opacity: 1, image: 0 },
      ],
      junglegyms: [
        { type: "JUNGLEGYM_PASSIVE", position: [0.725, 0.2], size: 1, speed: 1, opacity: 1, image: 0 },
      ],
      libraries: [
        { type: "LIBRARY_PASSIVE", position: [1.715, 0], size: 0.7, speed: 1, opacity: 1, image: 0 },
      ],
      panels: [
        { type: "PANEL_STATIC", position: [0.115, 0], size: 0.475, speed: 1, opacity: 1, image: 0 },
      ],
      kites: [
        { type: "KITE_PASSIVE", position: [3.735, 0.135], size: 0.95, speed: 1, opacity: 1, image: 0 },
      ]
    }
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {

  }
  shouldComponentUpdate(nextProps, nextState) {
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

      // if (this.object) {
      //   parent.removeChild(this.object);
      // }
      // this.object = new PIXI.Container();
      // parent.addChild(this.object);

      const seesaws = this.state.seesaws.map((item, index) => {
        return <Seesaw key={"seesaw-" + index} item={item} parent={parent} />;
      });
      const junglegyms = this.state.junglegyms.map((item, index) => {
        return <Junglegym key={"junglegym-" + index} item={item} parent={parent} />;
      });
      const flowers = this.state.flowers.map((item, index) => {
        return <Flower key={"flower-" + index} item={item} parent={parent} />;
      });
      const libraries = this.state.libraries.map((item, index) => {
        return <Library key={"library-" + index} item={item} parent={parent} />;
      });
      const panels = this.state.panels.map((item, index) => {
        return <Panel key={"panel-" + index} item={item} parent={parent} />;
      });
      const kites = this.state.kites.map((item, index) => {
        return <Kite key={"kite-" + index} item={item} parent={parent} />;
      });
      return <div>
        { seesaws }
        { junglegyms }
        { flowers }
        { libraries }
        { panels }
        { kites }
      </div>;
    }
    return null;
  }
}
