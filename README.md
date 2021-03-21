# Leaflet.Control.Opacity 

Leaflet.Control.Opacity is a Leaflet plugin that makes multiple tile layers transparent. (Leaflet v1.x.x)  
[Leaflet Plugins](https://leafletjs.com/plugins.html#tileimage-display)  
[npm](https://www.npmjs.com/package/leaflet.control.opacity)  

<br>

Browser Support
- Chrome
- Firefox
- Safari

<br>

## Usage  

![Leaflet.Control.Opacity](./img/img_01.gif)

<br>

### Demo  

[demo](https://dayjournal.github.io/Leaflet.Control.Opacity)

<br>

### Option  

```javascript
//If true, the control will be collapsed into an icon and expanded on mouse hover or touch.
collapsed: false or true

//The position of the control (one of the map corners).
position: 'topleft' or 'topright' or 'bottomleft' or 'bottomright'

//Label display of title (e.g. "Layers Opacity")
label: string or null
```

<br>

### Example

./docs

index.html
```html
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8" />
        <title>Leaflet.Control.Opacity example</title>

        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <link href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" rel="stylesheet" />

        <script src="plugin/Leaflet.Control.Opacity/dist/L.Control.Opacity.js"></script>
        <link href="plugin/Leaflet.Control.Opacity/dist/L.Control.Opacity.css" rel="stylesheet" />

        <link href="css/style.css" rel="stylesheet" />
    </head>
    <body>
        <div id="map"></div>
        <script src="js/app.js"></script>
    </body>
</html>
```

style.css
```css
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

#map {
    z-index: 0;
    height: 100%;
}
```

app.js
```javascript
//MIERUNE Color
const m_color = new L.tileLayer('https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//MIERUNE MONO
const m_mono = new L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//OSM
const o_std = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});

//GSI Pale
const t_pale = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution:
        "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//GSI Ort
const t_ort = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    attribution:
        "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//MAP
const map = L.map('map', {
    center: [35.6831925, 139.7511307],
    zoom: 13,
    zoomControl: true,
    layers: [m_mono],
});

//BaseLayer
const Map_BaseLayer = {
    'MIERUNE Color': m_color,
    'MIERUNE MONO': m_mono,
};

//AddLayer
const Map_AddLayer = {
    'OSM': o_std,
    'GSI Pale': t_pale,
    'GSI Ort': t_ort,
};

//LayerControl
L.control
    .layers(Map_BaseLayer, Map_AddLayer, {
        collapsed: false,
    })
    .addTo(map);

//OpacityControl
L.control
    .opacity(Map_AddLayer, {
        label: 'Layers Opacity',
    })
    .addTo(map);
```

<br>

### Example - npm

Start Leaflet easily. [Leaflet v1.x.x, webpack]  
[leaflet-starter](https://github.com/dayjournal/leaflet-starter) 

Install package
```bash
npm install leaflet.control.opacity
```

main.js
```javascript
// CSS import
import "leaflet/dist/leaflet.css";
import "leaflet.control.opacity/dist/L.Control.Opacity.css";
import "./css/style.css";

// JS import
import 'leaflet.control.opacity';
import './js/app.js';
```

app.js
```javascript
//MIERUNE Color
const m_color = new L.tileLayer('https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//MIERUNE MONO
const m_mono = new L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//OSM
const o_std = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});

//GSI Pale
const t_pale = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution:
        "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//GSI Ort
const t_ort = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    attribution:
        "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//MAP
const map = L.map('map', {
    center: [35.6831925, 139.7511307],
    zoom: 13,
    zoomControl: true,
    layers: [m_mono],
});

//BaseLayer
const Map_BaseLayer = {
    'MIERUNE Color': m_color,
    'MIERUNE MONO': m_mono,
};

//AddLayer
const Map_AddLayer = {
    'OSM': o_std,
    'GSI Pale': t_pale,
    'GSI Ort': t_ort,
};

//LayerControl
L.control
    .layers(Map_BaseLayer, Map_AddLayer, {
        collapsed: false,
    })
    .addTo(map);

//OpacityControl
L.control
    .opacity(Map_AddLayer, {
        label: 'Layers Opacity',
    })
    .addTo(map);
```

<br>

## License
MIT

Copyright (c) 2018-2021 Yasunori Kirimoto

<br>

---

<br>

### Japanese

<br>

# Leaflet.Control.Opacity 

Leaflet.Control.Opacityは、複数のタイルレイヤーを透過するLeafletのプラグインです。 (Leaflet v1.x.x)  
[Leaflet Plugins](https://leafletjs.com/plugins.html#tileimage-display)  
[npm](https://www.npmjs.com/package/leaflet.control.opacity)  

<br>

対応ブラウザ
- Chrome
- Firefox
- Safari

<br>

## 使用方法  

![Leaflet.Control.Opacity](./img/img_01.gif)

<br>

### デモ  

[デモ](https://dayjournal.github.io/Leaflet.Control.Opacity)

<br>

### オプション  

```javascript
//コントロールの折りたたみ設定。(デフォルト:折りたたみ無し)
collapsed: false or true

//コントロールの配置設定。(デフォルト:右上配置)
position: 'topleft' or 'topright' or 'bottomleft' or 'bottomright'

//タイトルのラベル表示（例:Layers Opacity）
label: string or null
```

<br>

### 例

./docs

index.html
```html
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8" />
        <title>Leaflet.Control.Opacity example</title>

        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <link href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" rel="stylesheet" />

        <script src="plugin/Leaflet.Control.Opacity/dist/L.Control.Opacity.js"></script>
        <link href="plugin/Leaflet.Control.Opacity/dist/L.Control.Opacity.css" rel="stylesheet" />

        <link href="css/style.css" rel="stylesheet" />
    </head>
    <body>
        <div id="map"></div>
        <script src="js/app.js"></script>
    </body>
</html>
```

style.css
```css
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

#map {
    z-index: 0;
    height: 100%;
}
```

app.js
```javascript
//MIERUNE Color
const m_color = new L.tileLayer('https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//MIERUNE MONO
const m_mono = new L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//OSM
const o_std = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});

//GSI Pale
const t_pale = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution:
        "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//GSI Ort
const t_ort = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    attribution:
        "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//MAP
const map = L.map('map', {
    center: [35.6831925, 139.7511307],
    zoom: 13,
    zoomControl: true,
    layers: [m_mono],
});

//BaseLayer
const Map_BaseLayer = {
    'MIERUNE Color': m_color,
    'MIERUNE MONO': m_mono,
};

//AddLayer
const Map_AddLayer = {
    'OSM': o_std,
    'GSI Pale': t_pale,
    'GSI Ort': t_ort,
};

//LayerControl
L.control
    .layers(Map_BaseLayer, Map_AddLayer, {
        collapsed: false,
    })
    .addTo(map);

//OpacityControl
L.control
    .opacity(Map_AddLayer, {
        label: 'Layers Opacity',
    })
    .addTo(map);
```

<br>

### 例 - npm

Leafletを手軽に始める [Leaflet v1.x.x, webpack]  
[leaflet-starter](https://github.com/dayjournal/leaflet-starter) 

パッケージインストール
```bash
npm install leaflet.control.opacity
```

main.js
```javascript
// CSS import
import "leaflet/dist/leaflet.css";
import "leaflet.control.opacity/dist/L.Control.Opacity.css";
import "./css/style.css";

// JS import
import 'leaflet.control.opacity';
import './js/app.js';
```

app.js
```javascript
//MIERUNE Color
const m_color = new L.tileLayer('https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//MIERUNE MONO
const m_mono = new L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL.",
});

//OSM
const o_std = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});

//GSI Pale
const t_pale = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution:
        "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//GSI Ort
const t_ort = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    attribution:
        "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>",
});

//MAP
const map = L.map('map', {
    center: [35.6831925, 139.7511307],
    zoom: 13,
    zoomControl: true,
    layers: [m_mono],
});

//BaseLayer
const Map_BaseLayer = {
    'MIERUNE Color': m_color,
    'MIERUNE MONO': m_mono,
};

//AddLayer
const Map_AddLayer = {
    'OSM': o_std,
    'GSI Pale': t_pale,
    'GSI Ort': t_ort,
};

//LayerControl
L.control
    .layers(Map_BaseLayer, Map_AddLayer, {
        collapsed: false,
    })
    .addTo(map);

//OpacityControl
L.control
    .opacity(Map_AddLayer, {
        label: 'Layers Opacity',
    })
    .addTo(map);
```

<br>

## ライセンス
MIT

Copyright (c) 2018-2021 Yasunori Kirimoto

<br>