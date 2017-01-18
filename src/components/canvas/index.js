import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

import * as PIXI from 'pixi.js';

import Stage from './stage';


@connect((store) => {
  return {
    window: store.window,
  }
})
export default class Canvas extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  // animate() {
  //   this.state.renderer.render(this.state.stage);
  //   requestAnimationFrame(this.animate.bind(this));
  // }

  componentWillMount() {
    // this.props.dispatch(fetchLocalization());
  }
  componentDidMount() {
    const canvas = ReactDom.findDOMNode(this.refs['canvas']);
    const renderer = PIXI.autoDetectRenderer(canvas.clientWidth * window.devicePixelRatio, canvas.clientHeight * window.devicePixelRatio);

    canvas.appendChild(renderer.view);
    renderer.autoResize = true;

    this.setState({
      renderer: renderer
    });
    // this.props.dispatch({type: "SET_CANVAS_SIZE", payload: [canvas.clientWidth, canvas.clientHeight]});

    // requestAnimationFrame(this.animate.bind(this));
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.window.size[0] != nextProps.window.size[0] || this.props.window.size[1] != nextProps.window.size[1]) {
      const canvas = ReactDom.findDOMNode(this.refs['canvas']);
      this.state.renderer.resize(canvas.clientWidth, canvas.clientHeight);
      this.props.dispatch({type: "SET_CANVAS_SIZE", payload: [canvas.clientWidth, canvas.clientHeight]});
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUnmount() {

  }
  render() {
    return(
      <div ref="canvas" className="canvas"><Stage renderer={this.state.renderer} /></div>
    );
  }
}
