import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import Renderer from "./renderer";

const defaultRenderOptions = {
  clearOnUpdate: true,
  defaultColor: "rgb(150,150,150,0.8)",
  fps: 24,
  transform: null,
  virtualHeight: 1,
  virtualWidth: 1,
};

/** A Canvas with simplified rendering functions */
export default function Canvas({
  items,
  height,
  onUpdate = () => {},
  onUpdateItem = () => {},
  renderOptions = {},
  style,
  width,
  ...props
}) {
  const canvas = useRef();
  const _renderOptions = { ...defaultRenderOptions, ...renderOptions };

  useEffect(() => {
    // Do not create renderer if sizing is not complete
    if (canvas.current.offsetWidth === 0) {
      return;
    }

    const renderer = new Renderer(canvas.current);
    const timer = setInterval(() => {
      renderer.render(items, { ..._renderOptions, onUpdate, onUpdateItem });
    }, 1000 / renderOptions.fps);

    return () => clearInterval(timer);
  });

  return (
    <canvas
      ref={canvas}
      height={height}
      width={width}
      style={{ zIndex: -1, ...style }}
      {...props}
    />
  );
}

Canvas.propTypes = {
  /** Rendered items */
  items: PropTypes.arrayOf(
    PropTypes.exact({
      /** Particle color */
      color: PropTypes.string,
      /** Particle size. Default 1 */
      size: PropTypes.number,
      /** Particle x position */
      x: PropTypes.number.isRequired,
      /** Particle y position */
      y: PropTypes.number.isRequired,
    })
  ).isRequired,
  /** Height of canvas */
  height: PropTypes.number.isRequired,
  /** Custom rendering options */
  renderOptions: PropTypes.shape({
    /** If canvas should be cleared in between
     * updates. Default `True` */
    clearOnUpdate: PropTypes.bool,
    /** Default item color */
    defaultColor: PropTypes.string,
    /** Frames per second. Default 24 */
    fps: PropTypes.number,
    /** Transform applied to positions */
    transform: PropTypes.oneOf([PropTypes.string, PropTypes.func]),
    /** What unit of the data correspond to a full width. Default 1 */
    virtualWidth: PropTypes.number,
    /** What unit of the data correspond to a full height. Default 1 */
    virtualHeight: PropTypes.number,
  }),
  /** Function called on each rerender */
  onUpdate: PropTypes.func,
  /** Function called for each item on each rerender */
  onUpdateItem: PropTypes.func,
  /** Width of canvas */
  width: PropTypes.number.isRequired,
};
