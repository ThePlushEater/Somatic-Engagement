import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

import * as PIXI from 'pixi.js';
const tweenManager = require('pixi-tween');

import Sky from "./../sky";
import Background from "./../background";
import Ground from "./../ground";
import Road from "./../road";
import Player from "./../player";
import Foreground from "./../foreground";
import Middleground from "./../middleground";

@connect((store) => {
  return {

  }
})
export default class Stage extends React.Component {
  constructor() {
    super();
    this.state = {
      stage: null,
      loaded: false,
    }
  }

  animate() {
    const { renderer } = this.props;
    renderer.render(this.state.stage);
    PIXI.tweenManager.update();
    requestAnimationFrame(this.animate.bind(this));
  }


  componentWillMount() {
    // this.props.dispatch(fetchLocalization());
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    if (this.state.stage == null) {
      const { renderer } = nextProps;
      const stage = new PIXI.Container();
      stage.width = renderer.view.clientWidth;
      stage.height = renderer.view.clientHeight;
      for (let i=0; i<10; i++) {
        stage.addChild(new PIXI.Container());
      }

      renderer.render(stage);
      requestAnimationFrame(this.animate.bind(this));
      this.setState({
        stage: stage,
      });
      setTimeout(function() {
        this.setState({
          loaded: true,
        });
      }.bind(this), 3500);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.renderer === null) {
      return false;
    }
    return true;
  }
  componentWillUnmount() {
    if (this.state.stage && this.objects) {
      this.state.stage.removeChildren(this.objects);
    }
  }
  render() {
    if (this.state.stage && this.state.loaded) {
      return <div>
        <Sky parent={this.state.stage.getChildAt(0)} />
        <Background parent={this.state.stage.getChildAt(1)} />
        <Ground parent={this.state.stage.getChildAt(2)} />
        <Road parent={this.state.stage.getChildAt(3)} />
        <Middleground parent={this.state.stage.getChildAt(4)} />
        <Player parent={this.state.stage.getChildAt(5)} />
        <Foreground parent={this.state.stage.getChildAt(6)} />
      </div>;
    }
    return null;
  }
}
