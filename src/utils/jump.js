import { easeInOutQuad, easeInOutCubic } from "./math";
import store from "./../store/store";

export class JumpHorizontal {
  constructor(selector, target, duration) {
    this.source = document.querySelector(selector);
    this.depart = this.source.scrollLeft;
    this.destination = target - this.depart;
    this.target = target;
    this.duration = duration;
    this.startTime = Date.now();
    this.easing = easeInOutCubic;
    if (store.getState().window.size[0] < 1024) {
      this.easing = easeInOutQuad;
      this.duration = duration * 0.75;
    }
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    const now = Date.now();
    const current = now - this.startTime;
    const position = this.easing(current, this.depart, this.destination, this.duration);

    this.source.scrollLeft = position;
    current < this.duration ? requestAnimationFrame(this.animate.bind(this)) : this.end()
  }
  end() {
    this.source.scrollLeft = this.target;
  }
}
