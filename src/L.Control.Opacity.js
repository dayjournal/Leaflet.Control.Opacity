L.Control.Opacity = L.Control.extend({
	options: {
		collapsed: false,
		position: 'topright',
		label: null
	},
	initialize: function (overlays, options) {
		L.Util.setOptions(this, options);
		this._layerControlInputs = [];
		this._layers = [];
		this._lastZIndex = 0;
		this._handlingClick = false;
		for (var i in overlays) {
			this._addLayer(overlays[i], i, true);
		}
	},
	onAdd: function (map) {
		this._initLayout();
		this._update();
		return this._container;
	},
	expand: function () {
		L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
		this._form.style.height = null;
		var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
		if (acceptableHeight < this._form.clientHeight) {
			L.DomUtil.addClass(this._form, 'leaflet-control-layers-scrollbar');
			this._form.style.height = acceptableHeight + 'px';
		} else {
			L.DomUtil.removeClass(this._form, 'leaflet-control-layers-scrollbar');
		}
		return this;
	},
	collapse: function () {
		L.DomUtil.removeClass(this._container, 'leaflet-control-layers-expanded');
		return this;
	},
	_initLayout: function () {
		var className = 'leaflet-control-layers',
		    container = this._container = L.DomUtil.create('div', className),
		    collapsed = this.options.collapsed;
		container.setAttribute('aria-haspopup', true);
		L.DomEvent.disableClickPropagation(container);
		L.DomEvent.disableScrollPropagation(container);
		if(this.options.label){
			var labelP = L.DomUtil.create('p', className + "-label");
			labelP.innerHTML = this.options.label;
			container.appendChild(labelP);
		}
		var form = this._form = L.DomUtil.create('form', className + '-list');
		if (collapsed) {
			this._map.on('click', this.collapse, this);
			if (!L.Browser.android) {
				L.DomEvent.on(container, {
					mouseenter: this.expand,
					mouseleave: this.collapse
				}, this);
			}
		}
		var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
		link.href = '#';
		link.title = 'Layers';
		if (L.Browser.touch) {
			L.DomEvent.on(link, 'click', L.DomEvent.stop);
			L.DomEvent.on(link, 'click', this.expand, this);
		} else {
			L.DomEvent.on(link, 'focus', this.expand, this);
		}
		if (!collapsed) {
			this.expand();
		}
		this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
		this._separator = L.DomUtil.create('div', className + '-separator', form);
		this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);
		container.appendChild(form);
	},
	_getLayer: function (id) {
		for (var i = 0; i < this._layers.length; i++) {
			if (this._layers[i] && L.Util.stamp(this._layers[i].layer) === id) {
				return this._layers[i];
			}
		}
	},
	_addLayer: function (layer, name, overlay) {
		this._layers.push({
			layer: layer,
			name: name,
			overlay: overlay
		});
	},
	_update: function () {
		if (!this._container) { return this; }
		L.DomUtil.empty(this._baseLayersList);
		L.DomUtil.empty(this._overlaysList);
		this._layerControlInputs = [];
		var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;
		for (i = 0; i < this._layers.length; i++) {
			obj = this._layers[i];
			this._addItem(obj);
			overlaysPresent = overlaysPresent || obj.overlay;
			baseLayersPresent = baseLayersPresent || !obj.overlay;
			baseLayersCount += !obj.overlay ? 1 : 0;
		}
		if (this.options.hideSingleBase) {
			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
		}
		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
		return this;
	},
	_addItem: function (obj) {
		var label = document.createElement('label'),
		    input;
		if (obj.overlay) {
			input = document.createElement('input');
			input.type = 'range';
			input.className = 'leaflet-control-layers-range';
            input.min = 0;
            input.max = 100;
            input.value = 100;
		} else {
			input = this._createRadioElement('leaflet-base-layers', checked);
		}
		this._layerControlInputs.push(input);
		input.layerId = L.Util.stamp(obj.layer);
		L.DomEvent.on(input, 'click', this._onInputClick, this);
		L.DomEvent.on(input, 'touchend', this._onInputClick, this);
		var name = document.createElement('span');
		name.innerHTML = ' ' + obj.name;
		var holder = document.createElement('div');
		var holder2 = document.createElement('div');
		label.appendChild(holder);
		holder.appendChild(name);
		label.appendChild(holder2);
		holder2.appendChild(input);
		var container = obj.overlay ? this._overlaysList : this._baseLayersList;
		container.appendChild(label);
		return label;
	},
	_onInputClick: function () {
		var inputs = this._layerControlInputs,
			input, layer;
			
		this._handlingClick = true;
		
		for (var i = inputs.length - 1; i >= 0; i--) {
			input = inputs[i];
			layer = this._getLayer(input.layerId).layer;
			if( typeof layer._url === 'undefined'){
			}else{
				layer.setOpacity(input.value / 100);
			}
		}

		this._handlingClick = false;
		
		this._refocusOnMap();
	},
});

L.control.opacity = function (overlays, options) {
        return new L.Control.Opacity(overlays, options);
};
