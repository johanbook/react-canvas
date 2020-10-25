/** Transform polar coordinates to Cartesian ones.
 * NB: Angle uses radians. */
export function radial(r, theta) {
  const x = r * Math.cos(theta);
  const y = r * Math.sin(theta);
  return [x / 2 + 0.5, y / 2 + 0.5];
}
