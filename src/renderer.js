import * as transforms from "./transform";

/** Class that handles all canvas rendering */
export default class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.t = 0;
  }

  render(items, options) {
    if (!this.canvas) {
      return;
    }
    this.t += 0.01;

    const height = this.canvas.offsetHeight;
    const width = this.canvas.offsetWidth;
    const context = this.canvas.getContext("2d");

    const xScale = width / options.virtualWidth;
    const yScale = height / options.virtualHeight;

    if (options.clearOnUpdate) {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    let transformFn;
    if (options.transform && options.transform in transforms) {
      transformFn = transforms[options.transform];
    }

    for (let idx in items) {
      const { color = options.defaultColor, size = 4, x, y } = items[idx];
      let position = [x, y];
      if (transformFn) {
        position = transformFn(...position);
      }

      context.beginPath();
      context.strokeStyle = color;
      context.rect(xScale * position[0], yScale * position[1], size, size);
      context.stroke();

      options.onUpdateItem(items[idx], this.t);
    }

    options.onUpdate(this.t);
  }
}
