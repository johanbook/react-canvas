import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Canvas, { propTypes } from "./Canvas";

/** A responsive wrapper around `<Canvas/>` */
export default function ResponsiveCanvas({
  children,
  className,
  overlay,
  style,
  ...props
}) {
  const classes = {};
  const ref = useRef();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(ref.current.offsetHeight);
    setWidth(ref.current.offsetWidth);
  }, [setWidth]);

  const canvasStyle = {};
  if (overlay === undefined) {
    overlay = Boolean(children);
  }
  if (overlay) {
    canvasStyle.position = "absolute";
  }

  return (
    <div
      className={className}
      ref={ref}
      style={{ height: "100%", width: "100%", ...style }}
    >
      <Canvas height={height} width={width} style={canvasStyle} {...props} />
      <div className={classes.children}>{children}</div>
    </div>
  );
}

ResponsiveCanvas.propypes = {
  ...propTypes,
  /** If children should overlay canvas */
  overlay: PropTypes.bool,
};
