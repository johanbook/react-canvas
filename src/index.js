export { default as Canvas } from "./Canvas";
export { default } from "./ResponsiveCanvas";

export function createItems(number) {
  const items = [];
  for (let idx = 0; idx < number; idx++) {
    items.push({ x: idx / number, y: 0 });
  }

  return items;
}
