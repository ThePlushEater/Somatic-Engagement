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
export default class Junglegym extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    }
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  animate() {
    const { window, item } = this.props;
    let scale = Math.min(window.size[0] / window.minSize[0], 1);

    let tweenStep1 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep2 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep3 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep4 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep5 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep6 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep7 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep8 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep9 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep10 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep11 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep12 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep13 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep14 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep15 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep16 = PIXI.tweenManager.createTween(this.actor.position);
    let tweenStep17 = PIXI.tweenManager.createTween(this.actor.position);


    tweenStep1.loop = false;
    tweenStep1.time = 500;
    tweenStep1.easing = PIXI.tween.Easing.inOutCubic();
    tweenStep1.to({
      x: 105 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
      y: -30 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
    });
    tweenStep1.start();

    tweenStep1.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep2.loop = false;
        tweenStep2.time = 500;
        tweenStep2.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep2.to({
          x: 95 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -70 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep2.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep2.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep3.loop = false;
        tweenStep3.time = 500;
        tweenStep3.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep3.to({
          x: 65 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -100 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep3.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep3.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep4.loop = false;
        tweenStep4.time = 500;
        tweenStep4.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep4.to({
          x: 30 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -125 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep4.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep4.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep5.loop = false;
        tweenStep5.time = 500;
        tweenStep5.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep5.to({
          x: 0 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -135 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep5.start();
      }.bind(this), 750);
    }.bind(this));

    tweenStep5.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep6.loop = false;
        tweenStep6.time = 500;
        tweenStep6.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep6.to({
          x: -30 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -125 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep6.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep6.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep7.loop = false;
        tweenStep7.time = 500;
        tweenStep7.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep7.to({
          x: -65 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -100 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep7.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep7.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep8.loop = false;
        tweenStep8.time = 500;
        tweenStep8.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep8.to({
          x: -95 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -70 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep8.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep8.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep9.loop = false;
        tweenStep9.time = 500;
        tweenStep9.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep9.to({
          x: -105 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -30 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep9.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep9.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep10.loop = false;
        tweenStep10.time = 500;
        tweenStep10.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep10.to({
          x: -95 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -70 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep10.start();
      }.bind(this), 2500);
    }.bind(this));

    tweenStep10.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep11.loop = false;
        tweenStep11.time = 500;
        tweenStep11.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep11.to({
          x: -65 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -100 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep11.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep11.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep12.loop = false;
        tweenStep12.time = 500;
        tweenStep12.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep12.to({
          x: -30 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -125 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep12.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep12.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep13.loop = false;
        tweenStep13.time = 500;
        tweenStep13.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep13.to({
          x: 0 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -135 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep13.start();
      }.bind(this), 750);
    }.bind(this));

    tweenStep13.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep14.loop = false;
        tweenStep14.time = 500;
        tweenStep14.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep14.to({
          x: 30 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -125 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep14.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep14.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep15.loop = false;
        tweenStep15.time = 500;
        tweenStep15.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep15.to({
          x: 65 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -100 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep15.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep15.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep16.loop = false;
        tweenStep16.time = 500;
        tweenStep16.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep16.to({
          x: 95 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -70 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep16.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep16.once('end', function() {
      setTimeout(function() {
        const window = store.getState().window;
        tweenStep17.loop = false;
        tweenStep17.time = 500;
        tweenStep17.easing = PIXI.tween.Easing.inOutCubic();
        tweenStep17.to({
          x: 105 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
          y: -30 * Math.min(window.size[0] / window.minSize[0], 1) * item.size,
        });
        tweenStep17.start();
      }.bind(this), 1000);
    }.bind(this));

    tweenStep17.once('end', function() {
      this.animate();
    }.bind(this), 2500);
  }
  componentWillReceiveProps(nextProps) {
    const { parent, window, canvas, item } = nextProps;
    // Hit detection with the player.
    if ((this.object.position.x - this.baseLeft.texture.width < canvas.player.x + canvas.player.texture.width * 0.4) && (this.object.position.x + this.baseRight.texture.width > canvas.player.x - canvas.player.texture.width * 0.4) ) {
      if (!this.state.active) {
        this.setState({
          active: true,
        });
        let scale = Math.min(window.size[0] / window.minSize[0], 1);
        let tweenInit = PIXI.tweenManager.createTween(this.actor.position);
        tweenInit.loop = false;
        tweenInit.time = 150;
        tweenInit.easing = PIXI.tween.Easing.inOutCubic();
        tweenInit.to({
          x: 110 * scale * item.size
        });
        tweenInit.start();
        tweenInit.once('end', this.animate.bind(this));

        let tweenJumping = PIXI.tweenManager.createTween(this.actor.anchor);
        tweenJumping.loop = true;
        tweenJumping.pingPong = true;
        tweenJumping.time = 500;
        tweenJumping.easing = PIXI.tween.Easing.inOutCubic();
        tweenJumping.to({
          y: 0.975
        });
        tweenJumping.start();
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

        this.baseLeft = new PIXI.Sprite(PIXI.loader.resources["assets/junglegym-base-left.png"].texture);
        this.baseLeft.anchor.set(1, 1);
        this.baseLeft.scale.set(scale * item.size, scale * item.size);
        this.baseLeft.alpha = item.opacity;
        this.object.addChild(this.baseLeft);

        this.actor = new PIXI.Sprite(PIXI.loader.resources["assets/junglegym-actor.png"].texture);
        this.actor.anchor.set(0.5, 1);
        this.actor.position.set(145 * scale * item.size, 0);
        this.actor.scale.set(scale * item.size * 1.25, scale * item.size * 1.25);
        this.actor.alpha = item.opacity;
        this.object.addChild(this.actor);

        this.baseRight = new PIXI.Sprite(PIXI.loader.resources["assets/junglegym-base-right.png"].texture);
        this.baseRight.anchor.set(0, 1);
        this.baseRight.scale.set(scale * item.size, scale * item.size);
        this.baseRight.alpha = item.opacity;
        this.object.addChild(this.baseRight);
      } else {
        this.object.position.set(-3 * window.percentage * item.speed * canvas.size[0] + item.position[0] * canvas.size[0], canvas.size[1] - 64 * scale + item.position[1] * 64 * scale);
        this.actor.scale.set(scale * item.size * 1.25, scale * item.size * 1.25);
        this.baseLeft.scale.set(scale * item.size, scale * item.size);
        this.baseRight.scale.set(scale * item.size, scale * item.size);
        // this.actor.position.set(145 * scale * item.size, 0);
      }
    }
    return null;
  }
}
