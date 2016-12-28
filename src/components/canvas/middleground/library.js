import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import store from "./../../../store/store";
import * as PIXI from 'pixi.js';

import { linear } from "./../../../utils/math";


@connect((store) => {
  return {
    localization: store.localization,
    window: store.window,
    canvas: store.canvas,
  }
})
export default class Library extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      frame: 0,
    }
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    const { parent, window, canvas, item } = nextProps;
    // Hit detection with the player.
    let scale = Math.min(window.size[0] / window.minSize[0], 1);
    if ((this.object.position.x - this.base.texture.width * scale < canvas.player.x + canvas.player.texture.width * 0.4) && (this.object.position.x * scale > canvas.player.x - canvas.player.texture.width * 0.4) ) {
      if (!this.state.active) {
        this.setState({
          active: true,
        });
        let tweenInit = PIXI.tweenManager.createTween(this.actor.anchor);
        tweenInit.loop = false;
        tweenInit.time = 250;
        tweenInit.easing = PIXI.tween.Easing.inOutCubic();
        tweenInit.to({
          x: 0.75
        });
        tweenInit.start();
        setInterval(function() {
          if (this.state.frame == 0) {
            this.actor.texture = PIXI.loader.resources["assets/librarian-frame-1.png"].texture;
          } else {
            this.actor.texture = PIXI.loader.resources["assets/librarian-frame-2.png"].texture;
          }
          this.setState({
            frame: (this.state.frame + 1) % 2,
          })
        }.bind(this), 500);
        //
        // tweenInit.once('end', function() {
        //   let tweenSwing = PIXI.tweenManager.createTween(this.actor);
        //   tweenSwing.loop = true;
        //   tweenSwing.time = 2500;
        //   tweenSwing.pingPong = true;
        //   tweenSwing.easing = PIXI.tween.Easing.inOutCubic();
        //   tweenSwing.from({
        //     rotation: -0.2
        //   });
        //   tweenSwing.to({
        //     rotation: 0.2
        //   });
        //   tweenSwing.start();
        // }.bind(this));
      }
    } else {
      if (window.openLibrary && window.size[0] >= 1024) {
        this.props.dispatch({type: "SET_OPEN_LIBRARY", payload: false});
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
  // handleOpenLibrary(event) {
  //   console.log("click");
  //   this.props.dispatch({type: "SET_OPEN_LIBRARY", payload: true});
  // }
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

        this.base = new PIXI.Sprite(PIXI.loader.resources["assets/library-1.png"].texture);
        this.base.anchor.set(0.5, 1);
        this.base.scale.set(scale * item.size, scale * item.size);
        this.base.alpha = item.opacity;
        this.object.addChild(this.base);

        this.frame = new PIXI.Sprite(PIXI.loader.resources["assets/librarian-frame.png"].texture);
        this.frame.anchor.set(0.5, 1);
        this.frame.scale.set(scale * item.size, scale * item.size);
        this.frame.alpha = item.opacity;
        this.object.addChild(this.frame);

        this.actor = new PIXI.Sprite(PIXI.loader.resources["assets/librarian-frame-1.png"].texture);
        this.actor.anchor.set(0.5, 1);
        // this.actor.position.set(0, -canvas.size[1] * scale * 0.0325);
        this.actor.scale.set(scale * item.size, scale * item.size);
        this.actor.alpha = item.opacity;

        // // Set interaction
        // this.actor.interactive = true;
        // this.actor.on('mousedown', this.handleOpenLibrary.bind(this));

        this.object.addChild(this.actor);

        this.door = new PIXI.Sprite(PIXI.loader.resources["assets/librarian-door.png"].texture);
        this.door.anchor.set(0.5, 1);
        // this.actor.position.set(0, -canvas.size[1] * scale * 0.0325);
        this.door.scale.set(scale * item.size, scale * item.size);
        this.door.alpha = item.opacity;
        this.object.addChild(this.door);



      } else {
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], canvas.size[1] - 64 * scale + item.position[1] * 64 * scale);
        this.frame.scale.set(scale * item.size, scale * item.size);
        this.base.scale.set(scale * item.size, scale * item.size);
        this.actor.scale.set(scale * item.size, scale * item.size);
        this.door.scale.set(scale * item.size, scale * item.size);
      }
    }
    return null;
  }
}
