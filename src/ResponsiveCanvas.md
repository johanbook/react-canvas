```
import ResponsiveCanvas from ".";

const NUM = 100;
const items = [];
for(let idx = 0; idx < NUM; idx++){
  items.push({x: idx/NUM, y: 0})
}

const handleUpdateItem = (item, t) => {
  item.y = Math.sin(item.x*8 +t-0.5)/2 + 0.5;
}


<ResponsiveCanvas
  items={items}
  height={100}
  onUpdateItem={handleUpdateItem}
/>
```

```
import ResponsiveCanvas from ".";

const NUM = 100;
const items = [];
for(let idx = 0; idx < NUM; idx++){
  items.push({x: idx/NUM, y: 0})
}

const handleUpdateItem = (item, t) => {
  item.y = Math.sin(item.x*8 +t-0.5)/2 + 0.5;
}


<ResponsiveCanvas
  div
  items={items}
  height={100}
  onUpdateItem={handleUpdateItem}
>
  <center>
  <h2>react-canvas</h2>
  <p>Simplfy your use of <code>Canvas</code></p>
  </center>
</ResponsiveCanvas>
```
