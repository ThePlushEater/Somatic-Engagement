import { easeInOutCubic } from "./math";

export class JumpHorizontal {
  constructor(selector, target, duration) {
    this.source = document.querySelector(selector);
    this.depart = this.source.scrollLeft;
    this.destination = target - this.depart;
    this.duration = duration;
    this.startTime = Date.now();
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    const now = Date.now();
    const current = now - this.startTime;
    const position = easeInOutCubic(current, this.depart, this.destination, this.duration);
    this.source.scrollLeft = position;

    current < this.duration ? requestAnimationFrame(this.animate.bind(this)) : this.end.bind(this)
  }
  end() {
    this.source.scrollLeft = this.destination;
  }
}
