(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('DLMaps', ['exports'], factory) :
	(factory((global.DLMaps = {})));
}(this, (function (exports) { 'use strict';

/* global L, fetch */

// govuk consistent colours
var colours = {
  lightBlue: '#1d70b8',
  darkBlue: '#003078',
  brown: '#594d00',
  yellow_brown: '#a0964e'
};

function Map ($module) {
  this.$module = $module;
}

Map.prototype.init = function (params) {
  this.setupOptions(params);
  this.tiles = this.setTiles();
  this.map = this.createMap();

  // create layer to contain all boundaries
  // needs to be featureGroup so that it has getBounds() func
  this.geoBoundaries = L.featureGroup().addTo(this.map);

  if (params.boundaryURLs.length) {
    this.plotBoundaries(params.boundaryURLs);
  }
};

Map.prototype.setTiles = function () {
  return L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })
};

Map.prototype.createMap = function () {
  var latLng = L.latLng(this.default_pos[0], this.default_pos[1]);
  return L.map(this.mapId, {
    center: latLng,
    zoom: this.default_zoom,
    layers: [this.tiles]
  })
};

Map.prototype.plotBoundaries = function (urls) {
  var that = this;
  var count = 0;
  urls.forEach(function (url) {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        let boundary = L.geoJSON(data, {
          style: {
            fillOpacity: 0.2,
            weight: 2,
            color: colours.darkBlue,
            fillColor: colours.lightBlue
          }
        }).addTo(that.geoBoundaries);
        count++;
        // only pan map once all boundaries have loaded
        if (count === urls.length) {
          that.map.fitBounds(that.geoBoundaries.getBounds());
        }
      });
  });
};

Map.prototype.setupOptions = function (params) {
  params = params || {};
  this.default_pos = params.default_pos || [52.561928, -1.464854];
  this.default_zoom = params.default_zoom || 5;
  this.mapId = params.mapId || 'aMap';
};

exports.Map = Map;

})));
