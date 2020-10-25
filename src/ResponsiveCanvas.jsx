import React, { useEffect, useRef, useState } from "react";

import Canvas from "./Canvas";

/** A responsive wrapper around `<Canvas/>` */
export default function ResponsiveCanvas({
  children,
  className,
  div = false,
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

  const divStyle = {};
  if (div) {
    divStyle.position = "absolute";
  }

  return (
    <div className={className} ref={ref} style={style}>
      <Canvas height={height} width={width} style={divStyle} {...props} />
      <div className={classes.children}>{children}</div>
    </div>
  );
}
