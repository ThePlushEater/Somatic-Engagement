import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

import * as PIXI from 'pixi.js';

import Cloud from './cloud';
import Mountain from './mountain';
import Tree from './tree';
import Skyline from './skyline';
import Theater from './theater';


export default class Background extends React.Component {
  constructor() {
    super();
    this.state = {
      clouds: [
        { type: "CLOUD_STATIC", position: [0.25, 0.25], size: 1.25, speed: 1, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [0.45, 0.55], size: 0.5, speed: 0.85, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [0.65, 0.35], size: 0.35, speed: 0.75, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [0.75, 0.15], size: 0.25, speed: 1, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [0.9, 0.35], size: 0.25, speed: 0.95, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [1, 0.5], size: 0.45, speed: 1, opacity: 1, image: 0 },

        { type: "CLOUD_STATIC", position: [1.5, 0.15], size: 0.35, speed: 0.9, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [1.8, 0.33], size: 0.25, speed: 0.9, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [1.412, 0.335], size: 0.45, speed: 1, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [1.235, 0.715], size: 0.25, speed: 1, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [1.13, 0.5], size: 0.225, speed: 0.85, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [1.725, 0.8], size: 0.14, speed: 1, opacity: 1, image: 0 },

        { type: "CLOUD_STATIC", position: [3.65, 0.125], size: 0.25, speed: 0.9, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [3.15, 0.1], size: 0.35, speed: 1, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [3.25, 0.515], size: 0.45, speed: 1, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [3.13, 0.35], size: 0.15, speed: 0.85, opacity: 1, image: 0 },
        { type: "CLOUD_STATIC", position: [3.625, 0.25], size: 0.34, speed: 1, opacity: 1, image: 0 },


        { type: "CLOUD_STATIC", position: [0.125, 0.665], size: 0.125, speed: 0.65, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [0.823, 0.725], size: 0.15, speed: 0.75, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [0.352, 0.853], size: 0.125, speed: 0.75, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [0.612, 0.625], size: 0.125, speed: 0.745, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [0.552, 0.215], size: 0.125, speed: 0.725, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [0.421, 0.145], size: 0.15, speed: 0.725, opacity: 0.75, image: 0 },

        { type: "CLOUD_STATIC", position: [1.155, 0.445], size: 0.115, speed: 0.65, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [1.842, 0.735], size: 0.15, speed: 0.85, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [1.323, 0.815], size: 0.125, speed: 0.75, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [1.815, 0.435], size: 0.135, speed: 0.65, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [1.621, 0.635], size: 0.125, speed: 0.75, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [1.464, 0.535], size: 0.175, speed: 0.75, opacity: 0.75, image: 0 },

        { type: "CLOUD_STATIC", position: [2.154, 0.715], size: 0.145, speed: 0.65, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [2.335, 0.445], size: 0.125, speed: 0.65, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [2.376, 0.525], size: 0.155, speed: 0.45, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [2.162, 0.385], size: 0.115, speed: 0.5, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [2.543, 0.745], size: 0.145, speed: 0.55, opacity: 0.75, image: 0 },
        { type: "CLOUD_STATIC", position: [2.451, 0.365], size: 0.135, speed: 0.65, opacity: 0.75, image: 0 },

      ],
      mountains: [
        { type: "MOUNTAIN_STATIC", position: [0, 0], size: 1, speed: 0.8, opacity: 1, image: 0 },
        { type: "MOUNTAIN_STATIC", position: [0.475, 0], size: 1, speed: 0.8, opacity: 1, image: 1 },
        { type: "MOUNTAIN_STATIC", position: [1, 0], size: 1, speed: 0.8, opacity: 1, image: 2 },
        { type: "MOUNTAIN_STATIC", position: [0.775, 0], size: 1, speed: 0.8, opacity: 1, image: 3 },
        { type: "MOUNTAIN_STATIC", position: [0.285, 0.15], size: 0.4, speed: 0.8, opacity: 1, image: 4 },
        { type: "MOUNTAIN_STATIC", position: [0.9, 0.2], size: 0.35, speed: 0.8, opacity: 1, image: 4 },
      ],
      trees: [
        { type: "TREE_STATIC", position: [0.05, 0], size: 0.25, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.125, 0], size: 0.225, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.15, 0], size: 0.35, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.25, 0], size: 0.2, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.3, 0], size: 0.175, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.325, 0], size: 0.15, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.55, 0], size: 0.325, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.525, 0], size: 0.275, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.685, 0], size: 0.275, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.75, 0], size: 0.25, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.82, 0], size: 0.235, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.842, 0], size: 0.225, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.91, 0], size: 0.35, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [0.95, 0], size: 0.3, speed: 0.85, opacity: 1, image: 0 },

        { type: "TREE_STATIC", position: [1.02, 0], size: 0.35, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.075, 0], size: 0.385, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.17, 0], size: 0.24, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.25, 0], size: 0.345, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.295, 0], size: 0.455, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.365, 0], size: 0.3725, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.6, 0], size: 0.45, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.69, 0], size: 0.36, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.745, 0], size: 0.4625, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.8, 0], size: 0.2625, speed: 0.85, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [2.025, 0], size: 0.165, speed: 0.85, opacity: 1, image: 0 },
        // { type: "TREE_STATIC", position: [2.05, 0], size: 0.325, speed: 0.85, opacity: 1, image: 0 },
        // { type: "TREE_STATIC", position: [2.115, 0], size: 0.275, speed: 0.85, opacity: 1, image: 0 },
        // { type: "TREE_STATIC", position: [2.145, 0], size: 0.21, speed: 0.85, opacity: 1, image: 0 },
      ],
      skylines: [
        { type: "SKYLINE_STATIC", position: [1.5, 0], size: 0.3, speed: 0.95, opacity: 1, image: 0 },
        { type: "SKYLINE_STATIC", position: [1.8, 0], size: 0.35, speed: 0.95, opacity: 1, image: 0 },
        { type: "SKYLINE_STATIC", position: [1.9, 0], size: 0.25, speed: 0.85, opacity: 1, image: 0 },
        { type: "SKYLINE_STATIC", position: [2.15, 0], size: 0.4, speed: 0.85, opacity: 1, image: 0 },
        { type: "SKYLINE_STATIC", position: [2.56, 0], size: 0.3, speed: 0.85, opacity: 1, image: 0 },
        { type: "SKYLINE_STATIC", position: [2.75, 0], size: 0.2, speed: 0.85, opacity: 1, image: 0 },
      ],
      theaters: [
        { type: "THEATER_STATIC", position: [2.55, 0], size: 0.85, speed: 1, opacity: 1, image: 0 },
        { type: "THEATER_STATIC", position: [2.77, 0], size: 0.85, speed: 1, opacity: 1, image: 1 },
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

      const clouds = this.state.clouds.map((item, index) => {
        return <Cloud key={"cloud-" + index} item={item} parent={parent} />;
      });
      const mountains = this.state.mountains.map((item, index) => {
        return <Mountain key={"mountain-" + index} item={item} parent={parent} />;
      });
      const skylines = this.state.skylines.map((item, index) => {
        return <Skyline key={"tree-" + index} item={item} parent={parent} />;
      });
      const theaters = this.state.theaters.map((item, index) => {
        return <Theater key={"tree-" + index} item={item} parent={parent} />;
      });
      const trees = this.state.trees.map((item, index) => {
        return <Tree key={"tree-" + index} item={item} parent={parent} />;
      });
      return <div>
        { clouds }
        { mountains }
        { skylines }
        { theaters }
        { trees }
      </div>;
    }
    return null;
  }
}
