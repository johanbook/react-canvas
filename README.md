# @johanbook/react-canvas

![](https://img.shields.io/travis/johanbook/react-canvas)
![](https://img.shields.io/npm/v/@johanbook/react-canvas)

This library aims to make it easier to draw on HTML canvases.

## Install

Install it using

```sh
npm install @johanbook/react-canvas
```

## Basic usage

We can create a simple wave as

```jsx
import Canvas from "@johanbook/react-canvas";

const NUM = 100;
const items = [];
for(let idx = 0; idx < NUM; idx++){
  items.push({x: idx/NUM, y: 0})
}

const handleUpdateItem = (item, t) => {
  item.y = Math.sin(item.x*8 +t-0.5)/2 + 0.5;
}

<Canvas
  items={items}
  height={100}
  onUpdateItem={handleUpdateItem}
/>
```
