d3.json('static/data.geojson').then(function (data, err) {
  if (err) throw err;

  console.log(data);


  // Heat Map

  var myMap = L.map("map", {
    center: [27.6648, -81.5158],
    zoom: 7
  });

  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);



  // Create a new choropleth layer
  geojson = L.choropleth(data, {

    // Define what property in the features to use
    valueProperty: "attacks",



    // Set color scale
    scale: ['#00FF00', '#33ff00', '#66ff00', '#ccff00', '#FFFF00', '#FFCC00', '#ff9900', '#ff6600', '#FF3300', '#FF0000', '#660000'],



    // Number of breaks in step range
    steps: 12,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.namelsad +
        "<hr>Attacks :" + feature.properties.attacks

      );
    }
  }).addTo(myMap);


  // Set up the legend
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];


    // Add min & max
    var legendInfo = "<h1>Shark Attacks</h1>" +
      "<div class=\"labels\">" +
      "<div class=\"min\">" + limits[0] + "</div>" +
      "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function (limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;

  };



  // Adding legend to the map
  legend.addTo(myMap);

});
