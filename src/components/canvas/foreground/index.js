import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

import * as PIXI from 'pixi.js';

import Flower from "./flower";
import Tree from "./tree";


export default class Foreground extends React.Component {
  constructor() {
    super();
    this.state = {
      flowers: [
        { type: "FLOWER_PASSIVE", position: [0.075, 0.85], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.105, 0.75], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.135, 0.8], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.225, 0.9], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.3, 0.75], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.35, 0.889], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.39, 0.825], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.42, 0.9], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.45, 0.8], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.575, 0.9], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.6, 0.775], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.675, 0.825], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.7, 0.72], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.725, 0.775], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.75, 0.8], size: 1, speed: 1, opacity: 0, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.85, 0.9], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.9, 0.85], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [0.925, 0.825], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [0.975, 0.9], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [1, 0.875], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [1.075, 0.85], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [1.175, 0.825], size: 1, speed: 1, opacity: 1, image: 0 },


        { type: "FLOWER_PASSIVE", position: [3.675, 0.825], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [3.725, 0.775], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [3.9, 0.85], size: 1, speed: 1, opacity: 1, image: 0 },
        { type: "FLOWER_PASSIVE", position: [3.925, 0.825], size: 1, speed: 1, opacity: 1, image: 1 },
        { type: "FLOWER_PASSIVE", position: [3.975, 0.9], size: 1, speed: 1, opacity: 1, image: 0 },
      ],
      trees: [
        { type: "TREE_STATIC", position: [1.135, 0.015], size: 0.374, speed: 1, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.275, 0.02], size: 0.4, speed: 1, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.35, 0.01], size: 0.45, speed: 1, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.785, 0.0125], size: 0.425, speed: 1, opacity: 1, image: 0 },
        { type: "TREE_STATIC", position: [1.895, 0.0175], size: 0.375, speed: 1, opacity: 1, image: 0 },
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

      const flowers = this.state.flowers.map((item, index) => {
        return <Flower key={"flower-" + index} item={item} parent={parent} />;
      });
      const trees = this.state.trees.map((item, index) => {
        return <Tree key={"tree-" + index} item={item} parent={parent} />;
      });
      return <div>
        { flowers }
        { trees }
      </div>;
    }
    return null;
  }
}
