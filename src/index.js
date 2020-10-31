export { default as Canvas } from "./Canvas";
export { default } from "./ResponsiveCanvas";

export function createItems(number) {
  const items = [];
  for (let idx = 0; idx < number; idx++) {
    items.push({ x: idx / number, y: 0 });
  }

  return items;
}

/** Create 2-dimensional grid */
export function createGrid(numX, numY) {
  const items = [];
  for (let i = 0; i < numX; i++)
    for (let j = 0; j < numX; j++) {
      items.push({ x: i / numX, y: j / numY });
    }
  return items;
}
