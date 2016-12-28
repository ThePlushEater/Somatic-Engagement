import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import * as PIXI from 'pixi.js';

import Canvas from './../canvas';
import Content from './../content';

import { fetchPosts } from "./../../actions/postsActions";


require('./index.scss');

@connect((store) => {
  return {
    localization: store.localization,
    canvas: store.canvas,
  }
})
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  handleAssetsLoaded() {
    this.setState({
      loading: false,
    });
    document.querySelector('.body').scrollLeft = 1;
  }
  componentWillMount() {
    this.props.dispatch(fetchPosts());
  }
  componentDidMount() {
    PIXI.loader
      .add("assets/trike-frame-1.png")
      .add("assets/trike-frame-2.png")
      .add("assets/cloud-1.png")
      .add("assets/mountain-1.png")
      .add("assets/mountain-2.png")
      .add("assets/mountain-3.png")
      .add("assets/mountain-4.png")
      .add("assets/mountain-5.png")
      .add("assets/mountain-6.png")
      .add("assets/flower-1.png")
      .add("assets/flower-2.png")
      .add("assets/tree-1.png")
      .add("assets/seesaw-actors.png")
      .add("assets/seesaw-base.png")
      .add("assets/junglegym-actor.png")
      .add("assets/junglegym-base-left.png")
      .add("assets/junglegym-base-right.png")
      .add("assets/library-1.png")
      .add("assets/librarian-frame-1.png")
      .add("assets/librarian-frame-2.png")
      .add("assets/librarian-door.png")
      .add("assets/librarian-frame.png")
      .add("assets/panel-1.png")
      .load(this.handleAssetsLoaded.bind(this));
  }
  componentWillReceiveProps(nextProps) {

  }
  render() {
    const { localization } = this.props.localization;
    if (this.state.loading) {
      return(
        <div className="app">
          <div className="loader">
            <img className="logo" src="./logo.png" />
          </div>
          <Canvas />
          <Content />
        </div>
      );
    } else {
      return(
        <div className="app">
          <div className="loader loaded">
            <img className="logo" src="./logo.png" />
          </div>
          <Canvas />
          <Content />
        </div>
      );
    }
  }
}

// <div className="content" dangerouslySetInnerHTML={{__html: localization.homepagecontent}} />
