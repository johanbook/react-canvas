```
import { Canvas } from ".";

const NUM = 30;
const items = [];
for(let idx = 0; idx < NUM; idx++){
  items.push({x: idx/NUM, y: 0})
}

const handleUpdate = (t) => {
 for(const idx in items) {
  const item = items[idx];
  item.y = Math.sin(item.x*8 +t-0.5)/2 + 0.5;
 }
}

<Canvas
  items={items}
  height={100}
  onUpdate={handleUpdate}
  width={300}
/>
```

```
import { Canvas } from ".";

const NUM = 10;
const items = [];
for(let idx = 0; idx < NUM; idx++){
  items.push({x: 0.5, y: idx*360/NUM})
}

const handleUpdate = (t) => {
 for(const idx in items) {
  const item = items[idx];
  item.y += 0.03;
 }
}

<Canvas
  items={items}
  height={100}
  onUpdate={handleUpdate}
  renderOptions={{
  clearOnUpdate: true,
  fps: 24,
    transform: "radial",
    virtualHeight: 1,
    virtualWidth: 1,
  }}
  width={300}
/>
```
